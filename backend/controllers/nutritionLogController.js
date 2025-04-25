const NutritionLog = require("../models/Nutritionlog.js");

// Create new nutrition log entry
exports.createLog = async (req, res) => {
  try {
    const { date, meals, totalCalories, macros } = req.body;

    const newLog = await NutritionLog.create({
      userId: req.user._id,
      date,
      meals,
      totalCalories,
      macros
    });

    res.status(201).json(newLog);
  } catch (error) {
    res.status(500).json({ error: "Failed to create nutrition log", details: error.message });
  }
};

// Get logs by date or all
exports.getLogs = async (req, res) => {
  try {
    const userId = req.user._id;
    const { date } = req.query;

    const filter = { userId };
    if (date) filter.date = date;

    const logs = await NutritionLog.find(filter).sort({ date: -1 });

    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch logs", details: error.message });
  }
};

// Update nutrition log entry by ID
exports.updateNutritionLog = async (req, res) => {
  try {
    const logId = req.params.id;
    const { date, meals, totalCalories, macros } = req.body;

    const updatedLog = await NutritionLog.findOneAndUpdate(
      { _id: logId, userId: req.user._id },
      { date, meals, totalCalories, macros },
      { new: true }
    );

    if (!updatedLog) {
      return res.status(404).json({ message: "Nutrition log not found" });
    }

    res.status(200).json({ message: "Log updated successfully", log: updatedLog });
  } catch (error) {
    res.status(500).json({ error: "Failed to update log", details: error.message });
  }
};

// Delete nutrition log entry by ID
exports.deleteNutritionLog = async (req, res) => {
  try {
    const logId = req.params.id;

    const deletedLog = await NutritionLog.findOneAndDelete({
      _id: logId,
      userId: req.user._id
    });

    if (!deletedLog) {
      return res.status(404).json({ message: "Nutrition log not found" });
    }

    res.status(200).json({ message: "Log deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete log", details: error.message });
  }
};
