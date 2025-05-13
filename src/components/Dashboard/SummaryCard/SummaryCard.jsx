import "./summarycard.css";

const SummaryCard = ({ title, value }) => {
  return (
    <div className="summarycard">
      <h4>{title}</h4>
      <h3>{value}</h3>
    </div>
  );
};

export default SummaryCard;
