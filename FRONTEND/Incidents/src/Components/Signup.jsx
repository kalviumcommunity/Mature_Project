import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    try {
      const response = await fetch("http://localhost:8000/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: data.Name,      
          phoneNumber: data.phoneNumber,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();
      console.log("Server Response:", result);

      if (response.ok) {
        alert("Signup Successful!");
        navigate("/Login");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Failed to sign up. Try again.");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 px-8 bg-white shadow-md">
        <div className="text-2xl font-bold">Incidents</div>
        <div className="space-x-4">
          <button className="text-gray-600 hover:text-black">Home</button>
          <button className="text-gray-600 hover:text-black">About</button>
          <button className="text-gray-600 hover:text-black">Contact</button>
        </div>
      </nav>

      {/* Form Container */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-96 bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
          <p className="text-gray-600 mb-4">Sign up to share your crazy incidents.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              {...register("Name", { required: "Name is required" })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.Name && <p className="text-red-500 text-sm">{errors.Name.message}</p>}

            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <input
              type="number"
              placeholder="Mobile Number"
              {...register("phoneNumber", { required: "Number is required" })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}

            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Sign Up
            </button>
          </form>

          <p className="mt-3 text-gray-600">
            Already have an account? <Link to="/Login" className="text-blue-500">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
