import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Signup.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate(); 
  const [errorMessage, setErrorMessage] = useState(""); 

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/api/user/login", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message); 
      }

     
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      alert("Login Successful!");
      navigate("/dashboard"); 
    } catch (error) {
      setErrorMessage(error.message);
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
          <h2>Login</h2>
          <p>Login to see incidents from your friends.</p>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
