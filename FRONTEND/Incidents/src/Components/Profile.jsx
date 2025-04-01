import Front from './Front';
import React, { useState, useEffect } from "react";

const Profile = () => {
  const [profile, setProfile] = useState(); 

  useEffect(() => {
    const token = localStorage.getItem("token"); 

    fetch("http://localhost:8000/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unauthorized access");
        }
        return response.json();
      })
      .then((data) => setProfile(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Front>
      <div className="flex justify-center items-center h-screen lg:ml-[200px] ">
        <div className="h-40 w-60 border-2 border-amber-200 flex justify-center items-center bg-gray-800 text-white ml-120 pb-100 pt-40 mb-50 rounded-2xl bg-gradient-to-b from-blue via-[#a40bd2] to-[#000000] ">
          <div className="text-center">
        {profile ? `Name:${profile.Name} Email:${profile.email}` : "Loading..."}
        </div>
        </div>
      </div>
    </Front>
  );
};

export default Profile;
