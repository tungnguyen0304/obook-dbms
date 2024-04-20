"use client";

import { ItemSidebar, AddFriend } from "@/components/common";
import IUser from "@/interfaces/user-interface";
import Link from "next/link";

type Props = {
  follower: IUser;
  friends: IUser[];
};

const SidebarRight = ({ follower, friends }: Props) => {
  const user: IUser = {
    firstName: "Kha",
    lastName: "Bui",
    avatar: "../thumb/user.png",
  };
  return (
    <div className="col-span-3  mt-[15px] sticky top-0">
      {follower && (
        <>
          <div className="flex justify-between w-full mt-[10px] items-center">
            <h1 className="text-[#7f8286] ps-2 font-bold  text-[21px]">
              Lời mời kết bạn
            </h1>
            <Link href="/friends" className="text-[#2176FF] pe-[30px]">
              Xem tất cả
            </Link>
          </div>
          <ul className="">
            <AddFriend user={follower} />
          </ul>
          <span className="bg-[#3A3B3C] mx-2 h-[2px] w-full block"></span>
        </>
      )}

      <h1 className="text-[#7f8286] ps-2 font-bold mt-[10px] text-[21px]">
        Sinh nhật
      </h1>

      <div className="mt-[10px] mb-[30px] ms-[15px] flex items-center">
        <img src="./thumb/gift.png" className="w-[45px] h-[45px]" />
        <span className="text-[18px] ms-3 mt-2">
          Hôm này là sinh nhật của
          <a href="" className="font-bold">
            {` ${user.firstName} ${user.lastName}`}
          </a>
        </span>
      </div>

      <span className="bg-[#3A3B3C] mx-2 h-[2px] w-full block"></span>
      <h1 className="text-[#7f8286] ps-2 font-bold mt-[10px] text-[21px]">
        Người liên hệ
      </h1>
      <ul className="mt-[15px] ">
        {friends.map((friend: IUser) => {
          return (
            <ItemSidebar
              key={friend.user_id}
              isGroup={false}
              source={friend.avatar ? friend.avatar : "./thumb/user.png"}
              title={`${friend.firstName} ${friend.lastName}`}
              size="small"
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarRight;
