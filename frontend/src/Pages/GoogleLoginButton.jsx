// src/components/GoogleLoginButton.jsx
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = ({ redirectTo = "/user-dashboard" }) => {
  const navigate = useNavigate();

  const handleLogin = async (credentialResponse) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/google", // your backend endpoint
        { token: credentialResponse.credential }
      );

      // store your app JWT
      localStorage.setItem("token", data.token);
      localStorage.setItem("user" , JSON.stringify(data.user));


      navigate(redirectTo);
    } catch (err) {
      console.error("Google login failed", err);
      alert("Google login failed, try again");
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <GoogleLogin
        onSuccess={handleLogin}
        onError={() => console.log("Google login failed")}
      />
    </div>
  );
};

export default GoogleLoginButton;