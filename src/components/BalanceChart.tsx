import { Paper, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import type { Transaction } from "../api/client";

type Point = { day: string; balance: number };

function toDayLabel(d: Date) {
  return d.toLocaleDateString(undefined, { month: "short", day: "2-digit" });
}

function startOfDay(d: Date) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

export default function BalanceChart({ rows }: { rows: Transaction[] }) {
  // last 7 days points
  const today = startOfDay(new Date());
  const days: Date[] = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    return d;
  });

  // calculate cumulative balance over time (demo logic)
  const sorted = [...rows].sort((a, b) => +new Date(a.date) - +new Date(b.date));

  const data: Point[] = [];
  for (const d of days) {
    const end = new Date(d);
    end.setHours(23, 59, 59, 999);

    const sum = sorted
      .filter((t) => new Date(t.date) <= end)
      .reduce((acc, t) => acc + t.amount, 0);

    data.push({ day: toDayLabel(d), balance: Number(sum.toFixed(2)) });
  }

  return (
    <Paper sx={{ p: 2, borderRadius: 3 }}>
      <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
        Balance trend (7 days)
      </Typography>

      <div style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="balance" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
}
