import React, {useState} from "react";
import SideBarChannel from './SideBarChannel';
import {Tooltip} from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import discordLogo from "../../assets/discord_mini_icon.svg";
import dummyUser from "../../assets/dummy-user-image.png";
import dummyUser2 from "../../assets/dummy-user-image2.png";
import Chat from './Chat';
function SideBar() {
  const [micOff, setMicOff] = useState(true);
  const channels = [
      {
          title: "Friends", 
          icon: <i className="fa-solid fa-user-group"></i>, 
          active: true
      },
      {
          title: "Stage Discovery", 
          icon: <i className="fa-solid fa-wifi"></i>, 
          active: false
      },
      {
          title: "Nitro", 
          icon: <i className="fa-solid fa-gauge-high"></i>, 
          active: false
      },
    ]

    const profiles = [
        {
            image: discordLogo,
            name: "Ragini Yadav",
            status: "Very busy life",
            online: false
        },
        {
            image: dummyUser,
            name: "Mahesh Kumar",
            status: "I'm online",
            online: true
        },
    ]

    const user = {
        image: dummyUser2,
        name: "Roopesh",
        status: "learning react",
        online: true
    }
  return (
    <div className="bg-[#2f3136] flex-[0.26] flex flex-col justify-between">
        <div>
        <div className="m-[12px] p-[5px] bg-[#23272a] cursor-pointer text-[#dcddde] rounded-md text-sm">
            Find or start a conversation
        </div>
        <div>
            {
                channels.map((channel, index) => 
                    <SideBarChannel 
                        key={index} 
                        title={channel.title} 
                        icon={channel.icon} 
                        active={channel.active}
                    />
                )
            }
        </div>
        <div className="mt-[25px] m-[12px] p-[5px] text-[#dcddde] flex justify-between items-center">
            <div className="uppercase text-sm">Direct messages</div>
            <Tooltip 
                title="Create DM"
                position="top"
                arrow="true"
                className="cursor-pointer"
            >
                <i className="fa-solid fa-plus"></i>
            </Tooltip>
        </div>
        <div>
            {
                profiles.map((profile, index) => 
                    <Chat 
                        key={index} 
                        image={profile.image}
                        name={profile.name}
                        status={profile.status}
                        online={profile.online}
                    />
                )
            }
        </div>
        </div>
        <div className="bg-[#202225] flex justify-between items-center">
            <div>
                <Chat 
                    image={user.image}
                    name={user.name}
                    status={user.status}
                    online={user.online}
                    user
                />
            </div>
            <div className="m-[12px] p-[2px] text-[#dcddde]">
                <i className={`fa-solid fa-microphone cursor-pointer mr-[10px] relative ${micOff && "after:content-[''] after:absolute after:top-0 after:left-0 after:border-t-2 after:border-[#dc2626] after:w-[22px] after:rotate-45 after:origin-[0%]"}`} onClick={()=> setMicOff(!micOff)}></i>
                <i className="fa-solid fa-headphones cursor-pointer mr-[10px]"></i>
                <i className="fa-solid fa-gear cursor-pointer"></i>
            </div>
        </div>
    </div>
  );
}

export default SideBar;