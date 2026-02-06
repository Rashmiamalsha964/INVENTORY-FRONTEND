import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem
} from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { updateProduct as updateProductAPI } from "../services/ProductService";
import { useNavigate } from "react-router-dom";


export default function EditProduct() {

  const navigate = useNavigate();


  const location = useLocation();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    qty: "",
    category: ""
  });

  // Load selected row data
  useEffect(() => {
  if (location.state) {
    const row = location.state;
    setProduct({
      ...row,
      _id: row._id || row.id, // fallback if _id missing
      price: Number(row.price),
      qty: Number(row.qty)
    });
  }
}, [location.state]);

  const updateProduct = async () => {
  try {
    // Remove DataGrid `id` before sending
    const { id, ...payload } = product;

    await updateProductAPI(product._id, payload);

    alert("Product Updated Successfully");
    navigate("/store");
  } catch (err) {
    console.error("Error updating product:", err.response ? err.response.data : err);
    alert("Failed to update product");
  }
};

const handleChange = (e) => {
  const { name, value } = e.target;

  setProduct({
    ...product,
    // Convert price and qty to numbers
    [name]: name === "price" || name === "qty" ? Number(value) : value,
  });
};


  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #4b6cb7, #182848)"
      }}
    >

      <Navbar />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >

        <Card sx={{ width: 420, borderRadius: 4, boxShadow: 10 }}>
          <CardContent sx={{ p: 2 }}>

            <Box textAlign="center" mb={1}>
              <Inventory2OutlinedIcon sx={{ fontSize: 35, color: "#4b6cb7" }} />
              <Typography variant="h5" fontWeight="bold" color="#4b6cb7">
                Dilan Traders
              </Typography>
              <Typography variant="body2">
                Edit Product
              </Typography>
            </Box>

            <TextField
              fullWidth
              label="Product Name"
              name="name"
              margin="dense"
              value={product.name}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Price"
              name="price"
              type="number"
              margin="dense"
              value={product.price}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Quantity"
              name="qty"
              type="number"
              margin="dense"
              value={product.qty}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              select
              label="Category"
              name="category"
              margin="dense"
              value={product.category}
              onChange={handleChange}
            >
              <MenuItem value="Plastic">Plastic</MenuItem>
              <MenuItem value="Electrical">Electrical</MenuItem>
              <MenuItem value="Glass Product">Glass Product</MenuItem>
            </TextField>

            <Box display="flex" gap={2} mt={2}>
             <Button fullWidth variant="outlined" onClick={() => navigate("/store")}>
              Cancel
            </Button>

              <Button
                fullWidth
                sx={{
                  background: "linear-gradient(90deg, #4b6cb7, #182848)",
                  color: "#fff",
                  fontWeight: "bold"
                }}
                onClick={updateProduct}
              >
                Update Product
              </Button>
            </Box>

          </CardContent>
        </Card>

      </Box>

      <Footer />

    </Box>
  );
}
