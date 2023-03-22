import MessageList from "../messageList";
import Header from "../header";
import "./index.css";
import { useState, useEffect } from "react";

const Content = ({ setChat, setModalPut }) => {
  const [InputValue, setInputValue] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setMessageList(data.posts));
  }, []);

  const filteredMessage = () =>
    messageList.filter((msg) =>
      msg.body.toUpperCase().includes(InputValue.toUpperCase())
    );

  return (
    <div className="Content">
      <Header setInputValue={setInputValue} InputValue={InputValue} />
      {filteredMessage().map((message, i) => (
        <MessageList messageData={message} setModalPut={setModalPut} key={i} />
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
