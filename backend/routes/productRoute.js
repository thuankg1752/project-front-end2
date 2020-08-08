import express from "express";
import Product from "../models/productModel";
import { isAuth, isAdmin } from "../util";
const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
  }else{
    res.status(404).send({message:"Product Not Found"})
  }
});

// Create
router.post("/", isAuth, isAdmin, async (req, res) => {
  const product = new Product({
    typeProduct: req.body.typeProduct,
    factory: req.body.factory,
    name: req.body.name,
    cpu: req.body.cpu,
    gpu: req.body.gpu,
    ram: req.body.ram,
    image: req.body.image,
    harddrive: req.body.harddrive,
    screen: req.body.screen,
    io: req.body.io,
    audio: req.body.audio,
    keyboard: req.body.keyboard,
    lan: req.body.lan,
    wifi: req.body.wifi,
    bluetooth: req.body.bluetooth,
    webcam: req.body.webcam,
    os: req.body.os,
    pin: req.body.pin,
    weight: req.body.weight,
    color: req.body.color,
    price: req.body.price,
    size: req.body.size,
    sdslot: req.body.sdslot,
    countInStock: req.body.countInStock,
    description: req.body.description,
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ message: "New Product Created", data: newProduct });
  }
  return res.status(500).send({ message: " Error in Creating Product." });
});

// Update
router.put("/:id", isAuth, isAdmin, async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.typeProduct = req.body.typeProduct;
    product.factory = req.body.factory;
    product.name = req.body.name;
    product.cpu = req.body.cpu;
    product.gpu = req.body.gpu;
    product.ra = req.body.ram;
    product.image = req.body.image;
    product.harddrive = req.body.harddrive;
    product.screen = req.body.screen;
    product.io = req.body.io;
    product.audio = req.body.audio;
    product.keyboard = req.body.keyboard;
    product.lan = req.body.lan;
    product.wifi = req.body.wifi;
    product.bluetooth = req.body.bluetooth;
    product.webcam = req.body.webcam;
    product.os = req.body.os;
    product.pin = req.body.pin;
    product.weight = req.body.weight;
    product.color = req.body.color;
    product.price = req.body.price;
    product.size = req.body.size;
    product.sdslot = req.body.sdslot;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    const updateProduct = await product.save();
    if (updateProduct) {
      return res
        .status(200)
        .send({ message: "Product Updated", data: updateProduct });
    }
  }
  return res.status(500).send({ message: " Error in Updating Product." });
});

// Delete
router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: "Product Deleted" });
  } else {
    res.send("Error in Deletion.");
  }
});

export default router;
