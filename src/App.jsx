import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import PostDetails from "./pages/PostDetails/PostDetails";
import { Footer } from "./components";
import CreatePost from "./pages/CreatePost/CreatePost";
import { Login, SignUp } from "./pages";
import { useContext } from "react";
import { GlobalContext } from "./context/context";

function App() {
  const { darkMode } = useContext(GlobalContext);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:title" element={<PostDetails />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
