import React from "react";
import { Button } from "@/components/common";
import { DataTable, TableData } from "@/components/common/Tables";
import { Edit, Message, Plus, Trash } from "@/components/icons";

const ManageMembersTable = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4">
      <h1 className="font-inter leading-[150%] font-medium text-white">
        Manage members
      </h1>
      <DataTable table={MembersItemData} rowsSpace="12px" />
    </div>
  );
};

export default ManageMembersTable;

const MembersItemData: TableData = {
  id: "members-item",
  type: "members-item",
  title: "members item",
  columns: [
    { header: "User ID", accessorKey: "userId" },
    { header: "Profile", accessorKey: "profile" },
    { header: "price", accessorKey: "price" },
    { header: "", accessorKey: "actions" },
  ],
  rows: [
    {
      id: "player-1",
      type: "members-item",
      cells: {
        userId: { value: 1 },
        profile: {
          value: "Alex Champion",
          profileImage: "/components/mock_user_avatar.png",
        },
        price: { value: "Price: € 7.42" },
        action: { value: "" },
      },
    },
    {
      id: "player-2",
      type: "members-item",
      cells: {
        userId: { value: 1 },
        profile: {
          value: "Alex Champion",
          profileImage: "/components/mock_user_avatar.png",
        },
        price: { value: "Price: € 7.42" },
        actions: {
          value: "",
          render: () => (
            <div className="flex w-full items-center justify-end gap-4">
              <Button
                className="group border-primitives-white_10 bg-primitives-white_10 size-9! min-h-auto! min-w-auto! shrink-0! rounded-full border backdrop-blur-xs"
                icon={<Message size={20} className="[&_path]:stroke-white" />}
              />
              <Button
                className="group border-primitives-white_10 bg-primitives-white_10 size-9! min-h-auto! min-w-auto! shrink-0! rounded-full border backdrop-blur-xs"
                icon={<Trash size={20} className="[&_path]:stroke-white" />}
              />
            </div>
          ),
        },
      },
    },
    {
      id: "player-3",
      type: "members-item",
      cells: {
        userId: { value: 1 },
        profile: {
          value: "Alex Champion",
          profileImage: "/components/mock_user_avatar.png",
        },
        price: { value: "Price: € 7.42" },
        actions: {
          value: "",
          render: () => (
            <div className="flex w-full items-center justify-end gap-4">
              <Button
                className="group border-primitives-white_10 bg-primitives-white_10 size-9! min-h-auto! min-w-auto! shrink-0! rounded-full border backdrop-blur-xs"
                icon={<Plus size={20} className="[&_path]:stroke-white" />}
              />
            </div>
          ),
        },
      },
    },
    {
      id: "player-2",
      type: "members-item",
      cells: {
        userId: { value: 1 },
        profile: {
          value: "Alex Champion",
          profileImage: "/components/mock_user_avatar.png",
        },
        price: { value: "Price: € 7.42" },
        actions: {
          value: "",
          render: () => (
            <div className="flex w-full items-center justify-end gap-4">
              <Button
                className="group border-primitives-white_10 bg-primitives-white_10 size-9! min-h-auto! min-w-auto! shrink-0! rounded-full border backdrop-blur-xs"
                icon={<Edit size={20} className="[&_path]:stroke-white" />}
              />
            </div>
          ),
        },
      },
    },
  ],
};
