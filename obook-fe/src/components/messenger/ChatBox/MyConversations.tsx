import React, { useContext } from "react";
import Conversation from "./Conversation";
import { UserContext } from "../UserContext";

const MyConversations = () => {
  const userContext: any = useContext(UserContext);
  const user = userContext.user;
  const conversations = userContext.conversations;

  return (
    <div className=" h-[calc(100vh-181px)] overflow-y-scroll overflow-x-clip scrollbar-thin">
      {conversations.map((c: any) => (
        <div
          onClick={() => {
            userContext.setCurrentChat(c);
          }}
        >
          <Conversation conversation={c} userId={user._id} isActive={userContext.currentChat?._id === c._id} />
        </div>
      ))}
    </div>
  );
};

export default MyConversations;
