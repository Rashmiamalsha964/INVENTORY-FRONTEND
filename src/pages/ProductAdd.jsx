import { useState } from "react";
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

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProductAdd() {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    qty: "",
    category: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const clearForm = () => {
    setProduct({
      name: "",
      price: "",
      qty: "",
      category: ""
    });
  };

  const saveProduct = () => {
    console.log(product);
    alert("Product Added Successfully");
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

      {/* Navbar */}
      <Navbar />

      {/* Center Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >

        <Card
  sx={{
    width: 420,
    borderRadius: 4,
    boxShadow: 10
  }}
>
  <CardContent sx={{ p: 2 }}> {/* reduced padding */}
    
    {/* Logo */}
    <Box textAlign="center" mb={1}> {/* reduced margin-bottom */}
      <Inventory2OutlinedIcon
        sx={{ fontSize: 35, color: "#4b6cb7" }} // smaller icon
      />

      <Typography
        variant="h5"
        fontWeight="bold"
        color="#4b6cb7"
      >
        Dilan Traders
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Add Product Form
      </Typography>
    </Box>

    {/* Product Name */}
    <TextField
      fullWidth
      label="Product Name"
      name="name"
      margin="dense" // smaller spacing
      value={product.name}
      onChange={handleChange}
    />

    {/* Price */}
    <TextField
      fullWidth
      label="Price"
      name="price"
      type="number"
      margin="dense"
      value={product.price}
      onChange={handleChange}
    />

    {/* Quantity */}
    <TextField
      fullWidth
      label="Quantity"
      name="qty"
      type="number"
      margin="dense"
      value={product.qty}
      onChange={handleChange}
    />

    {/* Category */}
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

    {/* Buttons */}
    <Box display="flex" gap={2} mt={2}> {/* reduced mt */}
      <Button fullWidth variant="outlined" size="small" onClick={clearForm}>
        Clear
      </Button>
      <Button
        fullWidth
        size="small"
        sx={{
          background: "linear-gradient(90deg, #4b6cb7, #182848)",
          color: "#fff",
          fontWeight: "bold",
          "&:hover": {
            background: "linear-gradient(90deg, #182848, #4b6cb7)"
          }
        }}
        onClick={saveProduct}
      >
        Save
      </Button>
    </Box>

  </CardContent>
</Card>


      </Box>

      {/* Footer */}
      <Footer />

    </Box>
  );
}
