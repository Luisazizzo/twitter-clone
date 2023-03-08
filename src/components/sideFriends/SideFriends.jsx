import { useEffect, useState } from "react";
import "./index.css";

const SideFriends = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=6")
      .then((res) => res.json())
      .then((data) => setUserData(data.users));
  }, []);
  return (
    <div className="SideFriends">
      {userData.map((photoData) => (
        <img key={photoData.id} src={photoData.image} alt="friends" />
      ))}
    </div>
  );
};
export default SideFriends;
