import { IUser } from "@/interfaces";
import UserService from "@/services/api/user-api";
import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

// interface FriendRequest {
//   friend: IUser;
//   // mutualFriends: number;
// }

type Props = {
  friend: IUser;
};

const FriendRequestsDisplay = ({ friend }: Props) => {
  const [isFollow, setFollow] = useState<boolean>(false);
  const follow = async (follower_id: string) => {
    try {
      setFollow(!isFollow);
      await UserService.follow(follower_id);
    } catch (err) {
      throw err;
    }
  };
  return (
    <div key={friend.user_id} className="friend-request-item">
      <div className="friend-request-content">
        <img
          src={
            friend.avatar
              ? friend.avatar
              : "https://i.pinimg.com/564x/36/84/9a/36849a4b414516bf25ea2a28848b7068.jpg"
          }
          alt={`${friend.firstName} ${friend.lastName}`}
          className="avatar"
        />
        <div className="user-details">
          <h3>{`${friend.firstName} ${friend.lastName}`}</h3>
          <p> 1 bạn chung</p>
        </div>
        <div className="button-container">
          <button
            className="confirm-button"
            onClick={() => follow(friend.user_id as string)}
          >
            <FaCheck /> <span>{isFollow ? "Bạn bè" : "Xác nhận"}</span>
          </button>
          <button className="delete-button">
            <FaTimes /> <span>Xóa</span>
          </button>
        </div>
      </div>
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
    </div>
  );
};

export default FriendRequestsDisplay;
