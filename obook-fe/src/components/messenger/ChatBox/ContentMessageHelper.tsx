import classNames from "classnames";
interface TypeProps {
  type: "text" | "image";
  content: string;
}

export const DisplayMessageBaseType = ({ type, content }: TypeProps) => {
  const DisplayText = ({ content }: any) => {
    return (
      <div className={classNames("messagecontent bg-[#FFFFFF] p-5 rounded-xl textPrimary text-[#6B7A99] boxShadow")}>
        <p className="whitespace-pre-line">{content}</p>
      </div>
    );
  };

  const DisplayImage = ({ content }: any) => {
    return (
      <div className="flex justify-end flex-row w-[500px] mr-0">
        <img src={content} className=" boxShadow w-[80px] h-[60px] sm:w-[220px] sm:h-[165px] mr-0" />
      </div>
    );
  };

  const typeWithFunction = {
    text: DisplayText,
    image: DisplayImage,
  };

  const Display = typeWithFunction[type];
  return <Display content={content} />;
};

const converCreatedAtIntoArray = (myTime: any) => {
  const date = myTime.split("T")[0].split("-");
  const time = myTime.split("T")[1].split(".")[0].split(":");
  return [...date, ...time];
};

export const isSuitable = (time1: any, time2: any) => {
  if (!time1 || !time2) return false;
  const array1 = converCreatedAtIntoArray(time1);
  const array2 = converCreatedAtIntoArray(time2);
  for (let i = 0; i < 4; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return -3 < array1[4] - array2[4] && array1[4] - array2[4] < 3;
};
