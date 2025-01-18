import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        p: 5,
        textAlign: "center",
        color: "white",
      }}
    >
      <Typography variant="h6">
        © copy right @ProductList 2025. All Right Reserved
      </Typography>
    </Box>
  );
}
