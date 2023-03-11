import SideMenu from "./components/sideMenu/SideMenu";
import SideFriends from "./components/sideFriends";
import Content from "./components/content/Content";
import IconsFooter from "./components/iconsFooter/IconsFooter";
import SideMenuDesktop from "./components/sideMenuDesktop";
import SideTrends from "./components/sideTrends";
import ChatTweet from "./components/chatTweet";
import ModalPut from "./components/modalPut/ModalPut";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [modalPut, setModalPut] = useState(false);
  const [chat, setChat] = useState(false);

  return (
    <div className="App">
      {modalPut ? (
        <ModalPut modalPut={modalPut} setModalPut={setModalPut} />
      ) : null}
      {chat ? <ChatTweet setChat={setChat} /> : null}
      <SideMenuDesktop setChat={setChat} />
      <SideMenu />
      <SideFriends />
      <Content setChat={setChat} setModalPut={setModalPut} />
      <IconsFooter />
      <SideTrends />
    </div>
  );
};

export default App;
