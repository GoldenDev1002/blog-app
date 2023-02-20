let connect = require("./db/connection");

const express = require("express");
const app = express();
let bodyParser = require("body-parser");
let portNo = 1800;
let tasks = require("./routes/tasks");
let cors = require("cors");
let path = require("path");
let fileName = path.resolve(__dirname, "public");

app.use(express.static(fileName))

app.set("view engine", "ejs");
app.set("views", "htmlFile");
app.use(cors());

//.gitignore has the node modules and .env files that will be ignored as the app is pushed to giuthub 
//in order to prevent access to the mongo db connection
require("dotenv").config()


//middleware 

app.use(express.json())
//routes
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));




app.get("/hello", (req, res)=> {
    res.send("The Task Manager App");
})

app.get("/createBlog", (req, res)=> {
    res.render("create")
})

app.get("/home", (req, res)=> {
    res.redirect("/api/v1/tasks")
})

app.use("/api/v1/tasks", tasks);

app.use((req, res)=> {
    res.status(404).render("404")
})

//starts the server if there are no errors
const start = async ()=> {
try{
await connect(process.env.MONGO_URI); //calling the MONGO_URI from .env
app.listen(portNo, ()=> {
    `server is listening on ${portNo}....`
})


}catch(err){
console.log(err)
}
}

start()


/*
app.get("/hello/v1/tasks") -> get all tasks
app.post("/hello/v1/tasks") -> create a new task
app.get("/hello/v1/tasks/:id") -> get a particular task
app.patch("/hello/v1/tasks/:id") -> update a particular task
app.delete("/hello/v1/tasks/:id") -> delete a particular task


*/