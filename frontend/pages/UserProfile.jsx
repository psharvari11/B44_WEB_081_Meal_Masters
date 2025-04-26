// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import Sidebar from "../components/Sidebar";

// // const Dashboard = () => {
// //   const [profile, setProfile] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       const token = localStorage.getItem("token");

// //       if (!token) {
// //         setError("No token found. Please login again.");
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         const res = await axios.get("https://mealmasterbackend.onrender.com/api/profile", {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });

// //         setProfile(res.data);
// //       } catch (err) {
// //         console.error("Error fetching profile:", err.response?.data);
// //         setError(err.response?.data?.message || "Failed to fetch profile.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProfile();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center min-h-screen bg-gray-100">
// //         <p className="text-gray-600 text-lg">Loading your vibes...</p>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="flex justify-center items-center min-h-screen bg-gray-100">
// //         <p className="text-red-500 text-lg">{error}</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <>
// //     <Sidebar/>
// //     <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
// //       <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
// //         <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">
// //           Welcome, {profile.name.split(" ")[0]}! 🌟
// //         </h1>

// //         <div className="space-y-6">
// //           <div>
// //             <h2 className="text-xl font-semibold text-gray-700 mb-2">Email</h2>
// //             <p className="text-gray-600">{profile.email}</p>
// //           </div>

// //           <div>
// //             <h2 className="text-xl font-semibold text-gray-700 mb-2">Fitness Goals</h2>
// //             <p className="text-gray-600">{profile.fitnessGoals || "Not set yet 🏋️‍♀️"}</p>
// //           </div>

// //           <div>
// //             <h2 className="text-xl font-semibold text-gray-700 mb-2">Dietary Restrictions</h2>
// //             {profile.dietaryRestrictions.length > 0 ? (
// //               <ul className="list-disc list-inside text-gray-600">
// //                 {profile.dietaryRestrictions.map((item, index) => (
// //                   <li key={index}>{item}</li>
// //                 ))}
// //               </ul>
// //             ) : (
// //               <p className="text-gray-500">No dietary restrictions 🍔🍕</p>
// //             )}
// //           </div>

// //           <div>
// //             <h2 className="text-xl font-semibold text-gray-700 mb-2">Preferred Cuisines</h2>
// //             {profile.preferredCuisines.length > 0 ? (
// //               <ul className="list-disc list-inside text-gray-600">
// //                 {profile.preferredCuisines.map((cuisine, index) => (
// //                   <li key={index}>{cuisine}</li>
// //                 ))}
// //               </ul>
// //             ) : (
// //               <p className="text-gray-500">You love all cuisines? Respect 😎🍜</p>
// //             )}
// //           </div>

// //           <div>
// //             <h2 className="text-xl font-semibold text-gray-700 mb-2">Allergies</h2>
// //             {profile.allergies.length > 0 ? (
// //               <ul className="list-disc list-inside text-gray-600">
// //                 {profile.allergies.map((allergy, index) => (
// //                   <li key={index}>{allergy}</li>
// //                 ))}
// //               </ul>
// //             ) : (
// //               <p className="text-gray-500">No allergies, full foodie power unlocked 🚀</p>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //     </>
// //   );
// // };

// // export default Dashboard;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../components/Sidebar";

// const UserProfile = () => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         setError("No token found. Please login again.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const res = await axios.get("https://mealmasterbackend.onrender.com/api/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setProfile(res.data);
//       } catch (err) {
//         console.error("Error fetching profile:", err.response?.data);
//         setError(err.response?.data?.message || "Failed to fetch profile.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <p className="text-gray-600 text-lg">Loading your vibes...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar on the left */}
    

//       {/* Main Content on the right */}
//       <div className="flex-1 bg-gray-50 p-8">
//         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
//           <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">
//             Welcome, {profile.name.split(" ")[0]}! 🌟
//           </h1>

//           <div className="space-y-6">
//             {/* Email */}
//             <div>
//               <h2 className="text-xl font-semibold text-gray-700 mb-2">Email</h2>
//               <p className="text-gray-600">{profile.email}</p>
//             </div>

//             {/* Fitness Goals */}
//             <div>
//               <h2 className="text-xl font-semibold text-gray-700 mb-2">Fitness Goals</h2>
//               <p className="text-gray-600">{profile.fitnessGoals || "Not set yet 🏋️‍♀️"}</p>
//             </div>

//             {/* Dietary Restrictions */}
//             <div>
//               <h2 className="text-xl font-semibold text-gray-700 mb-2">Dietary Restrictions</h2>
//               {profile.dietaryRestrictions.length > 0 ? (
//                 <ul className="list-disc list-inside text-gray-600">
//                   {profile.dietaryRestrictions.map((item, index) => (
//                     <li key={index}>{item}</li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500">No dietary restrictions 🍔🍕</p>
//               )}
//             </div>

//             {/* Preferred Cuisines */}
//             <div>
//               <h2 className="text-xl font-semibold text-gray-700 mb-2">Preferred Cuisines</h2>
//               {profile.preferredCuisines.length > 0 ? (
//                 <ul className="list-disc list-inside text-gray-600">
//                   {profile.preferredCuisines.map((cuisine, index) => (
//                     <li key={index}>{cuisine}</li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500">You love all cuisines? Respect 😎🍜</p>
//               )}
//             </div>

//             {/* Allergies */}
//             <div>
//               <h2 className="text-xl font-semibold text-gray-700 mb-2">Allergies</h2>
//               {profile.allergies.length > 0 ? (
//                 <ul className="list-disc list-inside text-gray-600">
//                   {profile.allergies.map((allergy, index) => (
//                     <li key={index}>{allergy}</li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500">No allergies, full foodie power unlocked 🚀</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    fitnessGoals: "",
    dietaryRestrictions: [],
    preferredCuisines: [],
    allergies: []
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get("https://mealmasterbackend.onrender.com/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value.split(",").map((item) => item.trim()),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSuccessMessage("");

    const token = localStorage.getItem("token");

    try {
      await axios.post("https://mealmasterbackend.onrender.com/api/profile", profile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccessMessage("Profile updated successfully! 🚀");
    } catch (err) {
      console.error(err);
      setError("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600 text-lg">Loading your profile magic... ✨</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">Edit Your Profile 🛠️</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              disabled
            />
            <p className="text-xs text-gray-400">Name can't be changed. 🤷‍♀️</p>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Fitness Goals</label>
            <input
              type="text"
              name="fitnessGoals"
              value={profile.fitnessGoals}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="e.g., Lose weight, Build muscle"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Dietary Restrictions (comma separated)</label>
            <input
              type="text"
              name="dietaryRestrictions"
              value={profile.dietaryRestrictions.join(", ")}
              onChange={(e) => handleArrayChange("dietaryRestrictions", e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="e.g., Vegan, Gluten-Free"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Preferred Cuisines (comma separated)</label>
            <input
              type="text"
              name="preferredCuisines"
              value={profile.preferredCuisines.join(", ")}
              onChange={(e) => handleArrayChange("preferredCuisines", e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="e.g., Indian, Italian"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Allergies (comma separated)</label>
            <input
              type="text"
              name="allergies"
              value={profile.allergies.join(", ")}
              onChange={(e) => handleArrayChange("allergies", e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="e.g., Peanuts, Dairy"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default UserProfile;
