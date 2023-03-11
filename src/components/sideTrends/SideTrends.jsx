import { useState } from "react";
import trendsList from "../../mock/trendsList";
import SideTrendsList from "../sideTrendsList/SideTrendsList";
import "./index.css";

const SideTrends = () => {
  const [inputTrends, setInputTrends] = useState("");

  const filteredTrends = () =>
    trendsList.filter((trend) =>
      trend.type.toUpperCase().includes(inputTrends.toUpperCase())
    );
  return (
    <div className="SideTrends">
      <input
        value={inputTrends}
        onChange={(event) => setInputTrends(event.target.value)}
        type="text"
        placeholder="Search Twitter"
      />
      <h3>Trends for you</h3>
      {filteredTrends().map((trend, i) => (
        <SideTrendsList trendsData={trend} key={i} />
      ))}
    </div>
  );
};

export default SideTrends;
