// import logo from './logo.svg';
import React from "react";
import './App.css';
import Login from './views/auth/Login';
import { Route, Routes } from "react-router-dom";
import Register from './views/auth/Register';
import WelcomeView from './views/WelcomeView';
import HomePage from './views/HomePage';
import CropView from './views/CropView';
import VarietiesPage from "./views/VarietiesPage";
import MainMenuPage from "./views/MainMenuPage";
import VarietySummerPage from "./views/VarietySummerPage";
import GrowListPage from "./views/GrowListPage";
import GrowingActivityPage from "./views/GrowingActivityPage";
import WelcomeTourPage from "./views/WelcomeTourPage";
import HelpfulInfoPage from "./views/HelpfulInfoPage";
import CreatePostView from "./views/CreatePostView";
import PostComments from "./views/PostComments";
import ActivityCalendarView from "./views/ActivityCalendarView";
import ActivityCompleteView from "./views/ActivityCompleteView";
import CommunityPage from "./views/CommunityPage";
import ProfilePage from "./views/ProfilePage";
import WeatherPage from "./views/WeatherPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login id="govinena" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<WelcomeView />} />
        <Route path="/govinena" element={<HomePage />} />
        <Route path="/crops" element={<CropView />} />
        <Route path="/varieties" element={<VarietiesPage />} />
        <Route path="/mainmenu" element={<MainMenuPage />} />
        <Route path="/varietysummery" element={<VarietySummerPage />} />
        <Route path="/growlist" element={<GrowListPage />} />
        <Route path="/growingactivities" element={<GrowingActivityPage />} />
        <Route path="/welcometour" element={<WelcomeTourPage />} />
        <Route path="/helpfullinfo" element={<HelpfulInfoPage />} />
        <Route path="/createpost" element={<CreatePostView />} />
        <Route path="/postcomments" element={<PostComments />} />
        <Route path="/activitycalendar" element={<ActivityCalendarView />} />
        <Route path="/activitycompletion" element={<ActivityCompleteView />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/weather" element={<WeatherPage />} />


      </Routes>
    </div>
  );
}

export default App;
