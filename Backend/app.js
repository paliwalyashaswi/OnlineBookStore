const express = require('express');
const mongoose = require('mongoose')
const router = require('./routes/Book-routes');
const app = express();

// Middleware

app.use("/books", router); // localhost:5000/books

mongoose
.connect("mongodb+srv://admin:uSnMmm93I445SGPo@cluster0.4gf9pyr.mongodb.net/?retryWrites=true&w=majority"
)
.then(()=> console.log("Connected to database!"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log(err));





// uSnMmm93I445SGPo