import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PostsListPage from "./pages/PostsListPage/PostsListPage"
import PostDetails from "./pages/PostDetails/PostDetails"
import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import NewPost from "./pages/NewPost/NewPost";
import MainPage from "./pages/MainPage/MainPage";
import NewComment from "./pages/NewComment/NewComment";
import EditPost from "./pages/EditPost.jsx/EditPost";

function App() {
  return (
    <div className="App container-fluid" >
    {/* style={{backgroundColor: "black"}} */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />
          {/* IsPrivate es que profile esta en props.children */}
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/posts" element={<PostsListPage />}/>
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/edit-post/:postId" element={<EditPost />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/new-comment" element={<NewComment />}/>
        
      </Routes>
    </div>
  );
}

export default App;
