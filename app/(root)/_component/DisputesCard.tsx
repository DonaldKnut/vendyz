"use client";

import { PieChart } from "lucide-react";

const DisputesCard = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-base text-black">Disputes</h3>
        <button className="text-sm font-semibold text-blue-500 border border-blue-500 rounded-md px-2 py-1">
          View More
        </button>
      </div>
      <div>
        <p className="text-3xl font-bold text-black">
          47 <span className="text-gray-500">/1,305 orders</span>
        </p>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm text-gray-500">Resolved orders</p>
          <p className="text-lg font-bold text-black">
            7 <span className="text-gray-500">/47</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisputesCard;
