const SummaryCardBox = () => {
  return (
    <div className="p-4 bg-[#abc2f5c7] shadow rounded-[18px] flex items-center gap-4">
      <div>
        <h4 className="text-sm text-[#828282]">Vendyz Earnings</h4>
        <p className="text-xl font-bold text-black">
          <span className="text-[#0c4dd9]">₦</span>84,310.12
        </p>
        <p className="text-sm text-blue-300">+21.1% last 30 days</p>
      </div>
    </div>
  );
};

export default SummaryCardBox;
