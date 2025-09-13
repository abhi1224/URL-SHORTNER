# 📌 URL Shortener

A simple and efficient **URL Shortening Service** built with **Node.js, Express, and MongoDB**.  
This project allows users to shorten long URLs into compact links and track analytics such as **total clicks** and **visit history**.

---

## 🚀 Features
- 🌐 **Server-Side Rendering** with EJS (no frontend framework needed).  
- 🔗 Generate unique short URLs from long links.  
- 🔁 Redirect short URLs to their original destination.  
- 📊 Track analytics:
  - Total clicks per short link.
  - Visit history with timestamps.  
- ⚡ RESTful API design.  
- 💾 MongoDB for persistent storage.  

---

## 🛠️ Tech Stack
- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/) 
- **Templating**: [EJS](https://ejs.co/)   
- **Database**: [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/)  
- **Utilities**: `shortid` for unique ID generation  

---

## 📂 Project Structure
```bash

URL-SHORTNER/
│── index.js # Entry point
│── connect.js # MongoDB connection
│── routes/
│ └── url.js # Route definitions
│── controllers/
│ └── url.js # Controller logic
│── models/
│ └── url.model.js # Mongoose schema
│── views/
│ └── home.ejs # home page (ejs server side rendering)
│── package.json
│── README.md

```


---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/short-url.git
   cd short-url

2. **Install dependencies**
    ```bash
    npm install

3. **Start MongoDB locally (or use MongoDB Atlas).**

4. **Run the server**
    ```bash
    node index.js
