import { useEffect, useState } from "react";
import { FiMessageCircle, FiEdit, FiHeart, FiSend } from "react-icons/fi";
import "./index.css";

const MessageList = ({ messageData, setModalPut }) => {
  const [likeHeart, setLikeHeart] = useState(false);
  const [userData, setUserData] = useState({});

  const toggleHeart = () => {
    setLikeHeart((prev) => !prev);
  };

  const toggleModal = () => {
    setModalPut({
      postId: messageData.id,
      message: messageData.body,
      name: userData.username,
    });
  };

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
          <FiMessageCircle className="message" />
          <FiEdit className="edit" onClick={toggleModal} />
          <div onClick={toggleHeart}>
            {likeHeart ? (
              <FiHeart className="heart-red" />
            ) : (
              <FiHeart className="heart" />
            )}
          </div>

          <FiSend className="send" />
        </div>
      </div>
    </div>
  );
};
export default MessageList;
