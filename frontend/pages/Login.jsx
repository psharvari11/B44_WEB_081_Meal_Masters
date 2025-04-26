// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     if (!email || !password) {
//       setError("Email and password are required.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "https://mealmasterbackend.onrender.com/api/auth/login",
//         { email, password },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       console.log("Response:", res.data);

//       localStorage.setItem("token", res.data.accessToken);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       navigate("/dashboard");
//     } catch (err) {
//       console.error("Error:", err.response?.data);
//       setError(err.response?.data?.msg || "Login failed. Please check your credentials.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-900 text-gray-200">
//       <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-8 border border-gray-700">
//         <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>

//         {error && <p className="bg-red-500 text-white p-3 rounded text-sm text-center">{error}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-300">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-300">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded transition"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>

//           <div className="text-center mt-3">
//             <Link to="/forgot-password" className="text-sm text-purple-400 hover:underline">
//               Forgot Password?
//             </Link>
//           </div>
//         </form>

//         <div className="text-center mt-4 text-gray-400 text-sm">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-purple-400 font-medium hover:underline">
//             Sign up
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Email and password are required.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "https://mealmasterbackend.onrender.com/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response:", res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      console.error("Error:", err.response?.data);
      setError(err.response?.data?.msg || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-gray-800">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Login</h2>

        {error && (
          <p className="bg-red-100 text-red-700 p-3 rounded text-sm text-center mb-4 border border-red-300">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="text-center mt-3">
            <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>

        <div className="text-center mt-6 text-gray-600 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 font-medium hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
