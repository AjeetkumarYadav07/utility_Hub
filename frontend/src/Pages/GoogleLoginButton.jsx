// src/components/GoogleLoginButton.jsx
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = ({ redirectTo = "/user-dashboard" }) => {
  const navigate = useNavigate();

  const handleLogin = async (credentialResponse) => {
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/auth/google`,
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