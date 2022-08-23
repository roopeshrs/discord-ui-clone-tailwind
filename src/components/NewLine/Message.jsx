import React, {useState} from "react";
import dummyUser2 from '../../../assets/dummy-user-image2.png';
function Message({messageText, messageDate}) {
  return (
    <div className="m-[12px] p-[5px] flex hover:bg-[#4f545c]">
        <div className="w-[40px] h-[40px] mr-[12px] rounded-[50%] overflow-hidden">
            <img src={dummyUser2} className="w-full h-full object-cover"/>
        </div>
        <div className="flex-1">
            <div className="text-[#3b82f6] font-semibold">Roopesh <span className="text-[#dcddde] text-xs font-normal pl-[5px]">{messageDate}</span></div>
            <div className="text-[#dcddde] text-md">{messageText}</div>
        </div>
    </div>
  );
}

export default Message;