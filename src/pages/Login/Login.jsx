import { useContext } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./login.css";
import { GlobalContext } from "../../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Image from "../../assets/startablog.jpg";

const Login = () => {
  const { handleLogin } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleLoginSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        email: data.email,
        password: data.password,
      });

      const { access, refresh, user } = response.data;

      // Pass login data to global context
      handleLogin({ access, refresh, user });
      toast.success("Logged In successful!!");
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login">
      <div className="user">
        <div className="image">
          <img src={Image} alt="" />
        </div>
        <div className="frm">
          <h2>Log in</h2>
          <LoginForm onSubmit={handleLoginSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Login;
