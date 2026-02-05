import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  Container
} from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Autocomplete } from "@mui/material";

const productDatabase = [
  { id: 1, name: "Plastic Chair", price: 1400, stock: 50 },
  { id: 2, name: "Electric Fan", price: 5000, stock: 10 },
  { id: 3, name: "Glass Bottle", price: 500, stock: 100 },
  { id: 4, name: "LED Bulb", price: 850, stock: 200 },
];

export default function BillingPage() {
  const [selectedProductId, setSelectedProductId] = useState("");
  const [formData, setFormData] = useState({ price: "", stock: "", qty: "" });
  const [billItems, setBillItems] = useState([]);
  const [discount, setDiscount] = useState(0);

  const handleProductChange = (e) => {
    const pId = e.target.value;
    setSelectedProductId(pId);
    const product = productDatabase.find((p) => p.id === pId);
    if (product) {
      setFormData({ price: product.price, stock: product.stock, qty: 1 });
    }
  };

  const addToBill = () => {
    const product = productDatabase.find((p) => p.id === selectedProductId);
    if (product && formData.qty > 0) {
      setBillItems([...billItems, {
        id: Date.now(),
        name: product.name,
        price: product.price,
        qty: formData.qty,
        total: product.price * formData.qty,
      }]);
      setSelectedProductId("");
      setFormData({ price: "", stock: "", qty: "" });
    }
  };

  const totalAmount = billItems.reduce((acc, item) => acc + item.total, 0);
  const discountAmount = (totalAmount * discount) / 100;
  const grandTotal = totalAmount - discountAmount;

  return (
    <Box sx={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      background: "linear-gradient(135deg, #4b6cb7, #182848)" 
    }}>
      <Navbar />

      {/* Use Container with maxWidth={false} to allow side-by-side on wide screens */}
      <Container maxWidth={false} sx={{ py: 4, flex: 1 }}>
        <Grid 
          container 
          spacing={3} 
          alignItems="stretch" // Forces both cards to be the same height
          sx={{ height: '100%' }}
        >
          
          {/* LEFT: Add Product Form */}
        <Grid item xs={12} md={4} lg={3}>
  <Card sx={{ borderRadius: 4, boxShadow: 10, height: "100%" }}>
    <CardContent sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" color="#4b6cb7" gutterBottom>
        Add Product to Bill
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Box display="flex" flexDirection="column" gap={2}>
        <Autocomplete
          options={productDatabase}
          getOptionLabel={(option) => option.name}
          value={productDatabase.find(p => p.id === selectedProductId) || null}
          onChange={(event, newValue) => {
            if (newValue) {
              setSelectedProductId(newValue.id);
              setFormData({ price: newValue.price, stock: newValue.stock, qty: 1 });
            } else {
              setSelectedProductId("");
              setFormData({ price: "", stock: "", qty: "" });
            }
          }}
          renderInput={(params) => (
            <TextField {...params} label="Search Product" size="small" fullWidth />
          )}
        />
        <TextField label="Price" size="small" fullWidth value={formData.price} InputProps={{ readOnly: true }} variant="filled" />
        <TextField label="Stock" size="small" fullWidth value={formData.stock} InputProps={{ readOnly: true }} variant="filled" />
        <TextField label="Quantity" type="number" size="small" fullWidth value={formData.qty} onChange={(e) => setFormData({ ...formData, qty: e.target.value })} />

        <Box display="flex" gap={2} mt={2}>
          <Button variant="outlined" color="error" fullWidth>Cancel</Button>
          <Button fullWidth variant="contained" onClick={addToBill} sx={{ background: "linear-gradient(90deg, #4b6cb7, #182848)" }}>
            Add to Bill
          </Button>
        </Box>
      </Box>
    </CardContent>
  </Card>
</Grid>

          {/* RIGHT: Bill Table */}
          <Grid item xs={12} md={8} lg={15}>
             <Card sx={{ borderRadius: 4, boxShadow: 10, height: "100%", display: "flex", flexDirection: "column" }}>
    <CardContent sx={{ p: 2, flex: 1 }}>
      <Typography variant="h6" fontWeight="bold" color="#4b6cb7" gutterBottom>
        Product Bill
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <TableContainer sx={{ maxHeight: 400, width: '100%' }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
             <TableCell sx={{ fontWeight: "bold", minWidth: 200 }}>Product</TableCell>
                <TableCell sx={{ fontWeight: "bold", minWidth: 180 }}>Qty</TableCell>
                <TableCell sx={{ fontWeight: "bold", minWidth: 180 }}>Price</TableCell>
                <TableCell sx={{ fontWeight: "bold", minWidth: 200 }} align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {billItems.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.qty}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: "auto", pt: 3, display: "flex", justifyContent: "flex-end" }}>
                <Box sx={{ width: 380 }}>

                  {/* Total */}
                  <Box display="flex" alignItems="center" mb={1}>
                    <Typography sx={{ width: 140 }}>Total :</Typography>
                    <Divider sx={{ flexGrow: 1, mx: 1 }} />
                    <TextField
                      size="small"
                      value={totalAmount}
                      disabled
                      sx={{ width: 110 }}
                    />
                  </Box>

                  {/* Discount % */}
                  <Box display="flex" alignItems="center" mb={1}>
                    <Typography sx={{ width: 140 }}>Discount % :</Typography>
                    <Divider sx={{ flexGrow: 1, mx: 1 }} />
                    <TextField
                      size="small"
                      type="number"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                      sx={{ width: 110 }}
                    />
                  </Box>

                  {/* Discount Amount */}
                  <Box display="flex" alignItems="center" mb={1}>
                    <Typography sx={{ width: 140 }}>Discount Amount :</Typography>
                    <Divider sx={{ flexGrow: 1, mx: 1 }} />
                    <TextField
                      size="small"
                      value={discountAmount}
                      disabled
                      sx={{ width: 110 }}
                    />
                  </Box>

                  {/* Grand Total */}
                  <Box display="flex" alignItems="center" mt={2}>
                    <Typography sx={{ width: 140, fontWeight: "bold" }}>
                      Grand Total :
                    </Typography>
                    <Divider sx={{ flexGrow: 1, mx: 1 }} />
                    <TextField
                      size="small"
                      value={grandTotal}
                      disabled
                      sx={{
                        width: 110,
                        "& input": {
                          fontWeight: "bold",
                          fontSize: "16px"
                        }
                      }}
                    />
                  </Box>

                  <Box display="flex" justifyContent="flex-end" mt={2}>
                    <Button variant="contained" sx={{ background: "black" }}>
                      Print
                    </Button>
                  </Box>

                </Box>
              </Box>



              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}