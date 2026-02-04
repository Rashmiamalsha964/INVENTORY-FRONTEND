import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#f1f1f1",
        textAlign: "center",
        py: 2,
        mt: "auto"
      }}
    >
      <Typography variant="body2">
        © 2026 Dilan Traders. All rights reserved.
      </Typography>
    </Box>
  );
}
