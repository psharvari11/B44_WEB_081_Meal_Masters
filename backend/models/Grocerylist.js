const mongoose = require("mongoose");

const groceryListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  week: String,
  items: [
    {
      name: String,
      bought: { type: Boolean, default: false }
    }
  ]
});

module.exports = mongoose.model("GroceryList", groceryListSchema);
