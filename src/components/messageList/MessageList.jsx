import { useEffect, useState } from "react";
import "./index.css";

const MessageList = ({ messageData }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${messageData.userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="MessageList">
      <img
        className="MessageList__photo"
        src={userData.image}
        alt={userData.username}
      />
      <div className="MessageList__text">
        <span>{userData.username}</span>
        <span className="MessageList__span-email">{userData.email}</span>
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
