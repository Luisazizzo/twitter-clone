import {
  FiHome,
  FiBookmark,
  FiMessageSquare,
  FiBell,
  FiCpu,
} from "react-icons/fi";
import "./index.css";

const SideMenuDesktop = ({ setChat }) => {
  return (
    <div className="SideMenuDesktop">
      <ul>
        <li className="twitter">
          <img
            src="https://img.icons8.com/color/256/twitter--v1.png"
            alt="twitter logo"
          />
        </li>
        <li>
          <FiHome className="home" />
          <p>Home</p>
        </li>
        <li>
          <FiCpu className="explore" />
          <p>Explore</p>
        </li>
        <li>
          <FiBell className="notifications" />
          <p>Notifications</p>
        </li>
        <li>
          <FiMessageSquare className="messages" />
          <p>Messages</p>
        </li>
        <li>
          <FiBookmark className="bookmarks" />
          <p>Bookmarks</p>
        </li>
      </ul>
      <button onClick={() => setChat(true)}>Tweet</button>
    </div>
  );
};
export default SideMenuDesktop;
