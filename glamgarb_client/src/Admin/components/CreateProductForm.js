import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../State/Product/productAction";

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];
const CreateProductForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: initialSizes,
    quantity: "",
    // topLavelCategory: "",
    // secondLavelCategory: "",
    // thirdLavelCategory: "",
    description: "",
  });
  const dispatch = useDispatch();
  // const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? (name = "quantity") : (name = e.target.name);

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData));
    console.log(productData);
  };

  return (
    <div className="container card shadow my-5 py-3 ">
      <Fragment>
        <Typography
          variant="h3"
          sx={{ textAlign: "center" }}
          className="py-10 text-center"
        >
          Add New Product
        </Typography>
        <form className="m-2" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                name="imageUrl"
                value={productData.imageUrl}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Brand"
                name="brand"
                value={productData.brand}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={productData.title}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Color"
                name="color"
                value={productData.color}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Quantity"
                name="quantity"
                value={productData.quantity}
                onChange={handleChange}
                type="number"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                value={productData.price}
                onChange={handleChange}
                type="number"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="DiscountedPrice"
                name="discountedPrice"
                value={productData.discountedPrice}
                onChange={handleChange}
                type="number"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="DiscountPersent"
                name="discountPersent"
                value={productData.discountPersent}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Description"
                name="description"
                value={productData.description}
                onChange={handleChange}
              />
            </Grid>

            {productData.size.map((size, index) => (
              <Grid container item spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Size Name"
                    name="size"
                    value={size.name}
                    onChange={(event) => handleSizeChange(event, index)}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Quantity"
                    name="size_quantity"
                    type="number"
                    value={size.quantity}
                    onChange={(event) => handleSizeChange(event, index)}
                  />
                </Grid>
              </Grid>
            ))}

            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{ p: 1.8 }}
                className="py-20"
                size="large"
                type="submit"
              >
                Add New Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Fragment>
    </div>
  );
};

export default CreateProductForm;
