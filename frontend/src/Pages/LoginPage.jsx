import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

 
    // If validation fails → stop API call
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); // clear field errors

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/loginUser",
        { email, password }
      );

      localStorage.setItem("token", response.data.token);

      setSuccessMessage(response.data.message || "Login Successful ✅");
      setErrorMessage("");

     
      setTimeout(() =>{
            navigate("/user-dashboard")
      }, 1000)

      // useEffect(() => {
      //    const token = localStorage.getItem("token");
      //    if(token){
      //     navigate("/dashboard")
      //    }
      // },[])
    } catch (error) {
      const message =
        error.response?.data?.message || "Login Failed ❌";

      setErrorMessage(message);
      setSuccessMessage("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login Page
        </h1>

        {/* Backend Error Message */}
        {errorMessage && (
          <div className="bg-red-100 text-red-600 p-2 rounded-lg text-center mb-4">
            {errorMessage}
          </div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-100 text-green-600 p-2 rounded-lg text-center mb-4">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleLoginSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: "" });
              }}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
              ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-blue-400"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({ ...errors, password: "" });
              }}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
              ${
                errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-blue-400"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/sign-up"
            className="text-blue-500 hover:underline"
          >
            Sign-Up 
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
