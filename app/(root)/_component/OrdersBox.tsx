// Import React and other dependencies
import { Button } from "@/components/ui/button";
import React from "react";

// Define the OrdersBox component
const OrdersBox = ({
  orders,
}: {
  orders: {
    id: string;
    itemName: string;
    price: string;
    store: string;
    status: string;
  }[];
}) => {
  return (
    <div className="bg-white shadow rounded-[18px] p-6">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xl mb-6">Orders</h3>
        <div>
          <button className="bg-[#fff] p-4 rounded-[14px]"></button>
        </div>
      </div>
      <hr />
      <div className="divide-y">
        {orders.map((order) => (
          <div
            key={order.id}
            className="py-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-150"
          >
            {/* Left section for item and store information */}
            <div className="flex flex-col">
              <p className="font-medium text-gray-800">{order.itemName}</p>
              <p className="text-sm text-gray-500">{order.store}</p>
            </div>

            {/* Right section for price and status */}
            <div className="text-right">
              <p className="font-medium text-gray-800">{order.price}</p>
              <p
                className={`text-sm font-semibold ${
                  order.status === "Pending"
                    ? "text-gray-700"
                    : order.status === "Resolved"
                      ? "text-green-500"
                      : "text-gray-500"
                }`}
              >
                {order.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Define sample orders data
const sampleOrders = [
  {
    id: "1",
    itemName: "Mainstay 12-Inch 3-Speed Table Fan",
    price: "₦200,000.00",
    store: "Mobi Gadgets",
    status: "Pending",
  },
  {
    id: "2",
    itemName: "Generic 2pcs Easy 16-Piece Dinnerware Set",
    price: "₦86,000.00",
    store: "Fervent Stores",
    status: "Pending",
  },
  {
    id: "3",
    itemName: "2000 Watt Hair Dryer",
    price: "₦18,000.00",
    store: "Rock Hairs",
    status: "Pending",
  },
  {
    id: "4",
    itemName: "iPhone 15 Pro Max 512GB",
    price: "₦2,250,000.00",
    store: "Rock Phones",
    status: "Pending",
  },
];

// Define the Dashboard component

export default OrdersBox;
