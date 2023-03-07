import SideMenu from "./components/sideMenu/SideMenu";
import SideFriends from "./components/sideFriends";
import Content from "./components/content/Content";
import IconsFooter from "./components/iconsFooter/IconsFooter";
import SideMenuDesktop from "./components/sideMenuDesktop";
import SideTrends from "./components/sideTrends";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <SideMenuDesktop />
      <SideMenu />
      <SideFriends />
      <Content />
      <IconsFooter />
      <SideTrends />
    </div>
  );
};

export default App;
