import React, { useState, useEffect } from "react";
import axios from "axios";

const MealPlanner = () => {
  const [weekStart, setWeekStart] = useState("");
  const [meals, setMeals] = useState([{ date: "", type: "breakfast", recipe: "" }]);
  const [mealPlans, setMealPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token"); // Adjust how you store your token

  const fetchMealPlans = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://mealmasterbackend.onrender.com/api/meal-plans", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMealPlans(res.data.mealPlans || []);
    } catch (err) {
      console.error(err);
      alert("Error fetching meal plans");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMealPlans();
  }, []);

  const handleMealChange = (index, field, value) => {
    const updatedMeals = [...meals];
    updatedMeals[index][field] = value;
    setMeals(updatedMeals);
  };

  const addMealField = () => {
    setMeals([...meals, { date: "", type: "breakfast", recipe: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://mealmasterbackend.onrender.com/api/meal-plans",
        { weekStart, meals },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Meal Plan Created Successfully! 🎉");
      setWeekStart("");
      setMeals([{ date: "", type: "breakfast", recipe: "" }]);
      fetchMealPlans();
    } catch (err) {
      console.error(err);
      alert("Error creating meal plan");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://mealmasterbackend.onrender.com/api/meal-plans/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Meal Plan Deleted 🗑️");
      fetchMealPlans();
    } catch (err) {
      console.error(err);
      alert("Error deleting meal plan");
    }
  };

  return (
    <div className="min-h-screen bg-grey-700 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-black mb-8">🍱 Plan Your Meals</h1>

      {/* Create Meal Plan Form */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl max-w-2xl w-full mb-10 backdrop-blur-lg bg-opacity-40">
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">Week Start Date:</label>
          <input
            type="date"
            value={weekStart}
            onChange={(e) => setWeekStart(e.target.value)}
            className="w-full p-3 rounded-xl border-none focus:ring-4 focus:ring-pink-300 outline-none"
            required
          />
        </div>

        {meals.map((meal, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="date"
              value={meal.date}
              onChange={(e) => handleMealChange(idx, "date", e.target.value)}
              className="p-3 rounded-xl focus:ring-4 focus:ring-purple-300 outline-none"
              required
            />
            <select
              value={meal.type}
              onChange={(e) => handleMealChange(idx, "type", e.target.value)}
              className="p-3 rounded-xl focus:ring-4 focus:ring-indigo-300 outline-none"
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
            </select>
            {/* <input
              type="text"
              placeholder="Recipe ID"
              value={meal.recipe}
              onChange={(e) => handleMealChange(idx, "recipe", e.target.value)}
              className="p-3 rounded-xl focus:ring-4 focus:ring-pink-300 outline-none"
              required
            /> */}
          </div>
        ))}

        <div className="flex justify-end mb-4">
          <button
            type="button"
            onClick={addMealField}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300"
          >
            ➕ Add Meal
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition-all duration-300"
        >
          Save Meal Plan 🚀
        </button>
      </form>

      {/* Meal Plans List */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {loading ? (
          <p className="text-white text-xl animate-pulse">Loading your delicious plans... 🍔</p>
        ) : mealPlans.length === 0 ? (
          <p className="text-white text-xl">No meal plans found. Create one! 🌟</p>
        ) : (
          mealPlans.map((plan) => (
            <div key={plan._id} className="bg-white bg-opacity-50 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">📅 Week Starting: {new Date(plan.weekStart).toLocaleDateString()}</h3>

              <ul className="space-y-2">
                {plan.meals.map((meal, idx) => (
                  <li key={idx} className="text-gray-700">
                    🥘 {new Date(meal.date).toLocaleDateString()} - {meal.type} 
                  </li>
                ))}
              </ul>

              {/* <button
                onClick={() => handleDelete(plan._id)}
                className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl w-full transition-all duration-300"
              >
                Delete Plan 🗑️
              </button> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MealPlanner;
