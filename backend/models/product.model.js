import mongoose from "mongoose";

//first create a structure for your collection
const productSchema = new mongoose.Schema(
  { name: { type: String, required: true }, price: { type: Number, required: true }, image: { type: String, required: true } },
  {
    timestamps: true, //updatedAt, create at etc
  }
);

//create your collection
const Product = mongoose.model("Product", productSchema);

export default Product;
