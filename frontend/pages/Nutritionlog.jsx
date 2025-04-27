import React, { useState, useEffect } from "react";
import axios from "axios";


const NutritionLog = () => {
  const [logs, setLogs] = useState([]);
  const [date, setDate] = useState("");
  const [meals, setMeals] = useState([]);
  const [totalCalories, setTotalCalories] = useState("");
  const [macros, setMacros] = useState({ protein: "", carbs: "", fats: "" });

  // const history = useHistory();

  // Fetch nutrition logs when the page loads
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get("https://mealmasterbackend.onrender.com/api/nutrition-log");
        setLogs(response.data);
      } catch (error) {
        console.error("Failed to fetch logs", error);
      }
    };

    fetchLogs();
  }, []);

  // Handle form submission for creating a new log
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newLog = { date, meals, totalCalories, macros };
      await axios.post("https://mealmasterbackend.onrender.com/api/nutrition-log", newLog);
      alert("Nutrition Log created successfully!");
      // history.push("/nutrition-log"); // Redirect after submission
    } catch (error) {
      alert("Failed to create log");
      console.error(error);
    }
  };

  // Handle delete log action
  const handleDelete = async (logId) => {
    try {
      await axios.delete(`https://mealmasterbackend.onrender.com/api/nutrition-log/${logId}`);
      setLogs(logs.filter(log => log._id !== logId)); // Remove deleted log from the state
      alert("Log deleted successfully!");
    } catch (error) {
      alert("Failed to delete log");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Nutrition Log</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Meals:</label>
          <textarea
            value={meals}
            onChange={(e) => setMeals(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Total Calories:</label>
          <input
            type="number"
            value={totalCalories}
            onChange={(e) => setTotalCalories(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Protein (g):</label>
          <input
            type="number"
            value={macros.protein}
            onChange={(e) => setMacros({ ...macros, protein: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Carbs (g):</label>
          <input
            type="number"
            value={macros.carbs}
            onChange={(e) => setMacros({ ...macros, carbs: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Fats (g):</label>
          <input
            type="number"
            value={macros.fats}
            onChange={(e) => setMacros({ ...macros, fats: e.target.value })}
            required
          />
        </div>
        <button type="submit">Add Log</button>
      </form>

      <h2>Your Nutrition Logs</h2>
      <div>
        {logs.map((log) => (
          <div key={log._id}>
            <p>Date: {log.date}</p>
            <p>Meals: {log.meals.join(", ")}</p>
            <p>Total Calories: {log.totalCalories}</p>
            <p>Macros: Protein: {log.macros.protein}g, Carbs: {log.macros.carbs}g, Fats: {log.macros.fats}g</p>
            <button onClick={() => handleDelete(log._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionLog;
