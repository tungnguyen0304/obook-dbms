"use client";
import React, { ReactNode } from "react";
import { FaHome, FaUserFriends, FaUserPlus, FaUserCheck, FaBirthdayCake, FaList, FaCog,FaChevronRight  } from "react-icons/fa";

interface FriendSidebarItemProps {
  isGroup: boolean;
  source: string | React.ReactNode;
  title: string;
  size?: string;
}

interface FriendSidebarItemProps {
    isGroup: boolean;
    source: string | React.ReactNode;
    title: string;
    size?: string;
  }
  
const FriendSidebarItem: React.FC<FriendSidebarItemProps> = ({ isGroup, source, title }) => {
    const renderIcon = () => {
        switch (title) {
          case 'Trang chủ':
            return <FaHome />;
          case 'Lời mời kết bạn':
            return <FaUserPlus />;
          case 'Gợi ý':
            return <FaUserFriends />;
          case 'Tất cả bạn bè':
            return <FaUserCheck />;
          case 'Sinh nhật':
            return <FaBirthdayCake />;
          case 'Danh sách tùy chỉnh':
            return <FaList />;
          // Add other cases for additional sidebar items
          default:
            return null;
        }
      };
      const renderAdditionalIcon = () => {
        if (title === 'Lời mời kết bạn' || title === 'Gợi ý' || title === 'Tất cả bạn bè' || title === 'Danh sách tùy chỉnh') {
          return <FaChevronRight  className="additional-icon" />;
        }
        return null;
      };
  return (
    <div className={`friend-sidebar-item ${isGroup ? 'group' : ''}`}>
      {isGroup ? (
        <img src={source as string} alt={title} className="icon" />
      ) : (
        <div className="icon-container">
          {renderIcon()}
          <span className="title">{title}</span>
          {renderAdditionalIcon()}
        </div>
      )}

<style jsx>{`
  .friend-sidebar-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: background-color 0.3s, transform 0.2s;
    position: relative; /* Ensure relative positioning for absolute positioning of the additional icon */
  }

  .friend-sidebar-item:hover {
    background-color: #f0f0f0; /* Change the color as per your preference */
    transform: scale(1.02);
  }

  .icon {
    border-radius: 50%;
    margin-right: 12px;
  }

  .icon-container {
    display: flex;
    align-items: center;
    margin-right: 12px;
  }

  .title {
    margin-left: 12px;
  }

  .additional-icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .friend-sidebar-item.group:hover .icon {
    border-radius: 0; /* Reset border-radius for group items on hover */
  }
`}</style>
    </div>
  );
};

  const SidebarFriends = () => {
    const sidebarItems = [
      { icon: <FaHome />, title: 'Trang chủ' },
      { icon: <FaUserPlus />, title: 'Lời mời kết bạn' },
      { icon: <FaUserFriends />, title: 'Gợi ý' },
      { icon: <FaUserCheck />, title: 'Tất cả bạn bè' },
      { icon: <FaBirthdayCake />, title: 'Sinh nhật' },
      { icon: <FaList />, title: 'Danh sách tùy chỉnh' },
      // Add other sidebar items as needed
    ];
  
    return (
      <div className="sidebar-container">
        <div className="header">
          <h1 className="text-[#7f8286] ps-2 font-bold mt-[10px] text-[21px]">
            Bạn bè
          </h1>
          <div className="icon-container">
            <FaCog />
          </div>
        </div>
  
        <nav>
          {sidebarItems.map((item, index) => (
            <FriendSidebarItem key={index} isGroup={false} source={item.icon} title={item.title} />
          ))}
          {/* Add other sidebar items as needed */}
        </nav>
  
        <style jsx>{`
          .sidebar-container {
            position: fixed;
            top: 60px; /* Adjust the top position to leave space for the header */
            left: 0;
            bottom: 0;
            width: 350px; /* Adjust the width as needed */
            background-color: #242526; /* Change the background color as per your preference */
            padding: 16px; /* Adjust the padding as needed */
            border-radius: 8px; /* Optional: Add border-radius for rounded corners */
            display: flex;
            flex-direction: column;
            overflow-y: auto; /* Enable scrolling if the content is too long */
            z-index: 100; /* Ensure the sidebar appears above other elements */

          }
  
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px; /* Adjust the margin as needed */
          }
  
          .icon-container {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 8px;
            border-radius: 50%;
            transition: background-color 0.3s, transform 0.2s;
          }
  
          .icon-container:hover {
            background-color: #f0f0f0; /* Change the color as per your preference */
            transform: scale(1.1);
          }
  
          .icon-container span {
            margin-left: 12px;
          }
  
          .icon-container:hover span {
            color: #007bff; /* Change the color as per your preference */
          }
  
          nav {
            margin-top: 8px; /* Adjust the margin-top to move the navigation items up */
          }
  
          /* Add margin-top to the main content to prevent it from being obscured by the sidebar */
          main {
            margin-left: 250px; /* Adjust the margin-left to match the width of the sidebar */
          }
        `}</style>
      </div>
    );
  };
  
export default SidebarFriends;