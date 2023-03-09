// Esercizio 09-03-2023
// Diciamo che ho replicato quanto visto a lezione,
// perchè non sono riuscita a incrementarlo in qualche altro modo.
// Il mio useRef allo scrollTop del header va a meno -70px.

import MessageList from "../messageList";
import Header from "../header";
import "./index.css";
import { useState, useEffect, useRef } from "react";

const Content = ({ setChat }) => {
  const [InputValue, setInputValue] = useState("");
  const headerRef = useRef(null);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setMessageList(data.posts));
  }, []);

  const filteredMessage = () =>
    messageList.filter((msg) => msg.body.includes(InputValue.toUpperCase()));

  return (
    <div
      ref={headerRef}
      className="Content"
      onScroll={() =>
        headerRef.current.scrollTop >= 1
          ? (headerRef.current.style.transform = "translateY(-70px)")
          : (headerRef.current.style.transform = "translateY(0)")
      }
    >
      <Header setInputValue={setInputValue} InputValue={InputValue} />
      {filteredMessage().map((message) => (
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
