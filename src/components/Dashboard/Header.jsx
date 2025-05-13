import "./style.css";

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="greeting">
        <h2>Hello, Emma!</h2>
        <p>What are you writing today?</p>
      </div>
      <div className="controls">
        <select>
          <option>Last week</option>
        </select>
        <select>
          <option>October</option>
        </select>
        <select>
          <option>2017</option>
        </select>
        <div className="profile">
          <img src="/path-to-avatar.jpg" alt="Emma" />
          <span>Emma Adams</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
