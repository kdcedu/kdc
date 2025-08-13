export type Transaction = {
  id: string;             // Mã giao dịch (duy nhất)
  type: 'send' | 'receive'; // Gửi hoặc Nhận
  targetName: string;           // Người gửi hoặc người nhận (tùy type)
  amount: number;         // Số tiền (VNĐ)
  timestamp: string;      // ISO date string
};
export const transactions: Transaction[] = [
  {
    id: "txn_001",
    type: "send",
    targetName: "Nguyễn Văn A",
    amount: 50000,
    timestamp: "2025-08-08T08:30:00Z",
  },
  {
    id: "txn_002",
    type: "receive",
    targetName: "Trần Thị B",
    amount: 150000,
    timestamp: "2025-08-08T09:45:00Z",
  },
  {
    id: "txn_003",
    type: "send",
    targetName: "Lê Văn C",
    amount: 20000,
    timestamp: "2025-08-07T15:20:00Z",
  },
  {
    id: "txn_004",
    type: "receive",
    targetName: "Phạm Thị D",
    amount: 100000,
    timestamp: "2025-08-06T20:00:00Z",
  },
  {
    id: "txn_005",
    type: "send",
    targetName: "Đỗ Mạnh E",
    amount: 75000,
    timestamp: "2025-08-05T13:12:00Z",
  },
  {
    id: "txn_006",
    type: "receive",
    targetName: "Hoàng Hà F",
    amount: 120000,
    timestamp: "2025-08-04T11:35:00Z",
  },
  {
    id: "txn_007",
    type: "send",
    targetName: "Nguyễn Thị G",
    amount: 30000,
    timestamp: "2025-08-03T16:18:00Z",
  },
  {
    id: "txn_008",
    type: "receive",
    targetName: "Bùi Văn H",
    amount: 95000,
    timestamp: "2025-08-02T19:00:00Z",
  },
  {
    id: "txn_009",
    type: "send",
    targetName: "Trần Thị I",
    amount: 60000,
    timestamp: "2025-08-01T10:45:00Z",
  },
  {
    id: "txn_010",
    type: "receive",
    targetName: "Ngô Văn K",
    amount: 25000,
    timestamp: "2025-07-31T21:20:00Z",
  }
];
