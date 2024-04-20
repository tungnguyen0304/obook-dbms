"use client";

import React from "react";
import { PiShareFatBold } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { IUser, IPhoto, IPost } from "@/interfaces";
import { useState } from "react";
import { useLikedMutation } from "@/redux/service/post-api";
import { Button, message, Popconfirm } from "antd";
import Link from "next/link";
import PostService from "@/services/api/post-api";
import usePost from "@/stores/post-store";

type Props = {
  user: IUser;
  post: IPost;
  photos: IPhoto[];
  isLike: boolean;
  isOwner: boolean;
};

const Post = ({ user, post, photos, isLike, isOwner = false }: Props) => {
  const [liked, setLiked] = useState<boolean>(isLike);
  const [handleLiked] = useLikedMutation();
  const { removePost } = usePost();
  const handleLike = (post_id: string) => {
    setLiked(!liked);
    handleLiked(post_id);
  };

  const confirm = async (e?: React.MouseEvent<HTMLElement>) => {
    try {
      const response = await PostService.deletePost(post.post_id as string);
      removePost(user, post, photos);
      message.success("Delete post successfully");
    } catch (err) {
      throw err;
    }
  };

  const cancel = (e?: React.MouseEvent<HTMLElement>) => {
    message.error("Delete post failed");
  };

  return (
    <div className="bg-[#242526]  mt-[25px] mb-[10px] rounded-[10px] py-[15px] ">
      <header className=" flex items-center justify-between px-[20px]">
        <div className="flex items-center">
          <Link href={`/profile/${user.user_id}`} className="relative">
            <img
              src={user.avatar != "" ? user.avatar : "../thumb/user.png"}
              className="h-[50px] w-[50px] rounded-full mr-4"
            />
          </Link>
          <div className="flex flex-col justify-between">
            <h1 className="font-semibold text-[18px]">{`${user.firstName} ${user.lastName}`}</h1>
            <h3>1 hour</h3>
          </div>
        </div>
        {isOwner && (
          <Popconfirm
            title="Xóa post"
            description="Bạn có chắc chắn muốn xóa bài post này ?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        )}
      </header>

      <span className="block my-[15px] px-[20px] text-[17px] leading-relaxed">
        {post.description}
      </span>

      <div className="p-0">
        <img src={photos[0].source} className="w-full  h-[600px]" />
      </div>

      <footer className="flex flex-col px-[20px] mt-[15px]">
        <div className="flex items-center justify-between">
          <ul className="flex items-center">
            <li className="flex items-center">
              <img src="../thumb/heart.png" className="w-[25px] h-[25px]" />
            </li>
            <li className="flex items-center">
              <img src="../thumb/like.png" className="w-[25px] h-[25px]" />
            </li>
            <li className="flex items-center">
              <img src="../thumb/haha.png" className="w-[30px] h-[30px]" />
            </li>
            <li className="ms-2 text-[#757577] text-[20px] font-medium">10k</li>
          </ul>
          <span className="text-[#757577] text-[20px]">100k bình luận</span>
        </div>
        <span className="bg-[#3A3B3C]  h-[1.2px] w-full block mt-[15px] mb-[10px]"></span>

        <nav className="grid grid-cols-3 mx-auto gap-2 h-[40px] w-full">
          <button
            className="flex items-center justify-center hover:rounded-[10px] hover:bg-[#3A3B3C] cursor-pointer"
            onClick={() => handleLike(post.post_id || "")}
          >
            <AiOutlineLike
              className={`text-[30px] ${
                liked ? "text-[#1E76FF]" : "text-[#7f8286]"
              } `}
            />
            <h3
              className={` ${
                liked ? "text-[#1E76FF]" : "text-[#8d939b]"
              } font-semibold ms-[10px] text-[20px]`}
            >
              Thích
            </h3>
          </button>

          <span className="flex items-center justify-center hover:rounded-[10px] hover:bg-[#3A3B3C]">
            <FaRegComment className=" text-[30px] text-[#7f8286]" />
            <h3 className="text-[#8d939b] font-semibold ms-[10px] text-[20px]">
              Bình luận{" "}
            </h3>
          </span>

          <span className="flex items-center justify-center hover:rounded-[10px] hover:bg-[#3A3B3C]">
            <PiShareFatBold className=" text-[30px] text-[#7f8286]" />
            <h3 className="text-[#8d939b] font-semibold ms-[10px] text-[20px]">
              Chia sẻ
            </h3>
          </span>
        </nav>
      </footer>
    </div>
  );
};

export default Post;
