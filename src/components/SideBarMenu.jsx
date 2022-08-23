import React from "react";
import discordMini from '../../assets/discord_mini_icon.svg';
import newLine from '../../assets/new_line.png';
import {Tooltip} from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import {useNavigate} from 'react-router-dom';
function SideBarMenu() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#23272a] flex-[0.07]">
                <ul className="flex flex-col items-center mt-[20px]">
                    <li className="mb-[15px] w-[70%] h-[50px] flex justify-center items-center bg-[#5865f2] rounded-2xl overflow-hidden cursor-pointer" onClick={()=> navigate("/dashboard") }>
                        <Tooltip 
                            title="Direct Messages"
                            position="right"
                            arrow="true"
                            distance="25"
                            className="w-full h-full !flex justify-center items-center"
                        >
                            <img src={discordMini} />
                        </Tooltip>
                    </li>
                    <li className="mb-[15px] w-[70%] h-[50px] flex justify-center items-center rounded-2xl overflow-hidden cursor-pointer" onClick={()=> navigate("/server/newLine")}>
                        <Tooltip 
                            title="Newline Community"
                            position="right"
                            arrow="true"
                            distance="25"
                            className="w-full h-full !flex justify-center items-center"
                        >
                            <img src={newLine} />
                        </Tooltip>
                    </li>
                    <li className="mb-[15px] w-[70%] h-[50px] flex justify-center items-center bg-[#36393f] rounded-[50%] overflow-hidden cursor-pointer hover:bg-[#2D7D46] hover:rounded-2xl group">
                        <Tooltip 
                            title="Add a Server"
                            position="right"
                            arrow="true"
                            distance="25"
                            className="w-full h-full !flex justify-center items-center"
                        >
                            <i className="fa-solid fa-plus text-[#2D7D46] group-hover:text-white"></i>
                        </Tooltip>
                    </li>
                    <li className="mb-[15px] w-[70%] h-[50px] flex justify-center items-center bg-[#36393f] rounded-[50%] overflow-hidden cursor-pointer hover:bg-[#2D7D46] hover:rounded-2xl group">
                        <Tooltip 
                            title="Explore Public Servers"
                            position="right"
                            arrow="true"
                            distance="25"
                            className="w-full h-full !flex justify-center items-center"
                        >
                            <i className="fa-solid fa-server text-[#2D7D46] group-hover:text-white"></i>
                        </Tooltip>
                    </li>
                    <hr className="w-6/12 mb-[15px] border-b-[1px] border-[#36393f]"/>
                    <li className="mb-[15px] w-[70%] h-[50px] flex justify-center items-center bg-[#36393f] rounded-[50%] overflow-hidden cursor-pointer hover:bg-[#2D7D46] hover:rounded-2xl group">
                        <Tooltip 
                            title="Download Apps"
                            position="right"
                            arrow="true"
                            distance="25"
                            className="w-full h-full !flex justify-center items-center"
                        >
                            <i className="fa-solid fa-download text-[#2D7D46] group-hover:text-white"></i>
                        </Tooltip>
                    </li>
                </ul>
            </div>
  );
}

export default SideBarMenu;