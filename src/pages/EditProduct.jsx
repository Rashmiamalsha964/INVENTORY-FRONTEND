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

export default function EditProduct() {

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
      setProduct(location.state);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const updateProduct = () => {
    console.log("Updated Product:", product);
    alert("Product Updated Successfully");
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
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
              <Button fullWidth variant="outlined">
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
