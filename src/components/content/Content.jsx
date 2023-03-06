import MessageList from "../messageList";
import messageList from "../../mock/messageList";
import "./index.css";

const Content = () => {
  return (
    <div className="Content">
      {messageList.map((message) => (
        <MessageList messageData={message} />
      ))}
      <button className="Content__twit">
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
