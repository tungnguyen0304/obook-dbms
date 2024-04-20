const PersonalInformation = () => {
  return (
    <div className="bg-[#242526] mb-5 flex flex-col rounded-xl p-4">
      <strong className="text-xl">Giới thiệu</strong>
      <span className="flex items-center justify-center text-sm py-2">
        Bring the world together
      </span>
      <div className="w-full py-2">
        <hr className="border-1 border-gray-900" />
      </div>
      <span className="text-sm my-2">Founder and CEO at Meta</span>
      <span className="text-sm my-2">
        Làm việc tại Chan Zuckerberg Initiative
      </span>
      <span className="text-sm my-2">
        Học Computer Science and Psychology tại Harvard University
      </span>
      <span className="text-sm my-2">Sống tại Palo Alto, California</span>
      <span className="text-sm my-2">Đến từ Dobbs Ferry, New York</span>
      <span className="text-sm my-2">Đã kết hôn với Priscilla Chan</span>
      <span className="text-sm my-2">Có 119.446.798 người theo dõi</span>
    </div>
  );
};

export default PersonalInformation;
