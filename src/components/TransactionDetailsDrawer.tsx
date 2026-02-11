import {
    Box,
    Chip,
    Divider,
    Drawer,
    Stack,
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
  
  export default function TransactionDetailsDrawer({
    open,
    onClose,
    tx,
  }: {
    open: boolean;
    onClose: () => void;
    tx: Transaction | null;
  }) {
    return (
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box sx={{ width: { xs: 320, sm: 380 }, p: 3 }}>
          <Typography variant="h6" fontWeight={900}>
            Transaction details
          </Typography>
          <Typography sx={{ opacity: 0.7, mb: 2 }}>
            Click outside to close
          </Typography>
  
          {!tx ? (
            <Typography sx={{ opacity: 0.7 }}>No transaction selected.</Typography>
          ) : (
            <Stack spacing={1.5}>
              <Divider />
  
              <Stack spacing={0.5}>
                <Typography variant="overline">Merchant</Typography>
                <Typography fontWeight={800}>{tx.merchant}</Typography>
              </Stack>
  
              <Stack spacing={0.5}>
                <Typography variant="overline">Description</Typography>
                <Typography>{tx.description}</Typography>
              </Stack>
  
              <Stack spacing={0.5}>
                <Typography variant="overline">Date</Typography>
                <Typography>{formatDate(tx.date)}</Typography>
              </Stack>
  
              <Stack spacing={0.5}>
                <Typography variant="overline">Amount</Typography>
                <Typography fontWeight={900}>{formatMoney(tx.amount)}</Typography>
              </Stack>
  
              <Stack spacing={0.5}>
                <Typography variant="overline">Status</Typography>
                <StatusChip status={tx.status} />
              </Stack>
  
              <Stack spacing={0.5}>
                <Typography variant="overline">Transaction ID</Typography>
                <Typography sx={{ fontFamily: "monospace", fontSize: 13 }}>
                  {tx.id}
                </Typography>
              </Stack>
            </Stack>
          )}
        </Box>
      </Drawer>
    );
  }
  