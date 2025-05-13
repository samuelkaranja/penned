import ActivePosts from "../../components/Dashboard/ActivePosts";
import Comments from "../../components/Dashboard/Comments";
import Gallery from "../../components/Dashboard/Gallery";
import Header from "../../components/Dashboard/Header";
import Messages from "../../components/Dashboard/Messages";
import Statistics from "../../components/Dashboard/Statistics";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="main-cards">
        <ActivePosts />
        <Statistics />
        <Comments />
      </div>
      <div className="bottom-cards">
        <Gallery />
        <Messages />
      </div>
    </div>
  );
};

export default Dashboard;
