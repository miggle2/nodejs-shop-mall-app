const mongoose = require("mongoose");
const User = require("./User");
const Product = require("./Product");
const Schema = mongoose.Schema;
const orderSchema = Schema(
  {
    shipTo: { type: String, required: true },
    contact: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    userId: { type: mongoose.ObjectId, ref:User },
    status: { type: String },
    items: [
      {
        productId: { type: mongoose.ObjectId, ref:Product },
        qty: { type: Number, required: true },
        size: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

orderSchema.methods.toJSON = function () {
  const obj = this._doc;
  delete obj.__v;
  delete obj.updateAt;
  delete obj.createAt;
  return obj;
};

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
