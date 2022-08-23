import React, {useState} from "react";
import SideBarChannel from '../SideBarChannel';
import dummyUser2 from "../../../assets/dummy-user-image2.png";
import Chat from '../Chat';
function NewLineSideBar() {
  const [micOff, setMicOff] = useState(true);
  const channels = [
      {
          title: "rules", 
          icon: <i className="fa-solid fa-hashtag"></i>, 
          active: false
      }
    ]

  const textChannels = [
      {
          title: "html", 
          icon: <i className="fa-solid fa-hashtag"></i>, 
          active: false
      },
      {
          title: "css", 
          icon: <i className="fa-solid fa-hashtag"></i>, 
          active: false
      },
      {
          title: "JavaScript", 
          icon: <i className="fa-solid fa-hashtag"></i>, 
          active: true
      },
      {
          title: "React", 
          icon: <i className="fa-solid fa-hashtag"></i>, 
          active: false
      },
      {
          title: "Node JS", 
          icon: <i className="fa-solid fa-hashtag"></i>, 
          active: false
      },
      {
          title: "Mongo DB", 
          icon: <i className="fa-solid fa-hashtag"></i>, 
          active: false
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
        <div className="m-[12px] p-[5px] text-[#dcddde] flex items-center justify-between">
            <div className="text-sm font-bold cursor-default">newLine</div>
            <i className="fa-solid fa-xmark cursor-pointer"></i>
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
        <div className="mt-[25px] m-[12px] p-[5px] text-[#dcddde] flex items-center">
            <i className="fa-solid fa-angle-down cursor-pointer"></i>
            <div className="uppercase text-sm ml-[12px] cursor-default">text channels</div>
        </div>
        <div>
            {
                textChannels.map((channel, index) => 
                    <SideBarChannel 
                        key={index} 
                        title={channel.title} 
                        icon={channel.icon} 
                        active={channel.active}
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

export default NewLineSideBar;