const express = require("express") ;
const cors = require("cors");
const users = require("./users");
const app = express();
const PORT = 5000 ;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const helmet = require("helmet");
app.use(helmet());



const {mongoconnect} = require("./connection");

//connection 
mongoconnect("mongodb+srv://ajeetchoudharyoffical2005_db_user:Vcg5Qfb2jItDufwV@cluster0.bqnbmi9.mongodb.net/?appName=Cluster0")
.then(() => console.log("Mongodb is connected"))

const authRoutes = require("./routes/auth");
const servicesRoutes = require("./routes/servicesRoutes");
const urlRoutes = require("./routes/urlRoutes");
const { redirectController } = require("./controllers/urlController");


app.get("/" , (req , res) =>{
   return res.send("Welcome to server  ")
});

app.get("/api/users" , (req , res) =>{
    return res.json(users);
} ) 

// Public redirect route (NO prefix)


app.use("/auth" , authRoutes );
app.use("/services" , servicesRoutes);
app.use("/url" , urlRoutes );
app.get("/u/:shortCode", redirectController);



app.listen(PORT , ()=>{
    console.log(`port is runnning on port no : ${PORT} `)
})