import "./index.css";

const SideTrendsList = ({ trendsData }) => {
  return (
    <div className="SideTrendsList">
      <p className="tipo">{trendsData.type}</p>
      <p className="tweets">{trendsData.tweets}k</p>
    </div>
  );
};
export default SideTrendsList;
