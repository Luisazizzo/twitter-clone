import { FiArrowLeft } from "react-icons/fi";
import "./index.css";

const ChatTweet = ({ setChat }) => {
  return (
    <div className="ChatTweet">
      <h1>Chat</h1>
      <textarea></textarea>
      <button>invia</button>
      <FiArrowLeft className="arrowLeft" onClick={() => setChat(false)} />
    </div>
  );
};

export default ChatTweet;
