import ChatMassage from "./Chatboard/ChatMassage";
import Contact from "./Chatboard/Contact";
import Profile from "./Chatboard/Profile";

function ChatBox() {
  return (
    <>
      <div className="chatBoxTopLeft">
        <Profile />
      </div>
      <div className="chatBoxBottom">
        <Contact />
        <ChatMassage />
      </div>
    </>
  );
}
export default ChatBox;
