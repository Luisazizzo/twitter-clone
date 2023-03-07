import { useState } from "react";
import HamburgerTendina from "../hamburgerTendina/HamburgerTendina";
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
      <img
        className="sparkling"
        src="https://raw.githubusercontent.com/Luisazizzo/twitter-clone/main/src/assets/stars.png"
        alt="sparkling"
      />
    </div>
  );
};
export default SideMenu;
