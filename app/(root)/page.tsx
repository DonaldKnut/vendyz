"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./_component/store";
import { fetchPosts } from "./_component/postsSlice";
import TransactionsTable from "./_component/TransactionsTable";
import SummaryCard from "./_component/SummaryCard";
import OrdersBox from "./_component/OrdersBox";
import SummaryCardBox from "./_component/SummaryCardBox";
import Chart from "@/components/Chart";

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, status, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  const transactionColumns = [
    { label: "Name", accessor: "name" as const },
    { label: "Reference", accessor: "reference" as const },
    { label: "Amount", accessor: "amount" as const },
    { label: "Type", accessor: "type" as const },
    {
      label: "Action",
      accessor: "id" as const,
      render: (_: string, row: { id: string; name: string }) => (
        <button
          className="text-blue-500 hover:underline"
          onClick={() => alert(`Viewing transaction for ${row.name}`)}
        >
          View
        </button>
      ),
    },
  ];

  const transactionData = [
    {
      id: "1",
      name: "Ebiyo Sango",
      reference: "REF47513887",
      amount: "₦100,000",
      type: "Debit",
    },
    {
      id: "2",
      name: "Bosola Ajayi",
      reference: "REF8927346",
      amount: "₦15,000",
      type: "Credit",
    },
  ];

  const totalSpace = { used: 75, total: 100 };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="grid grid-cols-1 gap-4">
          <SummaryCardBox />
          <SummaryCard
            title="Escrow Balance"
            value="₦210,639.44"
            percentage="-10% last 30 days"
            percentageColor="text-red-500"
          />
          <SummaryCard
            title="Users"
            value="3,008"
            percentage="+3.52% last 30 days"
            percentageColor="text-green-500"
          />
        </div>
        <div className="p-4 bg-white shadow rounded-[18px] col-span-1 lg:col-span-2">
          <Chart used={totalSpace.used} total={totalSpace.total} />
        </div>
        <div className="p-4 bg-gray-50 shadow rounded-md">
          <h3 className="font-semibold text-lg mb-2">Disputes Breakdown</h3>
          <div className="flex items-center gap-2">
            <div className="text-orange-500 w-10 h-10">Pie Chart</div>
            <div>
              <h4 className="text-xl font-bold">₦51,089</h4>
              <p className="text-sm text-gray-500">Pending: ₦6,519</p>
              <p className="text-sm text-gray-500">Resolved: ₦44,570</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        <TransactionsTable
          title="Transaction History"
          columns={transactionColumns}
          data={transactionData}
        />
        <OrdersBox
          orders={[
            {
              id: "1",
              itemName: "Laptop",
              price: "₦150,000",
              store: "Electronics Hub",
              status: "Pending",
            },
            {
              id: "2",
              itemName: "Chair",
              price: "₦25,000",
              store: "Furniture World",
              status: "Resolved",
            },
          ]}
        />
      </section>

      {status === "loading" && <p>Loading posts...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      {status === "succeeded" && (
        <section className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Posts</h2>
          <ul className="bg-white shadow rounded-md p-6 divide-y">
            {posts.map((post) => (
              <li key={post.id} className="py-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-gray-700">{post.body}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
