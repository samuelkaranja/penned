//import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import PostDetails from "./pages/PostDetails/PostDetails";
import { Footer } from "./components";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:title" element={<PostDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
