import { useContext, useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./signup.css";
import { GlobalContext } from "../../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { handleLogin } = useContext(GlobalContext);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignUpSubmit = async (data, reset) => {
    try {
      const response = await axios.post("http://localhost:8000/api/signup/", {
        fullname: data.fullname,
        username: data.username,
        email: data.email,
        password: data.password,
        confirm_password: data.confirmPassword,
      });

      const { access, refresh, user } = response.data;

      // Pass login data to global context
      handleLogin({ access, refresh, user });

      setSuccessMessage("Account created successfully!"); // Set the success message
      setErrorMessage(""); // Clear any previous error

      reset(); // <-- Reset the form fields after successful signup

      // Make the message disappear after 2 seconds
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/login"); // redirect to the login page
      }, 4000);
    } catch (error) {
      console.error("Signup failed", error);
      setErrorMessage("Signup failed. Please try again.");
      setSuccessMessage("");

      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return (
    <div className="signUp">
      <div className="user">
        <h2>Sign Up Form</h2>
        {/* Display Success or Error Messages */}
        {successMessage && (
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
        )}
        <SignUpForm onSubmit={handleSignUpSubmit} />
      </div>
    </div>
  );
};

export default SignUp;
