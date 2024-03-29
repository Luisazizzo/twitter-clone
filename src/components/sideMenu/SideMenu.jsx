import { useState } from "react";
import HamburgerTendina from "../hamburgerTendina/HamburgerTendina";
import { TbSparkles } from "react-icons/tb";
import "./index.css";

const SideMenu = () => {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <div className="SideMenu">
      <HamburgerTendina menuShow={menuShow} />
      <img
        onClick={() => setMenuShow(!menuShow)}
        src="https://img.icons8.com/fluency/256/menu.png"
        alt="menu"
      />
      <img
        src="https://img.icons8.com/color/256/twitter--v1.png"
        alt="twitter"
      />
      <TbSparkles className="sparkling-mobile" />
    </div>
  );
};
export default SideMenu;
