import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://mealmasterbackend.onrender.com/api/recipes";

const Recipe = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: [""],
    instructions: "",
    calories: "",
    macros: {
      protein: "",
      carbs: "",
      fat: "",
    },
    dietaryTags: [""],
  });

  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const token = localStorage.getItem("token"); // Assuming you store your token here

  // Fetch all recipes
  const fetchRecipes = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRecipes(response.data.recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("macros.")) {
      const macroKey = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        macros: { ...prev.macros, [macroKey]: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle ingredient/tag array inputs
  const handleArrayChange = (e, field, index) => {
    const newArray = [...formData[field]];
    newArray[index] = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: newArray,
    }));
  };

  // Add new input field for ingredients or tags
  const addArrayField = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  // Submit form (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing && selectedRecipe) {
        // Update
        await axios.put(`${API_URL}/${selectedRecipe._id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert("Recipe updated successfully!");
      } else {
        // Create
        await axios.post(API_URL, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert("Recipe created successfully!");
      }
      setFormData({
        title: "",
        description: "",
        ingredients: [""],
        instructions: "",
        calories: "",
        macros: {
          protein: "",
          carbs: "",
          fat: "",
        },
        dietaryTags: [""],
      });
      setIsEditing(false);
      setSelectedRecipe(null);
      fetchRecipes();
    } catch (error) {
      console.error("Error submitting recipe:", error);
      alert("Failed to submit recipe. Please try again.");
    }
  };

  // Select recipe to edit
  const handleEdit = (recipe) => {
    setSelectedRecipe(recipe);
    setFormData({
      title: recipe.title || "",
      description: recipe.description || "",
      ingredients: recipe.ingredients || [""],
      instructions: recipe.instructions || "",
      calories: recipe.calories || "",
      macros: {
        protein: recipe.macros?.protein || "",
        carbs: recipe.macros?.carbs || "",
        fat: recipe.macros?.fat || "",
      },
      dietaryTags: recipe.dietaryTags || [""],
    });
    setIsEditing(true);
  };

  // Delete recipe
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        await axios.delete(`${API_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert("Recipe deleted successfully!");
        fetchRecipes();
      } catch (error) {
        console.error("Error deleting recipe:", error);
        alert("Failed to delete recipe. Please try again.");
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{isEditing ? "Edit Recipe" : "Create Recipe"}</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <h3 className="text-lg font-semibold mt-4">Ingredients:</h3>
        {formData.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            value={ingredient}
            onChange={(e) => handleArrayChange(e, "ingredients", index)}
            className="w-full p-2 border rounded mb-2"
            required
          />
        ))}
        <button
          type="button"
          onClick={() => addArrayField("ingredients")}
          className="bg-blue-500 text-white py-1 px-3 rounded"
        >
          + Add Ingredient
        </button>

        <textarea
          name="instructions"
          placeholder="Instructions"
          value={formData.instructions}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="number"
          name="calories"
          placeholder="Calories"
          value={formData.calories}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <div className="flex space-x-2">
          <input
            type="number"
            name="macros.protein"
            placeholder="Protein (g)"
            value={formData.macros.protein}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="macros.carbs"
            placeholder="Carbs (g)"
            value={formData.macros.carbs}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="macros.fat"
            placeholder="Fat (g)"
            value={formData.macros.fat}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <h3 className="text-lg font-semibold mt-4">Dietary Tags:</h3>
        {formData.dietaryTags.map((tag, index) => (
          <input
            key={index}
            type="text"
            value={tag}
            onChange={(e) => handleArrayChange(e, "dietaryTags", index)}
            className="w-full p-2 border rounded mb-2"
          />
        ))}
        <button
          type="button"
          onClick={() => addArrayField("dietaryTags")}
          className="bg-green-500 text-white py-1 px-3 rounded"
        >
          + Add Tag
        </button>

        <button
          type="submit"
          className="bg-purple-600 text-white w-full py-2 mt-4 rounded hover:bg-purple-700 transition duration-300"
        >
          {isEditing ? "Update Recipe" : "Create Recipe"}
        </button>
      </form>

      <h2 className="text-2xl font-bold mt-10 mb-4">All Recipes:</h2>
      <div className="space-y-4">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="p-4 border rounded shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(recipe)}
                className="bg-yellow-500 text-white py-1 px-3 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(recipe._id)}
                className="bg-red-500 text-white py-1 px-3 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
