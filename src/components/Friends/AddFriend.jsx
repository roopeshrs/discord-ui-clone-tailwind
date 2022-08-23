import React, {useState} from "react";
import allFriends from '../../../assets/all_users_icon.svg';
function AddFriend() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue); 
  return (
   <div className="flex flex-col h-full">
   <div className="p-[20px] border-b-[1px] border-[#4f545c]">
    <h2 className="text-white font-bold uppercase">Add Friend</h2>
    <p className="mt-[8px] text-[#dcddde] text-sm">You can add a friend with their Discord Tag. It's cAsE sEnSitIvE!</p>
    <div className="relative mt-[15px] h-[40px]">
    <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} className="w-full h-full pl-[8px] focus:outline focus:outline-2 focus:outline-[#5865f2] rounded-md bg-[#23272a] text-[#dcddde]" placeholder="Enter a Username#0000"/>
    <button className={`absolute top-[5px] right-[5px] bg-[#404eed] text-white text-sm py-[4px] px-[8px] rounded-md ${inputValue !== "" ? "cursor-pointer opacity-100" : "cursor-not-allowed opacity-50"}`} disabled>Send Friend Request</button>
    </div>
   </div>
    <div className="flex-1 flex flex-col justify-center items-center cursor-default">
        <div className="w-[60%]">
            <img src={allFriends}/>
        </div>
        <p className="mt-[40px] text-[#dcddde] text-sm">Wumpus is waiting on friends. You don’t have to though!</p>
    </div>
   </div>
  )
}

export default AddFriend;