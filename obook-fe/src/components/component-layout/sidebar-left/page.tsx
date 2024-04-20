"use client";
import { ItemSidebar } from "@/components/common";
import IUser from "@/interfaces/user-interface";
import Link from "next/link";
import { useEffect } from "react";

type Props = {
  current_user: IUser;
};

const SidebarLeft = ({ current_user }: Props) => {
  return (
    <div className="col-span-3 ps-3 mt-[15px] ">
      <nav className="">
        <Link href={`/profile/${current_user.user_id}`}>
          <ItemSidebar
            isGroup={true}
            source={
              current_user.avatar ? current_user.avatar : "../thumb/user.png"
            }
            title={`${current_user.firstName} ${current_user.lastName}`}
            size="large"
          />
        </Link>
        <Link href="/friends">
          <ItemSidebar
            isGroup={true}
            source="../thumb/teamwork.png"
            title="Bạn bè"
            size="small"
          />
        </Link>
        <ItemSidebar
          isGroup={true}
          source="../thumb/save-instagram.png"
          title="Đã lưu"
          size="small"
        />
        <ItemSidebar
          isGroup={true}
          source="../thumb/group.png"
          title="Nhóm"
          size="small"
        />
        <ItemSidebar
          isGroup={true}
          source="../thumb/marketplace.png"
          title="Marketplace"
          size="small"
        />
      </nav>
      <span className="bg-[#3A3B3C] mx-2 h-[1.2px] w-full block"></span>
      <h1 className="text-[#7f8286] ps-2 font-bold mt-[10px] text-[21px]">
        Lối tắt của bạn
      </h1>
      <ul className="">
        <ItemSidebar
          isGroup={true}
          source="../thumb/bkbk.jpg"
          title="HCMUT K20"
        />
        <ItemSidebar
          isGroup={true}
          source="../thumb/bkbk.jpg"
          title="HCMUT K21"
        />
        <ItemSidebar
          isGroup={true}
          source="../thumb/bkbk.jpg"
          title="HCMUT K22"
        />
        <ItemSidebar
          isGroup={true}
          source="../thumb/bkbk.jpg"
          title="HCMUT K23"
        />
        <ItemSidebar
          isGroup={true}
          source="../thumb/bkbk.jpg"
          title="HCMUT K24"
        />
      </ul>
    </div>
  );
};

export default SidebarLeft;
