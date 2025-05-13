import "./usercomments.css";
import Image from "../../../assets/Sam.jpeg";

const UserComments = () => {
  return (
    <div className="usercomments">
      <span className="head">Comments</span>
      <div className="details">
        <div className="user-image">
          <img src={Image} alt="" />
        </div>
        <div className="user-details">
          <span className="name">Samuel Karanja</span>
          <span className="comment">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur...
          </span>
          <div className="more">
            <button className="view">View</button>
            <button className="choice">Accept</button>
          </div>
        </div>
      </div>

      <div className="details">
        <div className="user-image">
          <img src={Image} alt="" />
        </div>
        <div className="user-details">
          <span className="name">Samuel Karanja</span>
          <span className="comment">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur...
          </span>
          <div className="more">
            <button className="view">View</button>
            <button className="choice">Accept</button>
          </div>
        </div>
      </div>

      <div className="details">
        <div className="user-image">
          <img src={Image} alt="" />
        </div>
        <div className="user-details">
          <span className="name">Samuel Karanja</span>
          <span className="comment">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur...
          </span>
          <div className="more">
            <button className="view">View</button>
            <button className="choice">Accept</button>
          </div>
        </div>
      </div>

      <div className="details">
        <div className="user-image">
          <img src={Image} alt="" />
        </div>
        <div className="user-details">
          <span className="name">Samuel Karanja</span>
          <span className="comment">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur...
          </span>
          <div className="more">
            <button className="view">View</button>
            <button className="choice">Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComments;
