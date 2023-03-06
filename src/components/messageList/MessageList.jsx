import "./index.css";

const MessageList = ({ messageData }) => {
  return (
    <div className="MessageList">
      <img
        className="MessageList__photo"
        src={messageData.photo}
        alt={messageData.userName}
      />
      <div className="MessageList__text">
        <span>{messageData.userName}</span>
        <span className="MessageList__span-email">{messageData.email}</span>
        <p>{messageData.body}</p>
        <div className="MessageList__icons">
          <img
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/256/external-Chat-Bubble-messages-and-chat-those-icons-lineal-those-icons-10.png"
            alt="chat"
          />
          <img
            src="https://img.icons8.com/material-sharp/256/sorting-arrows-horizontal.png"
            alt="arrow"
          />
          <img
            src="https://img.icons8.com/ios-glyphs/256/hearts.png"
            alt="heart"
          />
          <img src="https://img.icons8.com/ios/256/upload.png" alt="upload" />
        </div>
      </div>
    </div>
  );
};
export default MessageList;
