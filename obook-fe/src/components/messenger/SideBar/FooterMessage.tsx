import React, { useContext } from "react";
import { BsFillPeopleFill } from "react-icons/bs/";
import { MdMessage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { UserContext } from "../UserContext";
const FooterMessage = ({ changeStatus, status }: any) => {
  const userContext: any = useContext(UserContext);
  const user = userContext.user;
  return (
    <div className="w-full flex h-[85px] items-center relative  ">
      <div className="line w-10/12 h-0.5 bg-[#F5F6F7] mx-auto absolute top-0 right-0 left-0"></div>
      <div className="flex w-8/12 justify-around h-full items-center ml-3">
        <div className="w-[70px] h-full flex items-center justify-center">
          <BsFillPeopleFill className={`text-[23px]  ${status === "contact" ? "text-[#3361FF]" : "text-[#C3CAD9]"}`} />
        </div>
        <div className="w-[70px] h-full flex items-center justify-center" onClick={(e) => changeStatus("conversation")}>
          <MdMessage
            className={`text-[23px] ${status === "conversation" ? "text-[#3361FF]" : "text-[#C3CAD9]"}`}
            onClick={(e: any) => changeStatus("conversation")}
          />
        </div>
        <div className="w-[70px] h-full flex items-center justify-center" onClick={(e) => changeStatus("conversation")}>
          <IoMdSettings className={`text-[23px] text-[#C3CAD9] ${status === "" && "text-[#3361FF]"}`} />
        </div>
      </div>
      <div className="border-r-2  h-5 ml-5"></div>
      <div className="h-full flex justify-center  items-center flex-1 ">
        <img
          src={
            user?.image
              ? user.image
              : "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png"
          }
          className="h-[30px] w-[30px] rounded-full ml-3"
        />
      </div>
    </div>
  );
};

export default FooterMessage;
