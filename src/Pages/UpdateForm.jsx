import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductForm from "../Components/ProductForm";
import { useParams } from "react-router-dom";

export default function UpdateForm() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("products") != null) {
      const products = JSON.parse(localStorage.getItem("products"));
      const singleProduct = products.filter((product) => product.id == id);
      setSingleProduct(...singleProduct);
    }
  }, [id]);
  // console.log(singleProduct);
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
          <ProductForm data={singleProduct} />
        </Box>
      </Box>
    </div>
  );
}
