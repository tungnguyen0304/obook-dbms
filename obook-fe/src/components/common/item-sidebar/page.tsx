"use client";

type Props = {
  isGroup: boolean;
  source: string;
  title: string;
  size?: "large" | "small";
  isStory?: boolean;
};

const ItemSidebar = ({ isGroup, source, title, size, isStory }: Props) => {
  return (
    <div className="w-full hover:bg-[#3A3B3C] h-[68px] flex items-center rounded-[10px] ps-2 my-2">
      {isGroup ? (
        <img
          className={`${
            size == "small" ? "h-[40px] w-[40px]" : "h-[48px] w-[48px]"
          }  rounded-[10px] mr-4`}
          src={source}
        />
      ) : (
        <span className="relative">
          <img
            src={source}
            className={`h-[45px] w-[45px] rounded-full mr-4    ${
              isStory && "border-[#0866FF] p-[2px] border-[2px]"
            } `}
          />
          <span className="bg-[#46AB5E] rounded-full block w-[12px] h-[12px] absolute right-[18px] bottom-0  border-black border-[2px]"></span>
        </span>
      )}

      <span className="text-[18px]"> {title}</span>
    </div>
  );
};

export default ItemSidebar;
