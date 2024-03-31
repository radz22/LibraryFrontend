import React from "react";
import SideBarAdmin from "../AdminComponents/SideBar";
import DashBoard from "./Dashboard";
const AdminHome = () => {
  return (
    <div className="w-full  flex">
      <div className={`w-1/4	 bg-[#343a40] h-screen`}>
        <SideBarAdmin />
      </div>

      <div className="w-3/4	 px-4  bg-[#f9f9f9] ">
        <DashBoard />
      </div>
    </div>
  );
};

export default AdminHome;
