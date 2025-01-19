import Subscribe from "../Subscribe/Subscribe";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <span>
          Welcome to{" "}
          <i>
            <u>penned</u>
          </i>
        </span>
        <p>
          Let's dive into the world of technology! Whether you're a seasoned
          developer, an open-source enthusiast, or just starting your tech
          journey, <i>penned</i> is your go-to hub for insights, tutorials, and
          the latest innovations in the tech universe.
        </p>
        <Subscribe />
      </div>
    </div>
  );
};

export default Banner;
