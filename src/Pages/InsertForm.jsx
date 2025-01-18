import React from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ProductForm from "../Components/ProductForm";

export default function InsertForm() {
  return (
    <div>
      <Box sx={{ p: 5 }}>
        <Box>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Product Form
          </Typography>
        </Box>
        <Box
          sx={{
            pb: 2,
          }}
        >
          <ProductForm />
        </Box>
      </Box>
    </div>
  );
}
