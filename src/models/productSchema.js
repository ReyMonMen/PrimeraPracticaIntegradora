import mongoose, { Schema } from "mongoose";

const productCollection = 'product';

const ProductSchema = new Schema({
  name: { type: Schema.Types.String, require: true },
  description: { type: Schema.Types.String, require: true },
  thumbnail: { type: Schema.Types.String, require: true },
  price: { type: Schema.Types.Number, require: true },
  code: { type: Schema.Types.String, require: true },
  stock: { type: Schema.Types.Number, require: true },
  category: { type: Schema.Types.String, require: true },
  enable: { type: Schema.Types.Boolean, default: true }
});

export default mongoose.model(productCollection, ProductSchema);