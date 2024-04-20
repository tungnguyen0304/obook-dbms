import React, { useState } from "react";
import { BsImage } from "react-icons/bs";
import { useEffect } from "react";
import classNames from "classnames";
import data from "../data";
import Avatar from "../Avatar";
interface Conversation {
  _id: string;
  members: [string];
  name?: String;
  latestMessage: String;
}
interface Props {
  conversation: Conversation;
  userId: string;
  isActive?: Boolean;
}
function Conversation({ conversation, userId, isActive = false }: Props) {
  const [peopleInConversation, setPeopleInConversation] = useState<any>([]);
  const type = "text";

  // Find people in Conversation
  useEffect(() => {
    const friendIds = conversation.members.filter((memberId) => memberId != userId);
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
  }, [conversation]);

  return (
    <div
      className={classNames("rounded-lg w-11/12 mx-auto cursor-pointer ", {
        "bg-blue-200 ": isActive,
        "hover:bg-slate-100": !isActive,
      })}
    >
      <div className="flex p-3 pr-10">
        <div className=" mr-5 relative">
          <Avatar avatar1={peopleInConversation[0]?.image} />
          <div className="statusUser absolute  bg-[#29CC39] top-[2px] right-[2px] border-2 border-white"></div>
        </div>

        <div className="flex-1 mt-1">
          <div className="status flex  text-[#ADB8CC] font-sans font-bold text-[15px] leading-6 justify-between">
            <p>{conversation.name || peopleInConversation[0]?.email}</p>
            <p className="font-sans font-bold text-[15px] leading-6">12:45</p>
          </div>
          <div className="flex mt-1 items-center justify-between">
            <div className="messageBox__last max-w-[240px] font-sans font-bold text-[15px] leading-6 text-[#99a3b5] h-[20px]">
              {type === "text" && (
                <div className="w-[140px] h-[20px] overflow-clip">
                  <p className="text-[12px]">{conversation?.latestMessage}</p>
                </div>
              )}
              {type !== "text" && type !== "" && (
                <div className="flex">
                  <BsImage className="text-[17px] font-medium" />
                  <p className="ml-2 tracking-widest">File</p>
                </div>
              )}
            </div>

            {/* <div className="box w-6 h-6 centreFlex bg-[#F24E1E] rounded-full text-white">
              1
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
