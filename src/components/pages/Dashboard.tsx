import { useEffect, useMemo, useState } from "react";
import { Grid, Skeleton, Typography } from "@mui/material";
import TransactionsTable from "../../components/TransactionsTable";
import { getTransactions, type Transaction } from "../../api/client";
import { Card, CardContent } from "@mui/material";
import Bank3DCard from "../../components/Bank3DCard";



export default function Dashboard() {
  const [rows, setRows] = useState<Transaction[] | null>(null);

  useEffect(() => {
    let alive = true;
    getTransactions().then((data) => {
      if (alive) setRows(data);
    });
    return () => {
      alive = false;
    };
  }, []);

  const totalBalance = useMemo(() => {
    // demo: balance calculation from mock (not real banking logic)
    if (!rows) return 0;
    return rows.reduce((acc, t) => acc + t.amount, 0);
  }, [rows]);

  return (
    <>
      <Typography variant="h4" fontWeight={900}>
        Dashboard
      </Typography>
      <Typography sx={{ mt: 1, opacity: 0.8 }}>
        Overview of your account activity.
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="overline">Calculated Balance (demo)</Typography>
              {rows ? (
                <Typography variant="h5" fontWeight={900}>
                  ₼ {totalBalance.toFixed(2)}
                </Typography>
              ) : (
                <Skeleton height={36} />
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid  size={{ xs: 12, md: 4 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="overline">Income (demo)</Typography>
              <Typography variant="h5" fontWeight={900}>
                ₼ 3,120.00
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid  size={{ xs: 12, md: 4 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="overline">Spend (demo)</Typography>
              <Typography variant="h5" fontWeight={900}>
                ₼ 1,740.90
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid  size={{ xs: 12 }}>
          <Typography variant="h6" fontWeight={800} sx={{ mt: 1 }}>
            Activity
          </Typography>
        </Grid>

        <Grid  size={{ xs: 12, md: 5 }}>
  <Bank3DCard />
</Grid>

<Grid  size={{ xs: 12, md: 7 }}>
  {rows ? <TransactionsTable rows={rows} /> : <Skeleton height={240} />}
</Grid>

      </Grid>
    </>
  );
}
