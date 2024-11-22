"use client";
import React from "react";
import { Settings, Bell } from "lucide-react";

const Header = ({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <div className="flex items-center gap-4">
        {/* Settings Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 border-2 border-blue-500 cursor-pointer hover:scale-105 transition-transform">
          <Settings className="text-blue-500 w-6 h-6" />
        </div>

        {/* Notification Icon with Badge */}
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 border-2 border-blue-500 cursor-pointer hover:scale-105 transition-transform">
          <Bell className="text-blue-500 w-6 h-6" />
          {/* Red Notification Dot */}
          <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-red-500 border-2 bg-[#ff0000]"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
