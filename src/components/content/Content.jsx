import MessageList from "../messageList";
import Header from "../header";
import "./index.css";
import { useState, useEffect } from "react";

const Content = ({ setChat }) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setMessageList(data.posts));
  }, []);

  return (
    <div className="Content">
      <Header />
      {messageList.map((message) => (
        <MessageList messageData={message} />
      ))}
      <button className="Content__twit" onClick={() => setChat(true)}>
        +
        <img
          src="https://img.icons8.com/material-rounded/256/quill-pen.png"
          alt="scrivi"
        />
      </button>
    </div>
  );
};

export default Content;
