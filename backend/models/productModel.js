import mongoose from "mongoose";

const prodctSchema = new mongoose.Schema({
  typeProduct: { type: String, required: true },
  factory: { type: String, required: true },
  name: { type: String, required: true },
  cpu: { type: String, required: true },
  gpu: { type: String, required: true },
  ram: { type: String, required: true },
  image: { type: String, required: true },
  harddrive: { type: String, required: true },
  screen: { type: String, required: true },
  io: { type: String, required: true },
  audio: { type: String, required: true },
  keyboard: { type: String, required: true },
  lan: { type: String, required: true },
  wifi: { type: String, required: true },
  bluetooth: { type: String, required: true },
  webcam: { type: String, required: true },
  os: { type: String, required: true },
  pin: { type: String, required: true },
  weight: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  size: { type: String, required: true },
  sdslot: { type: String, required: true },
  countInStock: { type: Number, default: 0, required: true },
  description: { type: String, required: true },
});

const productModel = mongoose.model('Product', prodctSchema);

export default productModel;
