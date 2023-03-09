import { HiOutlineSparkles } from "react-icons/Hi";
import "./index.css";

const Header = ({ setInputValue, InputValue }) => {
  return (
    <div className="Header">
      <div className="Header__up">
        <p>Home</p>
        <HiOutlineSparkles className="sparkling" />
      </div>
      <div className="Header__down">
        <img
          className="Header__down--profile"
          src="https://neural.love/cdn/ai-photostock/1edaf59b-8da1-615e-98d9-0b4bd55485d4/0.jpg?Expires=1682899199&Signature=OwPtfxD8-KJAtNSy4O9ESWatSr06ePa7IKY2ilciskiM0-FdqafgvjuBI3vcp4k0mXJOhVuMfB6nrEOxzxxrVwzhPQTx5L~VaJmuqL-8CuihJcQEWNESWi9pcQEzoxA41~j0XJBL0K9aCWRH1rNbgYhYLQX7cjoTwtj2RcwWGeculuKJN7Z1uEJFB-i1hrKD97vkg~Ja139DgZq9V5Li~N6O9ljzqWnWuxsM2eSS3CKNM~eah3Tid4uCtXmbz4-tlZmLaPlKqCFt~da4ZflVp3snKSb2rScMTRQ8W9T4B7OfZk~9nUYMl8i91KWjTycp38xROHUauaXGZ418Rfetbg__&Key-Pair-Id=K2RFTOXRBNSROX"
          alt="profile"
        />
        <input
          value={InputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="What's happening?"
        />
        <img src="https://img.icons8.com/fluency/256/image.png" alt="image" />
        <img src="https://img.icons8.com/arcade/256/gif.png" alt="gif" />
        <img
          src="https://img.icons8.com/fluency/256/combo-chart.png"
          alt="graph"
        />
      </div>
    </div>
  );
};
export default Header;
