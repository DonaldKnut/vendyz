const SummaryCard = ({
  title,
  value,
  percentage,
  percentageColor,
}: {
  title: string;
  value: string;
  percentage: string;
  percentageColor: string;
}) => (
  <div className="p-4 bg-white shadow rounded-md flex items-center gap-4">
    <div>
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className="text-xl font-bold">{value}</p>
      <p className={`text-sm ${percentageColor}`}>{percentage}</p>
    </div>
  </div>
);

export default SummaryCard;
