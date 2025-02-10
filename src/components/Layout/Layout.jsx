import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { CreatePost, Home, PostDetails } from "../../pages";

const Layout = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:title" element={<PostDetails />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;
