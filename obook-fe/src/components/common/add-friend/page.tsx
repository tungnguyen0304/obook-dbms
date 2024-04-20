"use client";
import IUser from "@/interfaces/user-interface";
import { Button } from "antd";

type Props = {
  user: IUser;
};

const AddFriend = ({ user }: Props) => {
  let name = user ? user?.firstName + " " + user?.lastName : "";
  return (
    <div className="flex items-center my-[20px] h-full">
      <img src={user.avatar} className="w-[70px] h-[70px] rounded-full" />
      <div className="h-[70px] flex flex-col ms-4 justify-between ">
        <h2 className="text-[17px] font-semibold">{name}</h2>
        <ul>
          <Button className="bg-[#0866FF] border-none text-white font-bold mr-[10px] h-[40px] w-[170px] text-[18px]">
            Xác nhận
          </Button>
          <Button className="bg-[#3A3B3C] border-none text-white font-bold w-[170px] h-[40px] text-[18px]">
            Xóa
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default AddFriend;
