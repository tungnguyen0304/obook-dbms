"use client";

import { createContext, useState } from "react";

const UserContext: any = createContext({
  user: {
    friends: [],
    _id: "6344dfbc0cec8a270cc46d26",
    email: "baonguyen",
    password: "123456",
    createdAt: "2022-10-11T03:15:08.312Z",
    updatedAt: "2022-10-11T03:15:08.312Z",
    __v: 0,
    image: "images/avatar2.jpg",
  },
});

const UserProvider = ({ children }: any) => {
  const user = {
    friends: [],
    _id: "6344dfbc0cec8a270cc46d26",
    email: "baonguyen",
    password: "123456",
    createdAt: "2022-10-11T03:15:08.312Z",
    updatedAt: "2022-10-11T03:15:08.312Z",
    __v: 0,
    image: "images/avatar2.jpg",
  };
  const [currentChat, setCurrentChat] = useState(null);
  const [currentFriends, setCurrentFriends] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const value = {
    user,
    currentChat,
    setCurrentChat,
    currentFriends,
    setCurrentFriends,
    conversations,
    setConversations,
    allUsers,
    setAllUsers,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext };
export default UserProvider;
