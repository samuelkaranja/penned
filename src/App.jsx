import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import PostDetails from "./pages/PostDetails/PostDetails";
import { MainLayout, PrivateRoute, PublicRoute } from "./components";
import CreatePost from "./pages/CreatePost/CreatePost";
import { Dashboard, Login, Profile, SignUp } from "./pages";
import { useContext } from "react";
import { GlobalContext } from "./context/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { darkMode } = useContext(GlobalContext);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/details/:title"
              element={
                <PrivateRoute>
                  <PostDetails />
                </PrivateRoute>
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/create-post"
              element={
                <PrivateRoute>
                  <CreatePost />
                </PrivateRoute>
              }
            />
          </Route>

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/sign-up"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          {/* Catch-all route for non-existent URLs */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Router>
    </div>
  );
}

export default App;
