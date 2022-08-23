import React, {useState} from "react";
import NewLineNav from './NewLineNav';
import Chat from '../Chat';
import discordLogo from "../../../assets/discord_mini_icon.svg";
import dummyUser from "../../../assets/dummy-user-image.png";
import Message from './Message';
function NewLine() {

    const [inputValue, setInputValue] = useState("");
    const [allMessages, setAllMessages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();
        let dateFormated = date.toLocaleDateString();
        setAllMessages([...allMessages, {msg: inputValue, date: dateFormated}])
        setInputValue("");
    }

    const onlineProfiles = [
        {
            image: discordLogo,
            name: "Ragini Yadav",
            status: "Very busy life",
            online: false
        },
        {
            image: discordLogo,
            name: "Anju",
            status: "",
            online: true
        },
        {
            image: discordLogo,
            name: "venkatesh",
            status: "travelling...",
            online: false
        },
        {
            image: dummyUser,
            name: "Mahesh Kumar",
            status: "I'm online",
            online: true
        }
    ]
  return (
    <div className="bg-[#36393f] flex-1 flex flex-col">
        <div className="h-[8vh] border-b-[1px] border-[#23272a]">
            <NewLineNav />
        </div>
        <div className="flex h-[92vh]">
            <div className="flex-[0.7] h-full relative">
                <div className="scrollbar h-[90%] overflow-x-auto">
                    {
                        allMessages.map((message, index) => 
                            <Message 
                                key={index}
                                messageText={message.msg}
                                messageDate={message.date}
                            />)
                    }
                </div>
                <div className="flex m-[12px] p-[8px] bg-[#4f545c] rounded-md absolute bottom-0 left-0 right-0">
                    <div className="text-[#dcddde] text-xl mx-[8px]">
                        <i className="fa-solid fa-circle-plus cursor-pointer"></i>
                    </div>
                    <div className="flex-1 text-[#dcddde] text-xl">
                        <form onSubmit={handleSubmit}>
                        <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} className="w-full outline-0 pl-[10px] bg-[#4f545c]" placeholder="Message #JavaScript"/>
                        </form>
                    </div>
                    <div className="text-[#dcddde] text-xl mx-[8px]">
                        <i className="fa-solid fa-gift cursor-pointer"></i>
                    </div>
                    <div className="text-[#36393f] text-xl mx-[8px]">
                        <div className="uppercase cursor-pointer bg-[#dcddde] rounded-sm px-[5px]">gif</div>
                    </div>
                    <div className="text-[#dcddde] text-xl mx-[8px]">
                        <i className="fa-solid fa-face-grin cursor-pointer"></i>
                    </div>
                </div>
            </div>
            <div className="flex-[0.3] border-l-[1px] border-[#4f545c]">
                <h2 className="text-white mt-[20px] pl-[20px] text-md uppercase">online &mdash; 3</h2>
                <div className="m-[10px]">
                {
                    onlineProfiles.map((profile, index) => 
                        <Chat 
                            key={index} 
                            image={profile.image}
                            name={profile.name}
                            status={profile.status}
                            online={profile.online}
                            onlineUsers
                        />
                    )
                }
                </div>
            </div>
        </div>
    </div>
  );
}

export default NewLine;