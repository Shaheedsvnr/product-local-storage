import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProductForm({ data }) {
  let navigate = useNavigate();
  const initialValue = JSON.parse(localStorage.getItem("products")) || [];
  const [productData, setProductData] = useState({
    title: "",
    availability: "",
    price: "",
    description: "",
    url: "",
  });

  useEffect(() => {
    if (data) {
      setProductData({
        title: data?.title,
        availability: data?.availability,
        price: data?.price,
        description: data?.description,
        url: data?.url,
        id: data?.id,
      });
    } else {
      setProductData({
        title: "",
        availability: "",
        price: "",
        description: "",
        url: "",
      });
    }
  }, [data]);

  const [allProducts, setAllProducts] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data) {
      const index = allProducts.findIndex((product) => product.id === data.id);
      const updatedProducts = [...allProducts];
      updatedProducts.splice(index, 1, productData);
      setAllProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      alert("Product updated successfully");
    } else {
      const pId =
        allProducts.length === 0
          ? 1
          : allProducts[allProducts.length - 1].id + 1;
      const completeProductInfo = { ...productData, id: pId };
      const updatedProducts = [...allProducts, completeProductInfo];
      setAllProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      alert("Product inserted successfully");
    }
    navigate("/");
  };

  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        onSubmit={handleSubmit}
        component={"form"}
        elevation={2}
        sx={{ width: { xs: "90%", sm: "80%", md: "50%" }, p: 3 }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {data ? "Edit Product" : "Add New Product"}
        </Typography>
        <TextField
          required
          sx={{ mt: 2 }}
          onChange={(e) =>
            setProductData({
              ...productData,
              [e.target.name]: e.target.value,
            })
          }
          fullWidth
          name="title"
          value={productData?.title}
          label="Product Title"
          placeholder="Enter product title"
        />
        <TextField
          required
          sx={{ mt: 2 }}
          onChange={(e) =>
            setProductData({
              ...productData,
              [e.target.name]: e.target.value,
            })
          }
          type="number"
          fullWidth
          name="availability"
          value={productData?.availability}
          label="Product Availability"
          placeholder="Enter product availability"
        />
        <TextField
          required
          sx={{ mt: 2 }}
          onChange={(e) =>
            setProductData({
              ...productData,
              [e.target.name]: e.target.value,
            })
          }
          fullWidth
          name="price"
          value={productData?.price}
          type="number"
          label="Product Price"
          placeholder="Enter product price"
        />
        <TextField
          required
          sx={{ mt: 2 }}
          onChange={(e) =>
            setProductData({
              ...productData,
              [e.target.name]: e.target.value,
            })
          }
          fullWidth
          name="description"
          value={productData?.description}
          multiline
          rows={2}
          label="Product Description"
          placeholder="Enter product description"
        />
        <TextField
          required
          sx={{ mt: 2 }}
          onChange={(e) =>
            setProductData({
              ...productData,
              [e.target.name]: e.target.value,
            })
          }
          fullWidth
          name="url"
          value={productData?.url}
          label="Product Image URL"
          placeholder="Enter product image URL"
        />
        <Button
          sx={{ mt: 2, p: 1 }}
          fullWidth
          variant="contained"
          type="submit"
          color="secondary"
        >
          {data ? "Update Product" : "Submit"}
        </Button>
        <Button
          sx={{ mt: 1, p: 1 }}
          fullWidth
          variant="contained"
          component={Link}
          to={"/"}
        >
          View Products
        </Button>
      </Paper>
    </Box>
  );
}
