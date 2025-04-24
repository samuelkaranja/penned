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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
