import "./index.css";

const ChatTweet = ({ setChat }) => {
  return (
    <div className="ChatTweet">
      <h1>Chat</h1>
      <textarea className="chat"></textarea>
      <button>invia</button>
      <p className="arrow" onClick={() => setChat(false)}>
        {"<-"}
      </p>
    </div>
  );
};

export default ChatTweet;
