import React from "react";
import noFriends from '../../../assets/no_online_friends.svg';
function FriendsOnline() {
  return (
   <div className="flex flex-col justify-center h-full items-center cursor-default">
    <div className="w-[60%]">
        <img src={noFriends}/>
    </div>
    <p className="mt-[40px] text-[#dcddde] text-sm">No one's around to play with Wumpus.</p>
   </div>
  )
}

export default FriendsOnline;