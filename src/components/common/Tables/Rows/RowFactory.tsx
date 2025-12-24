import { RowData, ColumnConfig } from "../types";
import { LeaderboardRow } from "./LeaderboardRow";
import { PaymentHistoryRow } from "./PaymentHistoryRow";
import { DrawsItemRow } from "./DrawsItemRow";
import { RewardRow } from "./RewardRow";
import { MembersItemRow } from "./MembersItemRow";
import { CompletedHistoryItemRow } from "./CompletedHistoryItemRow";
import { RewardsRow } from "./RewardsRow";

interface RowFactoryProps {
  rowData: RowData;
  columns: ColumnConfig[];
}

export function RowFactory({ rowData, columns }: RowFactoryProps) {
  switch (rowData.type) {
    case "leaderboard":
      return <LeaderboardRow rowData={rowData} columns={columns} />;
    case "payment-history":
      return <PaymentHistoryRow rowData={rowData} columns={columns} />;
    case "draws-item":
      return <DrawsItemRow rowData={rowData} columns={columns} />;
    case "reward":
      return <RewardRow rowData={rowData} columns={columns} />;
    case "members-item":
      return <MembersItemRow rowData={rowData} columns={columns} />;
    case "completed-history-item":
      return <CompletedHistoryItemRow rowData={rowData} columns={columns} />;
    case "rewards":
      return <RewardsRow rowData={rowData} columns={columns} />;
    default:
      return <PaymentHistoryRow rowData={rowData} columns={columns} />;
  }
}
