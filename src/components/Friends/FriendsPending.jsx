import React from "react";
import friendsPending from '../../../assets/pending_users_icon.svg';
function FriendsPending() {
  return (
   <div className="flex flex-col justify-center h-full items-center cursor-default">
    <div className="w-[60%]">
        <img src={friendsPending}/>
    </div>
    <p className="mt-[40px] text-[#dcddde] text-sm">There are no pending friend requests. Here's Wumpus for now.</p>
   </div>
  )
}

export default FriendsPending;