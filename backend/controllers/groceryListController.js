const GroceryList = require("../models/Grocerylist.js");

// Create or update grocery list
exports.upsertGroceryList = async (req, res) => {
  try {
    const { week, items } = req.body;

    const updatedList = await GroceryList.findOneAndUpdate(
      { userId: req.user._id, week },
      { items },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({message:"created",updatedList});
  } catch (error) {
    res.status(500).json({ error: "Failed to save grocery list", details: error.message });
  }
};

// Get grocery list by weekStart
exports.getGroceryList = async (req, res) => {
  try {
    const userId = req.user._id;
    const { weekstart } = req.query;

    const list = await GroceryList.findOne({ userId, weekstart});

    if (!list) {
      return res.status(404).json({ message: "Grocery list not found for this week" });
    }

    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch grocery list", details: error.message });
  }
};
