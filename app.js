const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');


mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true
})

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", ()=>{
    console.log("Database is connected");
})






const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/makecampground', async(req, res)=>{
    const camp = new Campground({title: 'Ashkam', price: '12345'});
    await camp.save();
    res.send(camp);
})

app.get('/', (req, res)=>{
    res.render('home');
})
app.listen(3030, (req, res)=>{
    console.log("app is listening to the port 3030");
})