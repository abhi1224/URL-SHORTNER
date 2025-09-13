const express = require("express")

const urlRoute = require("./routes/url")
const { connectToMongoDB } = require('./connect')
const URL = require('./models/url.model')

const PORT = 8000

const app = express()

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(() => console.log('MongoDB Connected !'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/url', urlRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL
        .findOneAndUpdate(
        {
            shortId
        }, 
        { $push:
            {
                visitHistory: {
                    timestamp: Date.now()
                }
            } 
        })
    res.redirect(entry.redirectURL);

})

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);    
})