import React from "react";
import {Tooltip} from 'react-tippy';
import 'react-tippy/dist/tippy.css';
function NewLineNav() {
  return (
    <div className="flex justify-between">
        <ul className="flex items-center">
            <li>
                <div className="m-[12px] p-[5px] pr-[15px] flex text-[#dcddde] text-md cursor-default w-fit">
                    <div className="mr-[12px]">
                        <i className="fa-solid fa-hashtag"></i>
                    </div>
                    <div>JavaScript</div>
                </div>
            </li>
        </ul>
        <ul className="flex items-center">
            <li>
                <div className="my-[12px] px-[17px] cursor-pointer text-[#dcddde] text-md">
                    <Tooltip 
                        title="Notification Settings"
                        position="bottom"
                        arrow="true"
                        className="cursor-pointer"
                    >
                        <i className="fa-solid fa-bell"></i>
                    </Tooltip>
                </div>
            </li>
            <li>
                <div className="my-[12px] px-[17px] cursor-pointer text-[#dcddde] text-md rotate-45">
                    <Tooltip 
                        title="Pinned Messages"
                        position="bottom"
                        arrow="true"
                        className="cursor-pointer"
                    >
                        <i className="fa-solid fa-thumbtack"></i>
                    </Tooltip>
                </div>
            </li>
            <li>
                <div className="my-[12px] px-[17px] cursor-pointer text-[#dcddde] text-md">
                    <Tooltip 
                        title="Hide Member List"
                        position="bottom"
                        arrow="true"
                        className="cursor-pointer"
                    >
                        <i className="fa-solid fa-user-group"></i>
                    </Tooltip>
                </div>
            </li>
            <li>
                <div className="my-[12px] mr-[5px] text-md relative">
                    <input type="text" className="w-[150px] h-[28px] outline-0 pl-[5px] pr-[25px] rounded-md bg-[#23272a] text-white" placeholder="Search"/>
                    <i className="fa-solid fa-magnifying-glass absolute top-[5px] right-[5px] text-white cursor-pointer"></i>
                </div>
            </li>
            <li>
                <div className="my-[12px] px-[17px] cursor-pointer text-[#dcddde] text-md">
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

export default NewLineNav;