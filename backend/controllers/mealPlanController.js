const MealPlan = require("../models/MealPlan.model.js");

// Create Meal Plan
exports.createMealPlan = async (req, res) => {
  const { weekStart, meals } = req.body;

  try {
    const newMealPlan = new MealPlan({
      userId: req.user.id,
      weekStart,
      meals,
    });

    await newMealPlan.save();

    res.status(201).json({ message: "Meal plan created successfully", mealPlan: newMealPlan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get All Meal Plans for a User
exports.getMealPlans = async (req, res) => {
  try {
    const mealPlans = await MealPlan.find({ userId: req.user.id });
    if (!mealPlans || mealPlans.length === 0) {
      return res.status(404).json({ message: "No meal plans found" });
    }
    res.status(200).json({ mealPlans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update Meal Plan
// exports.updateMealPlan = async (req, res) => {
//   const { mealPlanId, meals } = req.body;

//   try {
//     const updatedMealPlan = await MealPlan.findOneAndUpdate(
//       { _id: mealPlanId, userId: req.user.id },
//       { meals },
//       { new: true }
//     );

//     if (!updatedMealPlan) {
//       return res.status(404).json({ message: "Meal plan not found" });
//     }

//     res.status(200).json({ message: "Meal plan updated", mealPlan: updatedMealPlan });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
exports.updateMealPlan = async (req, res) => {
  const { meals } = req.body;
  const { id } = req.params;  // The meal plan ID from the URL parameter

  try {
    // Find the meal plan by its ID and ensure it's associated with the current user
    const updatedMealPlan = await MealPlan.findOneAndUpdate(
      { _id: id, userId: req.user._id },  // Use `id` from URL and validate user
      { meals },  // Update meals array
      { new: true }  // Return the updated meal plan
    );

    if (!updatedMealPlan) {
      return res.status(404).json({ message: "Meal plan not found or unauthorized" });
    }

    res.status(200).json({ message: "Meal plan updated", mealPlan: updatedMealPlan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// Delete Meal Plan
exports.deleteMealPlan = async (req, res) => {
  const { meals } = req.body;
  const { id } = req.params; 

  try {
    const deletedMealPlan = await MealPlan.findOneAndDelete({
      _id: id,
      userId: req.user.id,
    });

    if (!deletedMealPlan) {
      return res.status(404).json({ message: "Meal plan not found" });
    }

    res.status(200).json({ message: "Meal plan deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
