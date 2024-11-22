import React from "react";

interface Column<T> {
  label: string; // Display label for the column header
  accessor: keyof T; // Key to access the field in the data
  render?: (value: T[keyof T], row: T) => React.ReactNode; // Custom render function
}

interface TransactionsTableProps<T> {
  title: string;
  columns: Column<T>[]; // Array of column definitions
  data: T[]; // Array of transaction objects
}

const TransactionsTable = <T,>({
  title,
  columns,
  data,
}: TransactionsTableProps<T>): JSX.Element => {
  return (
    <div className="bg-white shadow rounded-md">
      <h3 className="font-semibold text-xl mb-4 p-4">{title}</h3>
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.label}
                className="p-4 text-sm font-medium text-gray-500"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`hover:bg-gray-50 ${
                rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              {columns.map((col) => (
                <td key={col.label} className="p-4">
                  {col.render
                    ? col.render(row[col.accessor], row)
                    : row[col.accessor]?.toString()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
