import React from 'react';

const Avatar = ({ avatar1, avatar2, is2Avatar = false }: any) => {
  if (is2Avatar) {
    return (
      <div className="w-[45px] h-[45px] relative">
        <img
          src={
            avatar1
              ? avatar1
              : 'https://img.freepik.com/free-vector/find-person-job-opportunity_24877-63457.jpg?w=2000'
          }
          className="avatar1 absolute right-2"
        />
        <img
          src={
            avatar2
              ? avatar2
              : 'https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg'
          }
          className={
            'avatar1 absolute bottom-0 left-0 border-2 border-[#ffffff] '
          }
        />
      </div>
    );
  } else
    return (
      <img
        src={
          avatar1
            ? avatar1
            : 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png'
        }
        className="avatar"
      />
    );
};

export default Avatar;