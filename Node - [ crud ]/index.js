import express from 'express';

const app = express();
import path from 'path';

// TEMP ARRAY
const users = [];

app.use(express.static(path.join(path.resolve(),"./public"))); // use middleware using app.use() method
app.use(express.urlencoded({extended:true}))
// Setting up view Engine
app.set("view engine","ejs")

// GET HOME
app.get("/",(req,res)=>{
    res.render("index",{name:"anish"})
})

// FETCH FORM DATA
app.get("/success",(req,res)=>{
    res.render("success"); // SUCCESS FILE RENDER - // http://localhost:5000/success
})

// POST HOME
app.post("/contact",(req,res)=>{
    users.push({username:req.body.name, email:req.body.email});
    res.redirect("/success"); // REDIRECT ANOTHER ROUTES URL. // - http://localhost:5000/success
})


// GET USER FROM DATABASE
app.get("/users",(req,res)=>{
    res.json({
        users
    })
})

app.listen(5000,()=> console.log("server running"))