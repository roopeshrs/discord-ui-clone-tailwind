import React from "react";
function SideBarChannel({title, icon, active}) {
  return (
    <div className={`m-[12px] p-[5px] flex text-[#dcddde] text-sm cursor-pointer hover:bg-[#36393f] ${active && "bg-[#36393f]"}`}>
        <div className="mr-[12px]">{icon}</div>
        <div>{title}</div>
    </div>
  );
}

export default SideBarChannel;