import React from "react";
import DataTable from "react-data-table-component";
import { HiChevronDown } from "react-icons/hi";

// Example transaction data
const transactions = [
  {
    id: 1,
    transaction: "Bank Transfer",
    date: "2025-11-01",
    amount: "$200",
    status: "Completed",
    bank: "Bank of America",
    bankLogo: "https://logo.clearbit.com/bankofamerica.com",
  },
  {
    id: 2,
    transaction: "Paypal Account",
    date: "2025-11-03",
    amount: "$50",
    status: "Pending",
    bank: "Chase",
    bankLogo: "https://logo.clearbit.com/chase.com",
  },
  {
    id: 3,
    transaction: "Bank Transfer",
    date: "2025-11-05",
    amount: "$100",
    status: "Failed",
    bank: "Wells Fargo",
    bankLogo: "https://logo.clearbit.com/wellsfargo.com",
  },
    {
    id: 4,
    transaction: "Bank Transfer",
    date: "2025-11-05",
    amount: "$100",
    status: "Failed",
    bank: "Wells Fargo",
    bankLogo: "https://logo.clearbit.com/wellsfargo.com",
    },
  {
    id: 5,
    transaction: "Paypal Account",
    date: "2025-11-03",
    amount: "$50",
    status: "Pending",
    bank: "Chase",
    bankLogo: "https://logo.clearbit.com/chase.com",
  },
];

// Table columns
const columns = [
  {
    name: "Transaction",
    selector: row => row.transaction,
    cell: row => (
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-[#F6F7F9] flex justify-center items-center">
          <img src={row.bankLogo} alt={row.transaction} className="w-6 h-6 rounded-full" />
        </div>
        <span className="text-sm font-semibold text-[#1A202C]">{row.transaction}</span>
      </div>
    )
  },
  {
    name: (
      <div className="flex items-center gap-1 text-sm font-semibold text-[#1A202C]">
        Date <HiChevronDown size={16} className="text-gray-400" />
      </div>
    ),
    selector: row => row.date,
    sortable: true
  },
  {
    name: (
      <div className="flex items-center gap-1 text-sm font-semibold text-[#1A202C]">
        Amount <HiChevronDown size={16} className="text-gray-400" />
      </div>
    ),
    selector: row => row.amount,
    sortable: true
  },
  {
    name: (
      <div className="flex items-center gap-1 text-sm font-semibold text-[#1A202C]">
        Status <HiChevronDown size={16} className="text-gray-400" />
      </div>
    ),
    selector: row => row.status,
    sortable: true,
    cell: row => (
      <span className={`px-2 py-1 rounded-full text-white text-sm ${
        row.status === "Completed" ? "bg-green-500" :
        row.status === "Pending" ? "bg-yellow-500" :
        "bg-red-500"
      }`}>
        {row.status}
      </span>
    )
  },
];

// Custom Styles
const customStyles = {
  header: {
    style: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#1A202C",
      padding: "16px",
    }
  },
  headCells: {
    style: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#90A3BF",
      paddingLeft: "16px",
      paddingRight: "16px",
    }
  },
  cells: {
    style: {
      fontSize: "14px",
      color: "#1A202C",
      fontWeight: "600",
      paddingLeft: "16px",
      paddingRight: "16px",
    }
  },
  pagination: {
    style: {
      fontSize: "14px",
      color: "#1A202C"
    }
  }
};

const TransactionsTable = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <DataTable
        title="Transaction History"
        columns={columns}
        data={transactions}
        pagination
        responsive
        highlightOnHover
        sortIcon={null}
        customStyles={customStyles}
      />
    </div>
  );
};

export default TransactionsTable;
