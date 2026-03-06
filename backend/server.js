require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
      
//     ],
//     credentials: true
//   })
// );
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL
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
const { redirectController } = require("./controllers/urlController");

app.use("/auth", authRoutes);
app.use("/services", servicesRoutes);
app.use("/url", urlRoutes);

// public redirect
app.get("/u/:shortCode", redirectController);

// health route
app.get("/", (req, res) => {
  res.send("Utility Hub Backend Running 🚀");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});