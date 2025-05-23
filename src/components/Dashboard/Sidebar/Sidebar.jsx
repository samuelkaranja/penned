import "./sidebar.css";
import { FaPenFancy } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="logo">
        <FaPenFancy className="pen" />
        penned
      </h1>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>My Blog</li>
          <li>Posts</li>
          <li>Comments</li>
          <li>My Gallery</li>
          <li>Friends</li>
          <li>Messages</li>
        </ul>
      </nav>
      <button className="add-entry">+ Add entry</button>
      <footer>
        <p>e.adams@gmail.com</p>
      </footer>
    </aside>
  );
};

export default Sidebar;
