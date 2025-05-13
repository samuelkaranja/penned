import ActivePosts from "../../components/Dashboard/ActivePosts";
import Comments from "../../components/Dashboard/Comments";
import Gallery from "../../components/Dashboard/Gallery";
import Header from "../../components/Dashboard/Header";
import Messages from "../../components/Dashboard/Messages";
import Sidebar from "../../components/Dashboard/Sidebar";
import Statistics from "../../components/Dashboard/Statistics";
import SummaryCard from "../../components/Dashboard/SummaryCard/SummaryCard";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dash-nav">
        <Sidebar />
      </div>
      <div className="information">
        {/* <Header /> */}
        <div className="summary">
          <SummaryCard title={"Total Posts"} value={284} />
          <SummaryCard title={"Total Members"} value={24} />
          <SummaryCard title={"Total Comments"} value={300} />
        </div>

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
    </div>
  );
};

export default Dashboard;
