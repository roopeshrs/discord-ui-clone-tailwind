import React, {useState} from "react";
function Chat({image, name, status, online, user, onlineUsers}) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  }
  const handleMouseOut = () => {
    setIsHovering(false);
  }
  return (
    <div className={`m-[12px] p-[5px] flex items-center justify-between text-[#dcddde] text-sm cursor-pointer hover:bg-[#36393f] ${onlineUsers && "hover:bg-[#4f545c]"} ${user && "w-fit p-[2px] mr-0"}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className="flex">
            <div className={`w-[40px] h-[40px] mr-[12px] relative after:content-[''] after:w-[18px] after:h-[18px] after:absolute after:bottom-0 after:right-[-4px] after:rounded-[50%] after:border-[3px] after:border-[#202225] ${online ? "after:bg-[#16a34a]" : "after:bg-[#36393f]"}`}>
                <div className="bg-[#8e9297] w-full h-full flex justify-center items-center rounded-[50%] overflow-hidden">
                    <img src={image}/>
                </div>
            </div>
            <div>
                <div>{name}</div>
                <div className="text-xs">{status}</div>
            </div>
        </div>
        {
            !user && !onlineUsers && isHovering && (
                <div className="mr-[15px] pointer-events-none">
                    <i className="fa-solid fa-xmark"></i>
                </div>
            )
        }
    </div>
  );
}

export default Chat;