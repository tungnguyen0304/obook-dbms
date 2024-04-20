import { Button } from "antd";

const PostHeader = () => {
  return (
    <div className=" bg-[#242526] rounded-xl flex items-center justify-between p-4">
      <strong className="text-xl">Bài viết</strong>
      <Button className="bg-[#3A3B3C] border-none text-white font-bold w-fit text-sm flex items-center justify-center">
        Bộ lọc
      </Button>
    </div>
  );
};

export { PostHeader };
