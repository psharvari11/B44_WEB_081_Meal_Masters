// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const userProfileRouter = require("./routes/userProfile.routes");
const recipeRouter = require("./routes/recipe.routes");
const mealPlanRouter = require("./routes/mealplan.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", userProfileRouter);
app.use("/api", recipeRouter);
app.use("/api", mealPlanRouter);
app.use("/api/users", userRoutes); // route prefix for user auth

app.get("/", (req, res) => {
  res.send("Welcome to MealMaster API!");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));
