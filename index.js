const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
app.set("view engine", "ejs");
app.set("views", path.join(__dirname , "views"));
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname , "public")));

const port = 5000;

let data = [
    {
        id: uuidv4(),
        username: "uniquepatel01",
        news: "Csk is the powerful team in the ipl history",
        img: "https://source.unsplash.com/random/?cricket",

    },
    {
        id: uuidv4(),
        username: "rajdashrath",
        news: "Punjab never won the ipl title",
        img: "https://source.unsplash.com/random/?icc",

    },
    {
        id: uuidv4(),
        username: "surajkumaryadav",
        news: "Mi is only compititor of csk",
        img: "https://source.unsplash.com/random/?bcci",

    },
    

];

app.listen(port, ()=>{
    console.log("port is listening at 5000");
});

app.get("/home", (req, res)=>{
    res.render("index.ejs",{data});
});

app.get("/home/new", (req, res)=>{
    res.render("new.ejs");
});

app.post("/home", (req, res)=>{
    let{username, news, img} = req.body;
    let id = uuidv4();
    data.push({id, username, news,img});
    res.redirect("/home");
});
