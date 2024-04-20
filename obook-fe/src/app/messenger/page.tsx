import ContentMessage from "@/components/messenger/ChatBox/ContentMessage";
import NavBar from "@/components/messenger/SideBar/NavBar";
import UserProvider, { UserContext } from "@/components/messenger/UserContext";

const Messager = () => {
  return (
    <UserProvider>
      <main className="flex bg-[#FAFBFC]">
        <NavBar />
        <div className="flex-1">
          <ContentMessage />
        </div>
      </main>
    </UserProvider>
  );
};

export default Messager;
