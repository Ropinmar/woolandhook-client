import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/auth.context";
import { useContext } from "react";
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
import EventList from "./pages/EventList/EventList";
import NewEvent from "./pages/NewEvent/NewEvent";
import EditEvent from "./pages/EditEvent/EditEvent";


function App() {
  const { isLoggedIn } = useContext(AuthContext);
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
        <Route path="/main" element={<MainPage />}/>
        {isLoggedIn && (
          <>
        
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/posts" element={<PostsListPage />}/>
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/edit-post/:postId" element={<EditPost />} />
        <Route path="/events" element={<EventList /> } />
        <Route path="/new-event" element={<NewEvent/> } />
        <Route path="/edit-event/:id" element={<EditEvent /> } />
        <Route path="/new-comment" element={<NewComment />}/>
        </>
        )}
      </Routes>
    </div>
  );
}

export default App;
