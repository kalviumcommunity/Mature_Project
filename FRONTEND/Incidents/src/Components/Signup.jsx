import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Css/Homepage.css";
import "./Css/Signup.css";

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
        navigate("/Login"); // Redirect after signup
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Failed to sign up. Try again.");
    }
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">Incidents</div>
        <div className="nav-links">
          <button className="nav-button">Home</button>
          <button className="nav-button">About</button>
          <button className="nav-button">Contact</button>
        </div>
      </nav>

      <div className="form-container">
        <div className="signup-box">
          <h2>Sign Up</h2>
          <p>Sign up to Share your Crazy Incidents.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              {...register("Name", { required: "Name is required" })}
            />
            {errors.Name && <p className="error">{errors.Name.message}</p>}

            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            <input
              type="number"
              placeholder="Mobile Number"
              {...register("phoneNumber", { required: "Number is required" })}
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p>}

            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}

            <button type="submit" className="hero-buttonn">Sign-up</button>
          </form>

          <p>Already have an account? <Link to="/Login">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
