import trendsList from "../../mock/trendsList";
import SideTrendsList from "../sideTrendsList/SideTrendsList";
import "./index.css";

const SideTrends = () => {
  return (
    <div className="SideTrends">
      <input type="text" placeholder="Search Twitter" />
      <h3>Trends for you</h3>
      {trendsList.map((trend) => (
        <SideTrendsList trendsData={trend} />
      ))}
    </div>
  );
};

export default SideTrends;
