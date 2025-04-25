const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const connect=require("./config/db.js")
// Load env variables
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Routes
app.use("/api/auth", require("./routes/userRoutes"));
app.use("/api/profile", require("./routes/userProfile.routes"));
app.use("/api/meal-plans", require("./routes/mealplan.routes"));
app.use("/api/recipes", require("./routes/recipe.routes"));
app.use("/api/nutrition-log", require("./routes/nutritionLogRoutes"));
app.use("/api/grocery-list", require("./routes/groceryListRoutes"));

// Basic test route
app.get("/", (req, res) => {
  res.send("🌟 Nutrition App Backend is running!");
});

const PORT = process.env.PORT 
connect()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`)
    });
})
.catch((error)=>{
    console.log("Unable to connect to sever",error);
    process.exit(1);
    
})