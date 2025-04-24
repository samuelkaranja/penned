import React from "react";
import "./loginform.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="loginform">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="frm">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
          />
          {errors.email && <p className="alert">{errors.email.message}</p>}
        </div>
        <div className="frm">
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            name="password"
            id="password"
            placeholder="**********"
          />
          {errors.password && (
            <p className="alert">{errors.password.message}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="signup-link">
        <span>Don't have an account? </span>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginForm;
