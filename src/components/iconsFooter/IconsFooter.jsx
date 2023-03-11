import { FiHome, FiBell, FiMail, FiSearch } from "react-icons/fi";
import "./index.css";

const IconsFooter = () => {
  return (
    <div className="IconsFooter">
      <FiHome className="home" />
      <FiSearch className="search" />
      <FiBell className="notifications" />
      <FiMail className="email" />
    </div>
  );
};
export default IconsFooter;
