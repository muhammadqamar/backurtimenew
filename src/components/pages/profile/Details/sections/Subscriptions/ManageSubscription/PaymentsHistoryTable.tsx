import React from "react";
import { DataTable, TableData } from "@/components/common/Tables";
import SvgWallet from "@/components/icons/Wallet";
import { FilterChips } from "@/components/common";
import EmptyState from "../components/EmptyState";

const PaymentsHistoryTable = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4">
      <div className="grid w-full grid-cols-2 items-center gap-1">
        <h1 className="font-inter text-sm leading-[150%] font-medium text-white sm:text-base">
          Payments history
        </h1>
        <div className="ml-auto">
          <FilterChips text="All time" dropdown />
        </div>
      </div>
      {true ? (
        <div className="no-scrollbar overflow-x-auto">
          <div className="border-primitives-white_20 bg-primitives-white_5 w-full min-w-[653px] rounded-3xl border p-4 sm:p-5">
            <DataTable className="" table={paymentHistoryData} isTableHeader />
          </div>
        </div>
      ) : (
        <EmptyState
          className="flex-row! [&>div>p]:text-white! [&>img]:size-[72px]!"
          text="No transactions yet"
        />
      )}
    </div>
  );
};

export default PaymentsHistoryTable;

const paymentHistoryData: TableData = {
  id: "payment-history",
  type: "payment-history",
  title: "Payments history",
  columns: [
    { header: "Name", accessorKey: "name", align: "center" },
    { header: "Email", accessorKey: "email" },
    { header: "Method", accessorKey: "method" },
    { header: "Amount", accessorKey: "amount" },
    { header: "Date", accessorKey: "date" },
  ],
  rows: [
    {
      id: "player-1",
      type: "payment-history",
      cells: {
        name: { value: "name" },
        email: { value: "Alex Champion" },
        method: { value: "Time balance", icon: <SvgWallet size={20} /> },
        amount: { value: "name 2" },
        date: { value: "name 4" },
      },
    },
  ],
};
