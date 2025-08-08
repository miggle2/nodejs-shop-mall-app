const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();
const productController = require("../controllers/productController");

router.post(
  "/",
  authController.authenticate,
  authController.checkAdminPermission,
  productController.createProduct
);

router.get("/", productController.getProducts);

module.exports = router;
