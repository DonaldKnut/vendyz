import React from "react";
import {
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { convertFileSize } from "@/lib/utils";

interface ChartProps {
  used: number;
  total: number;
}

const Chart = ({ used, total }: ChartProps) => {
  const percentageUsed = Math.round((used / total) * 100);

  const chartData = [
    {
      storage: "used",
      value: percentageUsed,
      fill: "#FFD700", // Yellow for the used portion
    },
    {
      storage: "remaining",
      value: 100 - percentageUsed,
      fill: "#2962ff", // Deep Blue for the remaining portion
    },
  ];

  return (
    <Card className="rounded-[18px] p-5">
      <h4 className="text-left items-start">Disputes breakdown</h4>
      <CardContent className="flex flex-col items-center justify-center p-0">
        {/* Radial Bar Chart */}
        <div className="relative">
          <RadialBarChart
            width={300}
            height={300}
            data={chartData}
            startAngle={90}
            endAngle={450}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid />
            <RadialBar dataKey="value" cornerRadius={10} />
            <PolarRadiusAxis tick={false} />
          </RadialBarChart>
          {/* Centered Text on Chart */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-sm font-semibold text-gray-500">Dispute</p>
            <p className="text-xl font-bold text-black">N51,089</p>
          </div>
        </div>
      </CardContent>

      {/* SummaryCard-like Box */}
      <div className="mt-4 p-4 bg-white border border-gray-300 shadow-md rounded-lg flex justify-between items-center">
        {/* Received Section */}
        <div className="flex-1">
          <h4 className="text-sm text-gray-500">Money Received</h4>
          <p className="text-xl font-bold text-blue-500">N44,570</p>
        </div>

        {/* Pending Section */}
        <div className="flex-1 text-right">
          <h4 className="text-sm text-gray-500">Pending</h4>
          <p className="text-xl font-bold text-yellow-500">N6,519</p>
        </div>
      </div>
    </Card>
  );
};

export default Chart;
