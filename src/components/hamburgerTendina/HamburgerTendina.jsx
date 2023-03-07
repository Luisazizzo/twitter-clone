import "./index.css";

const HamburgerTendina = ({ menuShow }) => {
  return (
    <div className={`HamburgerTendina ${menuShow ? "show" : ""}`}>
      <img
        className="profilo"
        src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
        alt="profile"
      />
      <p className="nome">Topo Tip</p>
      <p className="email">topotip@gmail.com</p>
      <ul>
        <li>
          <img
            src="https://img.icons8.com/material-rounded/256/hashtag-large.png"
            alt="explore"
          />
          <p>Explore</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/material/256/jingle-bell.png"
            alt="notifications"
          />
          <p>Notifications</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios-glyphs/256/filled-chat.png"
            alt="messages"
          />
          <p>Messages</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/material/256/bookmark-outline.png"
            alt="bookmarks"
          />
          <p>Bookmarks</p>
        </li>
      </ul>
    </div>
  );
};
export default HamburgerTendina;
