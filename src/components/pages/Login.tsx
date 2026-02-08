import { Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../auth/auth";
import { useLocation } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from ?? "/app/dashboard";


  return (
    <Stack spacing={2}>
      <Typography variant="h5" fontWeight={800}>
        Sign in
      </Typography>
      <Typography sx={{ opacity: 0.75 }}>
        Demo login (müsahibə üçün).
      </Typography>

      <TextField label="Email" type="email" fullWidth />
      <TextField label="Password" type="password" fullWidth />

      <Button variant="contained" size="large" onClick={() => {
  signIn();
  navigate(from);
}}
>
        Continue
      </Button>
    </Stack>
  );
}
