"use client";

/// Import React and necessary components
import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/layout/default-layout/page";
import { SidebarFriends } from "@/components/component-layout";
import FriendRequestsDisplay from "@/components/friend-request-display/page";
import UserService from "@/services/api/user-api";
import { IUser } from "@/interfaces";

// fix css frame

// Define the Friends component
const Friends = () => {
  const [friends, setFriends] = useState<IUser[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserService.getFollower();
        if (response && response.type == "Success") {
          setFriends(response.message.follower);
          console.log("friends", response.message.follower);
        }
      } catch (err) {
        throw err;
      }
    };

    fetchData();
  }, []);

  // Return the component structure
  return (
    <DefaultLayout>
      <div className="friends-container">
        <SidebarFriends />
        <div className="friends-main-content">
          <h1 className="invitation-heading w-[300px]">Lời mời kết bạn</h1>
          <div className="friend-requests-container">
            {friends.map((friend) => {
              return <FriendRequestsDisplay friend={friend} />;
            })}
          </div>
        </div>
      </div>
      {/* Apply styles using JSX */}
      <style jsx>{`
        .friends-container {
          display: flex;
          margin-right: 0; /* Remove margin-right */
        }

        .friends-main-content {
          margin-left: 350px; /* Adjust the width of the sidebar */
          padding: 16px; /* Add padding for spacing */
          flex-grow: 1; /* Allow the content to grow and fill available space */
        }

        .invitation-heading {
          margin-bottom: 16px; /* Add margin below the heading */
          font-size: 24px; /* Adjust font size */
          color: #7f8286; /* Adjust text color */
          font-weight: bold;
        }

        .friend-request-item {
          width: 200px;
          height: 350px;
        }

        .avatar {
          width: 100%; /* Use 100% width to fill the container */
          height: 200px;
          border-radius: 5%;
          margin-bottom: 8px;
          object-fit: cover; /* Maintain aspect ratio and cover the container */
        }

        .friend-requests-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .friend-request-item {
          width: 200px;
          height: 350px;
        }

        .friend-request-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;
          border: 1px solid #ddd;
          border-radius: 2px;
          height: 100%;
        }

        .avatar {
          width: 200px;
          height: 200px;
          border-radius: 2%;
          margin-bottom: 0; /* Remove margin-bottom */
        }

        .user-details {
          text-align: center;
          margin-bottom: 8px;
        }

        .button-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .confirm-button,
        .delete-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #007bff;
          color: #fff;
          padding: 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          width: 170px; /* Set width in pixels */
          height: 30px; /* Set height in pixels */
        }

        .delete-button {
          background-color: #6c757d;
        }

        .confirm-button span,
        .delete-button span {
          margin-left: 4px;
        }
      `}</style>
    </DefaultLayout>
  );
};

// Export the Friends component
export default Friends;
