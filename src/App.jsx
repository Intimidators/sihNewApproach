import React, { createContext, useState } from "react";
import Login from "./pages/Login";

import "./index.css";

import { Routes, useLocation, Route } from "react-router-dom";
import Signup from "./pages/Signup";

import MainRendering from "./components/main_rendering/MainRendering";
import HomePage from "./portals/webinars/components/HomePage/HomePage";
import SocialMedia from "./portals/social_media/SocialMedia";
import ThemeLanguageSwitcher from "./components/theme_language_switcher/ThemeLanguageSwitcher";
import PortalsMenu from "./components/portals_menu/PortalsMenu";
import Webinars from "./portals/webinars/Webinars";
import ResearchWork from "./portals/research_work/ResearchWork";
import Dashboard from "./pages/dashboard/Dashboard";
import UploadedImagesRegular from "./pages/dashboard/pages/home/CardComponents/Reglular/UploadedImagesRegular";
import UploadedResearchRegular from "./pages/dashboard/pages/home/CardComponents/Reglular/UploadedResearchRegular";
import UploadedVideosRegular from "./pages/dashboard/pages/home/CardComponents/Reglular/UploadedVideosRegular";
import RegisteredWebinarsRegular from "./pages/dashboard/pages/home/CardComponents/Reglular/RegisteredWebinarsRegular";
import WebinarsAttendedRegular from "./pages/dashboard/pages/home/CardComponents/Reglular/WebinarsAttendedRegular";
import RegisteredUsers from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisterdUsers";
import ScheduledWebinars from "./pages/dashboard/pages/home/CardComponents/Admin/ScheduledWebinars";
import ActiveWebinars from "./pages/dashboard/pages/home/CardComponents/Admin/ActiveWebinars";
import WebinarsTillNow from "./pages/dashboard/pages/home/CardComponents/Admin/WebinarsTillNow";
import UploadedImages from "./pages/dashboard/pages/home/CardComponents/Admin/UploadedImages";
import UploadedVideos from "./pages/dashboard/pages/home/CardComponents/Admin/UploadedVideos";
import UploadedResearchWork from "./pages/dashboard/pages/home/CardComponents/Admin/UploadedResearchWork";
import DashboardCommunityImages from "./pages/dashboard/pages/community/DashboardCommunityImages";
import DashboardCommunityVideos from "./pages/dashboard/pages/community/DashboardCommunity";
import DashboardResearch from "./pages/dashboard/pages/research/DashboardResearch";
import DashboardWebinar from "./pages/dashboard/pages/webinars/DashboardWebinar";

import DashboardHome from "./pages/dashboard/pages/home/DashboardHome";
import RegisteredUserDetails from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisteredUserDetails";
import RegisteredUserUploadedImages from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisteredUserPhotos";
import RegisteredUserUploadedVideos from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisteredUserVideos";
import RegisteredUserUploadedResearch from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisteredUserResearch";
import RegisteredUserScheduledWebinars from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisteredUserScheduledWebinar";
import RegisteredUserRegisteredWebinars from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisteredUserRegisteredWebinar";
import ForgotPassword from "./pages/ForgotPassword";
import ProfilePage from "./pages/Profile";
import PasswordReset from "./pages/PasswordReset";
import ProtectedRoutes from "./Auth/Auth";
import ErrorPage from "./pages/404page";
import WebinarShowPage from "./pages/webinarShowPage/webinarShowPage";
export let gData = createContext();

const App = () => {
  const location = useLocation();
  console.log(location);
  let [state, setState] = useState(1);
  let [vvgnli_main_menu_state, set_vvgnli_main_menu_state] = useState("home");
  let [dashboard_main_menu_state, set_dashboard_main_menu_state] =
    useState("home");
  let [vvgnli_about_submenu_state, set_vvgnli_about_submenu_state] =
    useState("about_us");
  let [vvgnli_research_submenu_state, set_vvgnli_research_submenu_state] =
    useState("research");

  const { pathname } = useLocation();

  return (
    <>
      <div className="app">
        <div className="app__container">
          <gData.Provider
            value={{
              state,
              setState,
              vvgnli_main_menu_state,
              set_vvgnli_main_menu_state,
              vvgnli_about_submenu_state,
              set_vvgnli_about_submenu_state,
              vvgnli_research_submenu_state,
              set_vvgnli_research_submenu_state,
              dashboard_main_menu_state,
              set_dashboard_main_menu_state,
            }}
          >
            {pathname !== "/signup" &&
              pathname !== "/login" &&
              pathname !== "/forgotPassword" &&
              pathname !== "/PasswordReset" &&
              pathname !== "/error" && <ThemeLanguageSwitcher />}
            {pathname !== "/signup" &&
              pathname !== "/login" &&
              pathname !== "/forgotPassword" &&
              pathname !== "/PasswordReset" &&
              pathname !== "/error" && <PortalsMenu />}

            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<MainRendering />} />
              <Route path="/vvgnli" element={<MainRendering />} />
              <Route path="/community" element={<SocialMedia />} />
              <Route path="/webinar" element={<Webinars />} />
              <Route path="/research-section" element={<ResearchWork />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/PasswordReset" element={<PasswordReset />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="/showWebinars" element={<WebinarShowPage />} />
              <Route
                path="/dashboard"
                element={<ProtectedRoutes element={<Dashboard />} />}
              >
                <Route path="" element={<DashboardHome />} />
                <Route path="images" element={<DashboardCommunityImages />} />
                <Route path="videos" element={<DashboardCommunityVideos />} />
                <Route path="videos" element={<DashboardCommunityVideos />} />
                <Route path="research" element={<DashboardResearch />} />
                <Route path="webinars" element={<DashboardWebinar />} />

                <Route
                  path="home/uploadedImagesRegular"
                  element={<UploadedImagesRegular />}
                />
                <Route
                  path="home/uploadedVideosRegular"
                  element={<UploadedVideosRegular />}
                />
                <Route
                  path="home/uploadedResearchRegular"
                  element={<UploadedResearchRegular />}
                />
                <Route
                  path="home/webinarsAttendedRegular"
                  element={<WebinarsAttendedRegular />}
                />
                <Route
                  path="home/registeredWebinarsRegular"
                  element={<RegisteredWebinarsRegular />}
                />
                <Route
                  exact
                  path="home/registerdUsers"
                  element={<RegisteredUsers />}
                />
                <Route
                  path="home/registerdUsers/:userId"
                  element={<RegisteredUserDetails />}
                />
                <Route
                  path="home/registerdUsers/:userId/uploadedImages"
                  element={<RegisteredUserUploadedImages />}
                />
                <Route
                  path="home/registerdUsers/:userId/uploadedVideos"
                  element={<RegisteredUserUploadedVideos />}
                />
                <Route
                  path="home/registerdUsers/:userId/uploadedResearch"
                  element={<RegisteredUserUploadedResearch />}
                />
                <Route
                  path="home/registerdUsers/:userId/registeredWebinars"
                  element={<RegisteredUserRegisteredWebinars />}
                />
                <Route
                  path="home/registerdUsers/:userId/scheduledWebinars"
                  element={<RegisteredUserScheduledWebinars />}
                />
                <Route
                  path="home/uploadedImages"
                  element={<UploadedImages />}
                />
                <Route
                  path="home/uploadedVideos"
                  element={<UploadedVideos />}
                />
                <Route
                  path="home/uploadedResearch"
                  element={<UploadedResearchWork />}
                />
                <Route
                  path="home/webinarTillNow"
                  element={<WebinarsTillNow />}
                />
                <Route
                  path="home/activeWebinars"
                  element={<ActiveWebinars />}
                />
                <Route
                  path="home/scheduledWebinars"
                  element={<ScheduledWebinars />}
                />
              </Route>
            </Routes>
          </gData.Provider>
        </div>
      </div>
    </>
  );
};

export default App;
