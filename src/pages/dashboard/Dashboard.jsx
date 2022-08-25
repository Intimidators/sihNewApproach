import { Outlet } from "react-router-dom";
import DashboardMainMenu from "./main__menu__dashboard/DashboardMainMenu";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <DashboardMainMenu />
      <div className="dashboard">
        <div className="dashboard__container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
// sharmarishabh32700@gmail.com
// Rishabh@32700@