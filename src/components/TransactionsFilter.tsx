import { Box, MenuItem, TextField } from "@mui/material";

type Props = {
  search: string;
  status: string;
  onSearchChange: (v: string) => void;
  onStatusChange: (v: string) => void;
};

export default function TransactionsFilter({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 2,
        flexWrap: "wrap",
      }}
    >
      <TextField
        label="Search"
        placeholder="Merchant or description"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        size="small"
        sx={{ minWidth: 240 }}
      />

      <TextField
        select
        label="Status"
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        size="small"
        sx={{ minWidth: 180 }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="completed">Completed</MenuItem>
        <MenuItem value="pending">Pending</MenuItem>
        <MenuItem value="failed">Failed</MenuItem>
      </TextField>
    </Box>
  );
}
