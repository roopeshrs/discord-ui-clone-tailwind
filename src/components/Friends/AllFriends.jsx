import React from "react";
import allFriends from '../../../assets/all_users_icon.svg';
function AllFriends() {
  return (
   <div className="flex flex-col justify-center h-full items-center cursor-default">
    <div className="w-[60%]">
        <img src={allFriends}/>
    </div>
    <p className="mt-[40px] text-[#dcddde] text-sm">Wumpus is waiting on friends. You don’t have to though!</p>
    <div className="mt-[20px] bg-[#5865f2] text-white py-[8px] px-[12px] text-xs font-bold rounded-sm cursor-pointer hover:bg-[#404eed]">Add Friend</div>
   </div>
  )
}

export default AllFriends;