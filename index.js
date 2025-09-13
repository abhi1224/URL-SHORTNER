const express = require("express")

const urlRoute = require("./routes/url")
const { connectToMongoDB } = require('./connect')
const URL = require('./models/url.model')
const path = require('path')

const staticRoute = require("./routes/staticRouter")

const PORT = 8000

const app = express()

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(() => console.log('MongoDB Connected !'))

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/url', urlRoute);
app.use('/', staticRoute);

// Server side rendering 
app.get('/test', async (req, res) => {
    const allUrls = await URL.find({});
    
    return res.render("home",{
        urls: allUrls,
    })
})

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        { shortId },
        { $push: { visitHistory: { timestamp: Date.now() } } },
        { new: true } // return the updated document
    );

    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    return res.redirect(entry.redirectURL);
});


app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);    
})