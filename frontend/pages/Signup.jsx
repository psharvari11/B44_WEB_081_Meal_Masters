// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [dietaryPreferences, setDietaryPreferences] = useState("");
//   const [fitnessGoals, setFitnessGoals] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("https://mealmasterbackend.onrender.com/api/auth/register", {
//         name,
//         email,
//         password,
//         dietaryPreferences,
//         fitnessGoals,
//       });

//       alert(res.data.message || "Registration successful!");
//       navigate("/login");
//     } catch (err) {
//       alert(err.response?.data?.message || "Registration failed!");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-900 text-gray-200">
//       <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-8 border border-gray-700">
//         <h2 className="text-2xl font-bold text-center text-white mb-6">Sign Up</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
//           />

//           <input
//             type="text"
//             placeholder="Dietary Preferences (e.g. Vegan, Paleo)"
//             value={dietaryPreferences}
//             onChange={(e) => setDietaryPreferences(e.target.value)}
//             className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
//           />

//           <input
//             type="text"
//             placeholder="Fitness Goals (e.g. Strength, Endurance)"
//             value={fitnessGoals}
//             onChange={(e) => setFitnessGoals(e.target.value)}
//             className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
//           />

//           <button
//             type="submit"
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded transition"
//           >
//             Register
//           </button>
//         </form>

//         <p className="text-center text-gray-400 text-sm mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="text-purple-400 font-medium hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dietaryPreferences, setDietaryPreferences] = useState("");
  const [fitnessGoals, setFitnessGoals] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = {
      name,
      email,
      password,
      dietaryPreferences,
      fitnessGoals,
    };

    try {
      const response = await axios.post(
        "https://mealmasterbackend.onrender.com/api/auth/register",  // Aapka backend URL
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response.data); // log the response for debugging
      setLoading(false);
      navigate("/login"); // Redirect to login page after successful registration
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (<>
  <Navbar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100  p-8">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dietaryPreferences" className="block text-gray-600">Dietary Preferences</label>
            <input
              type="text"
              id="dietaryPreferences"
              value={dietaryPreferences}
              onChange={(e) => setDietaryPreferences(e.target.value)}
              placeholder="e.g. Vegan, Gluten-Free"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="fitnessGoals" className="block text-gray-600">Fitness Goals</label>
            <input
              type="text"
              id="fitnessGoals"
              value={fitnessGoals}
              onChange={(e) => setFitnessGoals(e.target.value)}
              placeholder="e.g. Lose Weight, Build Muscle"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={loading}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default SignUp;


