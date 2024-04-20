import React, { useEffect } from "react";
import classNames from "classnames";

const MyMessage = ({ message, me, isHeader }: any) => {
  return (
    <div className={classNames("w-full flex mt-[10px] flex-row-reverse")}>
      <div className={classNames("w-[260px] sm:w-[600px] flex mx-[30px] justify-end")}>
        <div className="w-full ">
          {!isHeader && (
            <div className={classNames("h-[60px] flex justify-between flex-row-reverse mt-5 w-full")}>
              <div className="flex justify-center  items-center">
                <p className="font-sans font-bold text-[17px] leading-[28px] text-[#4D5E80]">{me?.email}</p>
                <img
                  src={
                    me?.image
                      ? me.image
                      : "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png"
                  }
                  className="h-5 w-5 sm:h-11 sm:w-11 rounded-full ml-5"
                />
              </div>
              <div className="flex justify-center  items-center">
                <p className="textPrimary text-[#ADB8CC]">{message.createdAt}</p>
              </div>
            </div>
          )}

          <div className="mr-0 sm:mr-10 max-w-[260px] min-w-[160px] sm:max-w-[500px] sm:min-w-[300px]">
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

export default MyMessage;
