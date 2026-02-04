import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin" && password === "123") {
      localStorage.setItem("user", email);
      navigate("/store");
    } else {
      alert("Invalid Login");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #4b6cb7, #182848)"
      }}
    >
      <Card
        sx={{
          width: 380,
          borderRadius: 4,
          boxShadow: 10
        }}
      >
        <CardContent sx={{ p: 4 }}>

          {/* Logo */}
          <Box textAlign="center" mb={2}>
            <LockOutlinedIcon
              sx={{
                fontSize: 50,
                color: "#4b6cb7"
              }}
            />

            <Typography
              variant="h5"
              fontWeight="bold"
              color="#4b6cb7"
            >
              Dilan Traders
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Inventory Management System
            </Typography>
          </Box>

          {/* Title */}
          <Typography
            variant="h6"
            textAlign="center"
            mb={3}
          >
            Log In
          </Typography>

          {/* Email */}
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Button */}
          <Button
            fullWidth
            sx={{
              mt: 3,
              py: 1.2,
              background:
                "linear-gradient(90deg, #4b6cb7, #182848)",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: 2,
              "&:hover": {
                background:
                  "linear-gradient(90deg, #182848, #4b6cb7)"
              }
            }}
            onClick={handleLogin}
          >
            Log In
          </Button>

        </CardContent>
      </Card>
    </Box>
  );
}
