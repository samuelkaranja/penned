import { Register } from "../../components";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="signUp">
      {/* <div className="image"></div> */}
      <div className="user">
        <h2>Sign Up</h2>
        <Register />
      </div>
    </div>
  );
};

export default SignUp;
