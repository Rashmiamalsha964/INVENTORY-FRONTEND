import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ background: "#ffffff", color: "#000" }}>
      <Toolbar>

        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#4b6cb7" }}
        >
          Dilan Traders
        </Typography>

        {/* Menu */}
        <Box sx={{ display: "flex", gap: 3, mr: 3 }}>
          <Button color="inherit" onClick={() => navigate("/store")}>
            Product Store
          </Button>

          <Button color="inherit" onClick={() => navigate("/add")}>
            Add Item
          </Button>

          <Button color="inherit" onClick={() => navigate("/billing")}>
            Billing Page
          </Button>
        </Box>

        {/* Logout Button */}
        <Button
          variant="contained"
          sx={{
            background: "#4b6cb7",
            "&:hover": { background: "#182848" }
          }}
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
          }}
        >
          Logout
        </Button>

      </Toolbar>
    </AppBar>
  );
}
