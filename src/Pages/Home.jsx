import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("products") != null) {
      setProducts(JSON.parse(localStorage.getItem("products")));
    }
  }, []);
  return (
    <div>
      <Box sx={{ p: 5 }}>
        <Box>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Product Details
          </Typography>
        </Box>
        <Box
          sx={{
            pb: 2,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            component={Link}
            to={"/insert"}
            variant="contained"
            color="primary"
            // sx={{ float: "right" }}
          >
            Insert New
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {products?.length > 0 ? (
            products?.map((product, index) => (
              <ProductCard key={index} data={product} />
            ))
          ) : (
            <Box sx={{ width: "70%", p: 5 }}>
              <Typography
                variant="h6"
                sx={{ color: "grey", textAlign: "center" }}
              >
                No data found!
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
