import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import classNames from "classnames";
import data from "../data";

const FriendMessage = ({ message, senderId }: any) => {
  const [friend, setFriend] = useState<any>();

  // Find information who send message
  useEffect(() => {
    const getSender = async () => {
      try {
        const res = data.users.find((user) => user._id == senderId);
        setFriend(res);
      } catch (err) {}
    };
    getSender();
  }, [senderId]);

  const sender: any = friend;
  return (
    <div className={classNames("w-full flex mt-[10px] ")}>
      <div className={classNames("w-[260px] sm:w-[600px] flex mx-[30px] ")}>
        <div className="max-w-[260px] min-w-[160px] sm:max-w-[500px] sm:min-w-[300px]">
          <div className={classNames("h-[60px] flex justify-between mt-5")}>
            <div className="centreFlex">
              <p className="textSecondary text-[#4D5E80] order-3 ml-5">{sender?.email}</p>
              <img
                src={
                  sender?.image
                    ? sender.image
                    : "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png"
                }
                className="h-5 w-5 sm:h-11 sm:w-11 rounded-full"
              />
            </div>
            <div className="centreFlex">
              <p className="textPrimary text-[#ADB8CC]">{message.createdAt}</p>
            </div>
          </div>

          <div className="mr-0 sm:ml-10">
            <div className="flex justify-end">
              {message.type == "text" && (
                <div
                  className={classNames(
                    "messagecontent bg-[#FFFFFF] p-5 rounded-xl textPrimary text-[#6B7A99] boxShadow"
                  )}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendMessage;
