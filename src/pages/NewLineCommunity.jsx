import React from "react";
import SideBarMenu from '../components/SideBarMenu';
import NewLineSideBar from '../components/NewLine/NewLineSideBar';
import NewLine from '../components/NewLine/NewLine';
function NewLineCommunity() {
  return (
    <>
        <div className="flex h-[100vh]">
            <SideBarMenu />
            <NewLineSideBar />
            <NewLine />
        </div>
    </>
  );
}

export default NewLineCommunity;