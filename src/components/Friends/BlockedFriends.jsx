import React from "react";
import blockedFriends from '../../../assets/blocked_users_icon.svg';
function BlockedFriends() {
  return (
   <div className="flex flex-col justify-center h-full items-center cursor-default">
    <div className="w-[60%]">
        <img src={blockedFriends}/>
    </div>
    <p className="mt-[40px] text-[#dcddde] text-sm">You can't unblock the Wumpus.</p>
   </div>
  )
}

export default BlockedFriends;