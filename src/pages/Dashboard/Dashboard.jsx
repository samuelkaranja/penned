import Gallery from "../../components/Dashboard/Gallery";
import Header from "../../components/Dashboard/Header/Header";
import Messages from "../../components/Dashboard/Messages";
import PopularPosts from "../../components/Dashboard/PopularPosts/PopularPosts";
import Sidebar from "../../components/Dashboard/Sidebar";
import SummaryCard from "../../components/Dashboard/SummaryCard/SummaryCard";
import UserComments from "../../components/Dashboard/UserComments/UserComments";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dash-nav">
        <Sidebar />
      </div>
      <div className="information">
        <Header />
        <div className="summary">
          <SummaryCard title={"Total Posts"} value={284} />
          <SummaryCard title={"Total Members"} value={24} />
          <SummaryCard title={"Total Comments"} value={300} />
        </div>

        <div className="maincards">
          <PopularPosts />
          <UserComments />
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
