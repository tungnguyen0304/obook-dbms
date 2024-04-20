"use client";

import React, { useContext, useState, useEffect } from "react";
import FooterMessage from "./FooterMessage";
import Search from "./Search";
import MyConversations from "../ChatBox/MyConversations";
import { UserContext } from "../UserContext";
import data from "../data";

const NavBar = () => {
  const userContext: any = useContext(UserContext);
  const user = userContext.user;
  console.log(user);
  const setConversations = userContext.setConversations;
  const [typeStatus, setTypeStatus] = useState<"contact" | "setting" | "conversation">("conversation");
  // Get conversations of user
  useEffect(() => {
    if (!user) return;
    setConversations(data.conversations.filter((conversation) => conversation.members.includes(user._id)));
  }, []);
  return (
    <div className={`${userContext.currentChat && "hidden"} w-full sm:w-[300px] sm:block bg-white text-black h-full `}>
      <div className="flex justify-center items-center leading-7 text-lg font-sans py-3 text-[#4D5E80] font-bold">
        Messenger
      </div>
      <div className="flex justify-center  items-center w-full">
        <Search />
      </div>

      <div className=" h-0.5 my-2 bg-[#F5F6F7] mx-auto"></div>
      <MyConversations />
      <FooterMessage changeStatus={setTypeStatus} status={typeStatus} />
    </div>
  );
};

export default NavBar;
