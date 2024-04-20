import React, { useState, useEffect, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { UserContext } from "../UserContext";
const Search = () => {
  const userContext: any = useContext(UserContext);
  const me = UserContext.user;
  const allUsers = userContext.allUsers;
  const setAllUsers = userContext.setAllUsers;
  const [valueSearch, setValueSearch] = useState("");
  const [displayUsers, setDisplayUsers] = useState<Boolean>(false);

  useEffect(() => {
    const handleOnClickOutside = (e: any) => {
      setDisplayUsers(false);
    };
    window.addEventListener("click", handleOnClickOutside);
    return () => {
      window.removeEventListener("click", handleOnClickOutside);
    };
  }, [displayUsers]);

  const usersDisplayed = allUsers.filter((user: any) => user.email.toLowerCase().includes(valueSearch.toLowerCase()));

  return (
    <div className="relative w-full">
      <div className=" flex justify-center  items-center ">
        <div className="">
          <AiOutlineSearch className="w-5 h-5 text-[#C3CAD9]" />
        </div>
        <input
          value={valueSearch}
          placeholder="Search in Messages"
          className="font-bold font-sans h-6 w-40 ml-3 outline-none"
          data-modal-toggle="authentication-modal"
          onChange={(e) => setValueSearch(e.target.value)}
          onClick={(e) => {
            e.stopPropagation();
            setDisplayUsers(true);
          }}
        />
      </div>
      {displayUsers && (
        <div className="listUser absolute top-9 left-0 w-[300px] bg-slate-400 z-50 h-[calc(100vh-179px)] overflow-y-scroll overflow-x-clip scrollbar-thin">
          {usersDisplayed.map((user: any) => {
            return (
              <div
                className="w-[300px] h-[80px] bg-white flex items-center relative"
                // onClick={(e) => setAndCreateChat(user)}
              >
                <div className="avatarUser ml-7">
                  <div className="w-[45px] h-[45px] relative">
                    <img
                      src={
                        user?.image
                          ? user.image
                          : "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png"
                      }
                      className="avatar"
                    />
                    <div className="statusUser absolute  bg-[#29CC39] top-[2px] right-[2px] border-2 border-white"></div>
                  </div>
                </div>
                <div className="nameUser ml-5 flex text-[#4D5E80] font-sans font-bold text-[15px] leading-6">
                  <p>{user.email}</p>
                </div>
                <div className="line w-10/12 h-0.5 bg-[#F5F6F7] mx-auto absolute bottom-0 right-0 left-0"></div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
