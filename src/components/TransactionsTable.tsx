import {
    Chip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  import type { Transaction } from "../api/client";
  
  function formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  
  function formatMoney(amount: number) {
    const sign = amount < 0 ? "-" : "+";
    const abs = Math.abs(amount);
    return `${sign} ₼ ${abs.toFixed(2)}`;
  }
  
  function StatusChip({ status }: { status: Transaction["status"] }) {
    if (status === "completed") return <Chip label="Completed" size="small" />;
    if (status === "pending") return <Chip label="Pending" size="small" variant="outlined" />;
    return <Chip label="Failed" size="small" variant="outlined" />;
  }
  
  export default function TransactionsTable({ rows }: { rows: Transaction[] }) {
    return (
      <Paper sx={{ p: 2, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
          Recent transactions
        </Typography>
  
        <TableContainer>
          <Table size="small" aria-label="transactions table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Merchant</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
  
            <TableBody>
              {rows.map((t) => (
                <TableRow key={t.id} hover>
                  <TableCell>{formatDate(t.date)}</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>{t.merchant}</TableCell>
                  <TableCell>{t.description}</TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontWeight: 800, opacity: 0.9 }}
                  >
                    {formatMoney(t.amount)}
                  </TableCell>
                  <TableCell>
                    <StatusChip status={t.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
  