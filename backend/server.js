
// require('dotenv').config();
// const express = require("express");
// const cors = require("cors");


// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// const helmet = require("helmet"); 
// app.use(helmet());




// const { mongoconnect } = require("./connection");
// // Connect using environment variable
// mongoconnect(process.env.MONGODB_URI)
//     .then(() => console.log("Mongodb is connected"));


// const authRoutes = require("./routes/auth");
// const servicesRoutes = require("./routes/servicesRoutes");
// const urlRoutes = require("./routes/urlRoutes");
// const { redirectController } = require("./controllers/urlController");


// app.get("/" , (req , res) =>{
//    return res.send("Welcome to server  ")
// });


// // Public redirect route (NO prefix)


// app.use("/auth" , authRoutes );
// app.use("/services" , servicesRoutes);
// app.use("/url" , urlRoutes );
// app.get("/u/:shortCode", redirectController);




// app.listen(PORT, () => {
//     console.log(`Server running on port: ${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-frontend-domain.vercel.app"
    ],
    credentials: true
  })
);

// Security
app.use(
  helmet({
    crossOriginEmbedderPolicy: false
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { mongoconnect } = require("./connection");

mongoconnect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"));

const authRoutes = require("./routes/auth");
const servicesRoutes = require("./routes/servicesRoutes");
const urlRoutes = require("./routes/urlRoutes");

app.use("/auth", authRoutes);
app.use("/services", servicesRoutes);
app.use("/url", urlRoutes);

// public redirect
app.get("/u/:shortCode", redirectController);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});