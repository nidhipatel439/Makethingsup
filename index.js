
const express = require("express");
const path = require("path");
// const bootstrap = require("bootstrap");

// initiate express app
const app = express();

const port = 3000;

//set up path to import file
app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    // console.log('request', req)
    // console.log('response', res)
    res.render("index", { title: "Home" });
});
app.get('/shop', (req, res) => {
    res.render("shop", { title: "Shop" });
});
app.get('/contact', (req, res) => {
    res.render("contact", { title: "Contact US" });
})

// run the app on port 
app.listen(port, () => {
    console.log(`running on port ${port}`)
});