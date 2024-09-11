import express from "express";
const router = express.Router();
import { createProducts, deleteProductById, getProducts, updateProductById } from "../controller/product.controller.js";

router.get("/", getProducts);

router.post("/", createProducts);

router.delete("/:id", deleteProductById);

router.put("/:id", updateProductById);

export default router;