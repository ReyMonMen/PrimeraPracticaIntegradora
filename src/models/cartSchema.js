import mongoose, { Schema } from "mongoose";

const cartCollection = 'cart';

const CartSchema = new Schema({
  cartNumber: { type: Schema.Types.Number, require: true },
  products: { type: Schema.Types.Array, require: true } 
});

export default mongoose.model(cartCollection, CartSchema);