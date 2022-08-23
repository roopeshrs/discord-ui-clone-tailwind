import React from "react";
import {Tooltip} from 'react-tippy';
import 'react-tippy/dist/tippy.css';
function FriendsNav({
    isOnlineActive,
    setIsOnlineActive,
    isAllActive,
    setIsAllActive,
    isPendingActive,
    setIsPendingActive,
    isBlockedActive,
    setIsBlockedActive,
    isAddFriendActive,
    setIsAddFriendActive
}) {
  return (
    <div className="flex justify-between">
        <ul className="flex items-center">
            <li>
                <div className="m-[12px] p-[5px] pr-[15px] flex text-[#dcddde] text-md cursor-default border-r-[1px] border-[#4f545c] w-fit">
                    <div className="mr-[12px]">
                        <i className="fa-solid fa-user-group"></i>
                    </div>
                    <div>Friends</div>
                </div>
            </li>
            <li className={`text-[#dcddde] text-sm cursor-pointer p-[5px] mr-[15px] hover:bg-[#4f545c] rounded-md ${isOnlineActive && "bg-[#4f545c] cursor-default"}`} onClick={()=> {
                setIsOnlineActive(true);
                setIsAllActive(false);
                setIsPendingActive(false);
                setIsBlockedActive(false);
                setIsAddFriendActive(false);
            }}>
                <div>Online</div>
            </li>
            <li className={`text-[#dcddde] text-sm cursor-pointer p-[5px] mr-[15px] hover:bg-[#4f545c] rounded-md ${isAllActive && "bg-[#4f545c] cursor-default"}`} onClick={()=> {
                setIsOnlineActive(false);
                setIsAllActive(true);
                setIsPendingActive(false);
                setIsBlockedActive(false);
                setIsAddFriendActive(false);
            }}>
                <div>All</div>
            </li>
            <li className={`text-[#dcddde] text-sm cursor-pointer p-[5px] mr-[15px] hover:bg-[#4f545c] rounded-md ${isPendingActive && "bg-[#4f545c] cursor-default"}`} onClick={()=> {
                setIsOnlineActive(false);
                setIsAllActive(false);
                setIsPendingActive(true);
                setIsBlockedActive(false);
                setIsAddFriendActive(false);
            }}>
                <div>Pending</div>
            </li>
            <li className={`text-[#dcddde] text-sm cursor-pointer p-[5px] mr-[15px] hover:bg-[#4f545c] rounded-md ${isBlockedActive && "bg-[#4f545c] cursor-default"}`} onClick={()=> {
                setIsOnlineActive(false);
                setIsAllActive(false);
                setIsPendingActive(false);
                setIsBlockedActive(true);
                setIsAddFriendActive(false);
            }}>
                <div>Blocked</div>
            </li>
            <li className={`text-[#fff] text-sm cursor-pointer p-[5px] bg-[#16a34a] rounded-md ${isAddFriendActive && "!bg-[#36393f] text-[#22c55e] font-semibold cursor-default"}`} onClick={()=> {
                setIsOnlineActive(false);
                setIsAllActive(false);
                setIsPendingActive(false);
                setIsBlockedActive(false);
                setIsAddFriendActive(true);
            }}>
                <div>Add Friend</div>
            </li>
        </ul>
        <ul className="flex items-center">
            <li>
                <div className="my-[12px] px-[17px] cursor-pointer text-[#dcddde] text-md relative">
                    <Tooltip 
                        title="New Group DM"
                        position="bottom"
                        arrow="true"
                        className="cursor-pointer"
                    >
                        <i className="fa-solid fa-message"></i>
                        <i className="fa-solid fa-plus text-xs absolute top-[-6px] right-[8px]"></i>
                    </Tooltip>
                </div>
            </li>
            <li>
                <div className="my-[12px] px-[17px] cursor-pointer text-[#dcddde] text-md border-l-[1px] border-[#4f545c]">
                    <Tooltip 
                        title="Inbox"
                        position="bottom"
                        arrow="true"
                        className="cursor-pointer"
                    >
                        <i className="fa-solid fa-inbox"></i>
                    </Tooltip>
                </div>
            </li>
            <li>
                <div className="my-[12px] px-[17px] cursor-pointer text-[#dcddde] text-md">
                    <Tooltip 
                        title="Help"
                        position="bottom"
                        arrow="true"
                        className="cursor-pointer"
                    >
                        <i className="fa-solid fa-circle-question"></i>
                    </Tooltip>
                </div>
            </li>
        </ul>
    </div>
  );
}

export default FriendsNav;