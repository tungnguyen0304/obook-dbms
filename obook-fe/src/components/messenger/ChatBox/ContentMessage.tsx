"use client";

import React, { useState, useContext, useEffect, useRef } from "react";
import { MdSend, MdAttachment, MdImage } from "react-icons/md";
import { AiFillFileText, AiOutlineClose } from "react-icons/ai";
import { IoArrowBackOutline } from "react-icons/io5";
import classNames from "classnames";
import MyMessage from "./MyMessage";
import FriendMessage from "./FriendMessage";
import { UserContext } from "../UserContext";
import data from "../data";
import Avatar from "../Avatar";
import { isSuitable } from "./ContentMessageHelper";
const ContentMessage = () => {
  //Input
  const inputRef = useRef<any>(null);
  // Message
  const [messages, setMessages] = useState<any>([]);
  let myLastTime = "2022-10-10T00:13:35.519Z";
  let myCurrentTime = "2022-10-12T00:13:35.519Z";
  //File
  const [files, setFiles] = useState<any>([]);
  const inputFileRef = useRef<any>(null);
  const [heightInput, setHeightInput] = useState(36);
  // Context
  const userContext: any = useContext(UserContext);
  const currentChat = userContext.currentChat;
  const user = userContext.user;
  const userId = user._id;
  //Socket
  const scrollRef = useRef<any>(null);

  const [peopleInConversation, setPeopleInConversation] = useState<any>([]);

  // Find people in Conversation
  useEffect(() => {
    if (!currentChat) return;
    const friendIds = currentChat.members.filter((memberId: any) => memberId != userId);
    const allPeopleInConversation: any = [];
    const getAllPeopleInConversation = async (friendIds: any) => {
      await Promise.all(
        friendIds.map(async (friendId: any) => {
          try {
            const res1 = data.users.find((user) => user._id == friendId);
            const personInConversation = res1;
            allPeopleInConversation.unshift(personInConversation);
          } catch (err) {
            console.log(err);
          }
        })
      );
      setPeopleInConversation(allPeopleInConversation);
    };
    getAllPeopleInConversation(friendIds);
  }, [currentChat]);

  //Get all message from DataBase
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = data.messages.filter((message) => message.conversationId == currentChat._id);
        setMessages(res);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  // Scroll Down
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, currentChat]);

  // Submit when press enter
  const submitWhenEnter = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
    } else if (e.key === "Enter") {
      const scrollTop = e.target.scrollTop;
    }
  };
  return (
    <div
      className={classNames("contentMessage flex-1 bg-[#FAFBFC] rounded-r-2xl", {
        hidden: !currentChat,
      })}
    >
      <header className={classNames("headerMessage flex items-center h-[85px] sm:pl-7")}>
        <div className="w-[67px] centreFlex sm:hidden" onClick={() => userContext.setCurrentChat(null)}>
          <IoArrowBackOutline className="text-[26px] text-[#3361FF]" />
        </div>
        <div className="messageBox__avatar mr-5 relative">
          <div className=""></div>
          {currentChat?.members.length > 2 ? (
            <Avatar avatar1={peopleInConversation[0]?.image} avatar2={peopleInConversation[1]?.image} is2Avatar />
          ) : (
            <Avatar avatar1={peopleInConversation[0]?.image} />
          )}
          <div className="statusUser absolute  bg-[#29CC39] top-[2px] right-[2px] border-2 border-white"></div>
        </div>
        <div className="">
          <div className="textPrimary text-[#29CC39]">Online</div>
          <div className={classNames("nameUser textSecondary text-[#6B7A99] flex")}>
            {currentChat?.name || peopleInConversation[0]?.email}
          </div>
        </div>
      </header>
      <div className="lineContentMessage"></div>

      <main
        style={{
          height: `calc(100vh - 99px - ${files.length > 0 ? heightInput + 118 : heightInput + 48}px)`,
        }}
        className={`overflowHidden  flex-1 pb-3 sm:pb-[85px] `}
      >
        {messages.map((m: any) => {
          if (m.senderId === user._id) {
            myLastTime = myCurrentTime;
            myCurrentTime = m.createdAt;
          }
          if (m.type !== "text") myLastTime = "2022-10-10T00:13:35.519Z";

          return (
            <div ref={scrollRef}>
              {m.senderId === user._id ? (
                <MyMessage message={m} me={user} isHeader={isSuitable(myLastTime, m.createdAt)} />
              ) : (
                <FriendMessage message={m} senderId={m.senderId} />
              )}
            </div>
          );
        })}
      </main>
      <div className="lineContentMessage"></div>

      <footer className="sentBar flex min-h-[70px]  items-end">
        <input
          type="file"
          id="customFile"
          className="hidden"
          multiple
          ref={inputFileRef}
          onChange={(e) => {
            setFiles(Array.from(e.target.files || []));
          }}
        />
        <div>
          <div className="pt-5 pb-7 bg-white">
            <div
              ref={inputRef}
              contentEditable
              className="bg-[#FFFF] font-sans text-[17px] leading-[28px] outline-none min-h-[36px] max-h-[150px] overflow-y-auto pl-3 font-normal w-[calc(100vw-206px)] sm:w-[calc(100vw-415px)] text-black"
              onInput={(e) => {
                const element = e.target as HTMLDivElement;
                setHeightInput(element.clientHeight);
              }}
              onKeyDown={submitWhenEnter}
              data-text="Type Message"
            ></div>
          </div>
        </div>
        <div className="w-[84px] h-[84px] flex justify-center items-center  cursor-pointer">
          <MdSend className="text-[30px] text-[#3361FF]" />
        </div>
      </footer>
    </div>
  );
};

export default ContentMessage;
