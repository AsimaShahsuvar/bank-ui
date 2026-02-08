export type TransactionStatus = "completed" | "pending" | "failed";

export type Transaction = {
  id: string;
  date: string; // ISO string
  description: string;
  merchant: string;
  amount: number; // + income, - spend
  currency: "AZN";
  status: TransactionStatus;
};

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "t_001",
    date: "2026-02-06T10:15:00.000Z",
    description: "Card payment",
    merchant: "Bravo Market",
    amount: -24.5,
    currency: "AZN",
    status: "completed",
  },
  {
    id: "t_002",
    date: "2026-02-05T18:40:00.000Z",
    description: "Transfer received",
    merchant: "Salary",
    amount: 3120,
    currency: "AZN",
    status: "completed",
  },
  {
    id: "t_003",
    date: "2026-02-05T12:10:00.000Z",
    description: "Online subscription",
    merchant: "Netflix",
    amount: -15.99,
    currency: "AZN",
    status: "completed",
  },
  {
    id: "t_004",
    date: "2026-02-04T09:20:00.000Z",
    description: "Utility bill",
    merchant: "Azəriqaz",
    amount: -38.2,
    currency: "AZN",
    status: "pending",
  },
  {
    id: "t_005",
    date: "2026-02-03T21:05:00.000Z",
    description: "ATM cash withdrawal",
    merchant: "Kapital ATM",
    amount: -100,
    currency: "AZN",
    status: "completed",
  },
  {
    id: "t_006",
    date: "2026-02-02T16:30:00.000Z",
    description: "Card payment",
    merchant: "Bolt",
    amount: -12.8,
    currency: "AZN",
    status: "failed",
  },
];

export async function getTransactions(): Promise<Transaction[]> {
  // mock latency
  await sleep(250);
  return MOCK_TRANSACTIONS;
}
