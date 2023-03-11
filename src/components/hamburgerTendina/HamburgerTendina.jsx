import { FiBookmark, FiMessageSquare, FiBell, FiCpu } from "react-icons/fi";
import "./index.css";

const HamburgerTendina = ({ menuShow }) => {
  return (
    <div className={`HamburgerTendina ${menuShow ? "show" : ""}`}>
      <img
        className="profilo"
        src="https://neural.love/cdn/ai-photostock/1edaf59b-8da1-615e-98d9-0b4bd55485d4/0.jpg?Expires=1682899199&Signature=OwPtfxD8-KJAtNSy4O9ESWatSr06ePa7IKY2ilciskiM0-FdqafgvjuBI3vcp4k0mXJOhVuMfB6nrEOxzxxrVwzhPQTx5L~VaJmuqL-8CuihJcQEWNESWi9pcQEzoxA41~j0XJBL0K9aCWRH1rNbgYhYLQX7cjoTwtj2RcwWGeculuKJN7Z1uEJFB-i1hrKD97vkg~Ja139DgZq9V5Li~N6O9ljzqWnWuxsM2eSS3CKNM~eah3Tid4uCtXmbz4-tlZmLaPlKqCFt~da4ZflVp3snKSb2rScMTRQ8W9T4B7OfZk~9nUYMl8i91KWjTycp38xROHUauaXGZ418Rfetbg__&Key-Pair-Id=K2RFTOXRBNSROX"
      />
      <p className="nome">Topo Tip</p>
      <p className="my-email">topotip@gmail.com</p>
      <ul>
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
    </div>
  );
};
export default HamburgerTendina;
