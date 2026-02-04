import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProductStorePage() {

  // Rows without action field
  const rows = [
    { id: 1, name: "Plastic Chair", price: 14, category: "Plastic", qty: 50 },
    { id: 2, name: "Electric Fan", price: 20, category: "Electrical", qty: 10 },
    { id: 3, name: "Glass Bottle", price: 5, category: "Glass Product", qty: 100 },
    { id: 4, name: "Plastic Table", price: 30, category: "Plastic", qty: 5 },
    { id: 5, name: "LED Bulb", price: 8, category: "Electrical", qty: 200 },
  ];

  // Columns
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Product Name", flex: 1, minWidth: 150 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "category", headerName: "Category", flex: 1, minWidth: 120 },
    { field: "qty", headerName: "Quantity", width: 100 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
      renderCell: () => (
        <Button
          size="small"
          sx={{
            background: "linear-gradient(90deg, #4b6cb7, #182848)",
            color: "#fff",
            textTransform: "none",
            "&:hover": {
              background: "linear-gradient(90deg, #182848, #4b6cb7)",
            },
          }}
        >
          Edit/Delete
        </Button>
      ),
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #4b6cb7, #182848)",
      }}
    >
      <Navbar />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          py: 6,
        }}
      >
        <Card sx={{ width: "90%", maxWidth: 900, borderRadius: 4, boxShadow: 10 }}>
          <CardContent sx={{ p: 3 }}>
            <Box textAlign="center" mb={2}>
              <Typography variant="h5" fontWeight="bold" color="#4b6cb7">
                Dilan Traders
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Product Store Table
              </Typography>
            </Box>

            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[5, 10]}
                initialState={{
                  pagination: { paginationModel: { pageSize: 5, page: 0 } },
                }}
                disableRowSelectionOnClick
                sx={{
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#f5f5f5",
                    fontWeight: "bold",
                  },
                  "& .MuiDataGrid-row:nth-of-type(even)": {
                    backgroundColor: "#f9f9f9",
                  },
                  "& .MuiDataGrid-cell": {
                    outline: "none !important",
                  },
                  "& .MuiDataGrid-footerContainer": {
                    justifyContent: "center",
                  },
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Footer />
    </Box>
  );
}
