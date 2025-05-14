import { useContext, useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./signup.css";
import { GlobalContext } from "../../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Image from "../../assets/blog1.jpg";

const SignUp = () => {
  const { handleLogin } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleSignUpSubmit = async (data, reset) => {
    try {
      await axios.post("http://localhost:8000/api/signup/", {
        fullname: data.fullname,
        username: data.username,
        email: data.email,
        password: data.password,
        confirm_password: data.confirmPassword,
      });

      toast.success("Account created successfully!, Now you can login");

      reset(); // <-- Reset the form fields after successful signup
      navigate("/login");
    } catch (error) {
      console.error("Signup failed", error);
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signUp">
      <div className="user">
        <div className="frm">
          <h2>Register</h2>
          <SignUpForm onSubmit={handleSignUpSubmit} />
        </div>
        <div className="image">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
