import messageList from "../../mock/messageList";
import "./index.css";

const SideFriends = () => {
  return (
    <div className="SideFriends">
      {messageList.map((photoData) => (
        <img src={photoData.photo} alt="friends" />
      ))}
    </div>
  );
};
export default SideFriends;
