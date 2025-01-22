import { useState } from "react";
import "./subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    setSuccessMessage("You have successfully subscribed to our Newsletter!!");

    setEmail("");

    setTimeout(() => {
      setSuccessMessage("");
    }, 10000);
  };

  return (
    <div className="subscribe">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />
        <button className="btn" type="submit">
          Subscribe
        </button>
      </form>
      {successMessage && (
        <p className="message">
          You have successfully subscribed to our Newsletter!!
        </p>
      )}
    </div>
  );
};

export default Subscribe;
