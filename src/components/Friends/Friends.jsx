import React, {useState} from "react";
import FriendsNav from './FriendsNav';
import FriendsOnline from './FriendsOnline';
import AllFriends from './AllFriends';
import FriendsPending from './FriendsPending';
import BlockedFriends from './BlockedFriends';
import AddFriend from './AddFriend';
function Friends() {
  const [isOnlineActive, setIsOnlineActive] = useState(true);
  const [isAllActive, setIsAllActive] = useState(false);
  const [isPendingActive, setIsPendingActive] = useState(false);
  const [isBlockedActive, setIsBlockedActive] = useState(false);
  const [isAddFriendActive, setIsAddFriendActive] = useState(false);
  return (
    <div className="bg-[#36393f] flex-1 flex flex-col">
        <div className="h-[8vh] border-b-[1px] border-[#23272a]">
            <FriendsNav 
                isOnlineActive={isOnlineActive}
                setIsOnlineActive={setIsOnlineActive}
                isAllActive={isAllActive}
                setIsAllActive={setIsAllActive}
                isPendingActive={isPendingActive}
                setIsPendingActive={setIsPendingActive}
                isBlockedActive={isBlockedActive}
                setIsBlockedActive={setIsBlockedActive}
                isAddFriendActive={isAddFriendActive}
                setIsAddFriendActive={setIsAddFriendActive}
            />
        </div>
        <div className="flex h-[92vh]">
            <div className="flex-[0.6] h-full">
                {
                    isOnlineActive && <FriendsOnline /> ||
                    isAllActive && <AllFriends /> ||
                    isPendingActive && <FriendsPending /> ||
                    isBlockedActive && <BlockedFriends /> ||
                    isAddFriendActive && <AddFriend />
                }
            </div>
            <div className="flex-[0.4] border-l-[1px] border-[#4f545c]">
                <h2 className="text-white mt-[20px] pl-[20px] text-xl font-bold">Active Now</h2>
                <div className="m-[30px]">
                    <h3 className="text-white text-center font-medium">It's quiet for now...</h3>
                    <p className="text-center text-[#dcddde] text-sm">When a friend starts an activity—like playing a game or hanging out on voice—we’ll show it here!</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Friends;