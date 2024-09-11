import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, message: "Products fetched successfully", data: products });
  } catch (error) {
    console.log("Error while fetching products", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const createProducts =  async (req, res) => {
    const product = req.body; //user will send this data
    if (!product.name || !product.price || !product.image) {
      return res.status(400).json({ success: false, message: "Please fill all the fields" });
    }
    const newProduct = new Product(product);
    try {
      await newProduct.save();
      res.status(201).json({ success: true, message: "Product created successfully", data: newProduct });
    } catch (error) {
      console.log("Error while create product", error.message);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }

  export const updateProductById =  async (req, res) => {
    const productId = req.params.id;
    const product = req.body;
  
    if(!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ success: false, message: "Product not found" });
    }
    
    try {
      const updatedProduct = await Product.findByIdAndUpdate(productId, product, { new: true });
      res.status(200).json({ success: true, message: "Product updated successfully", data: updatedProduct });
    } catch (error) {
      console.log("Error while updating product", error.message);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }

  export const deleteProductById = async (req, res) => {
    const productId = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ success: false, message: "Product not found" });
      }
    try {
      const product = await Product.findByIdAndDelete(productId);
      res.status(200).json({ success: true, message: "Product deleted successfully", data: product });
    } catch (error) {
      console.log("Error while deleting product", error.message);
      res.status(404).json({ success: false, message: "Product not found" });
    }
  }