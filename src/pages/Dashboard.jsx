import React from "react";
import SideBarMenu from '../components/SideBarMenu';
import SideBar from '../components/SideBar';
import Friends from '../components/Friends/Friends';
function Dashboard() {
  return (
    <>
        <div className="flex h-[100vh]">
            <SideBarMenu />
            <SideBar />
            <Friends />
        </div>
    </>
  );
}

export default Dashboard;