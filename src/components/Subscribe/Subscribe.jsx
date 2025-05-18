import { useState } from "react";
import "./subscribe.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEmailSubmit = () => {
    try {
      if (email) {
        toast.success("You have successfully subscribed to our Newsletter!!");
        setEmail("");
      }
    } catch (error) {
      toast.error("Failed to subscribe. Please try again!!", error);
    }
  };

  return (
    <div className="subscribe">
      <form onSubmit={handleSubmit(handleEmailSubmit)}>
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />
        {errors.email && errors.email.type === "required" ? (
          <p
            style={{
              color: "red",
              fontSize: "13px",
              margin: 0,
              textAlign: "left",
            }}
          >
            Email required
          </p>
        ) : null}
        <button className="btn" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
