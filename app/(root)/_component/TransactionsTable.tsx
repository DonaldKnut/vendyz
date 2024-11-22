import React from "react";

interface ColumnDefinition<T> {
  label: string;
  accessor: keyof T;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface TransactionsTableProps<T> {
  title: string;
  columns: ColumnDefinition<T>[];
  data: T[];
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
            {columns.map((column) => (
              <th
                key={column.label}
                className="p-4 text-sm font-medium text-gray-500"
              >
                {column.label}
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
              {columns.map((column) => (
                <td key={column.label} className="p-4">
                  {column.render
                    ? column.render(row[column.accessor], row)
                    : row[column.accessor]?.toString()}
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
