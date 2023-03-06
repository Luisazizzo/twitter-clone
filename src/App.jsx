import SideMenu from "./components/sideMenu/SideMenu";
import SideFriends from "./components/sideFriends";
import Content from "./components/content/Content";
import IconsFooter from "./components/iconsFooter/IconsFooter";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <SideMenu />
      <SideFriends />
      <Content />
      <IconsFooter />
    </div>
  );
};

export default App;
