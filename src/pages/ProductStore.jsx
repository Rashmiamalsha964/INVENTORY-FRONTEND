import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/ProductService";





export default function ProductStorePage() {

  const navigate = useNavigate();

 const [rows, setRows] = useState([]);


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
        width: 180,
        sortable: false,
        renderCell: (params) => (
          <Box display="flex" gap={1}>
            {/* Edit Button */}
        <Button
  size="small"
  variant="contained"
  onClick={() =>
    navigate("/edit-product", { state: { ...params.row, _id: params.row._id } })
  }
>
  Edit
</Button>

      {/* Delete Button */}
      <Button
        size="small"
        variant="contained"
        color="error"
        sx={{ textTransform: "none" }}
        onClick={() => handleDelete(params.row.id)}
      >
        Delete
      </Button>
    </Box>
  ),
}

  ];

 useEffect(() => {
  loadProducts();
}, []);

const loadProducts = async () => {
  try {
    const data = await getProducts();

    const formatted = data.map((p) => ({
      id: p._id,     // important for DataGrid
      name: p.name,
      price: p.price,
      category: p.category,
      qty: p.qty,
    }));

    setRows(formatted);
  } catch (error) {
    console.error(error);
  }
};

const handleDelete = async (id) => {
  if (window.confirm("Delete this product?")) {
    await deleteProduct(id);
    loadProducts();
  }
};






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
