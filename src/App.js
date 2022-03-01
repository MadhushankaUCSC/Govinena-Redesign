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


      </Routes>
    </div>
  );
}

export default App;
