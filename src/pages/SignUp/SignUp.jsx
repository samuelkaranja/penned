import { useContext, useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./signup.css";
import { GlobalContext } from "../../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
        <h2>Sign Up Form</h2>
        {/* Display Success or Error Messages */}
        {/* {successMessage && (
          <p
            style={{
              color: "green",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
            {errorMessage}
          </p>
        )} */}
        <SignUpForm onSubmit={handleSignUpSubmit} />
      </div>
    </div>
  );
};

export default SignUp;
