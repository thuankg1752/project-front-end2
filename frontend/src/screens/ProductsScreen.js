import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  saveProduct,
  listProducts,
  deleteProduct,
} from "../actions/productActions";

function ProductsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState("");
  const [typeProduct, setTypeProduct] = useState("");
  const [factory, setFactory] = useState("");
  const [name, setName] = useState("");
  const [cpu, setCpu] = useState("");
  const [gpu, setGpu] = useState("");
  const [ram, setRam] = useState("");
  const [image, setImage] = useState("");
  const [harddrive, setHardrive] = useState("");
  const [screen, setScreen] = useState("");
  const [io, setIo] = useState("");
  const [audio, setAudio] = useState("");
  const [keyboard, setKeyboard] = useState("");
  const [lan, setLan] = useState("");
  const [wifi, setWifi] = useState("");
  const [bluetooth, setBluetooth] = useState("");
  const [webcam, setWebcam] = useState("");
  const [os, setOs] = useState("");
  const [pin, setPin] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [sdslot, setSdslot] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {
      //
    };
  }, [successSave, successDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setTypeProduct(product.typeProduct);
    setFactory(product.factory);
    setName(product.name);
    setCpu(product.cpu);
    setGpu(product.gpu);
    setRam(product.ram);
    setImage(product.image);
    setHardrive(product.harddrive);
    setScreen(product.screen);
    setIo(product.io);
    setAudio(product.audio);
    setKeyboard(product.keyboard);
    setLan(product.lan);
    setWifi(product.wifi);
    setBluetooth(product.bluetooth);
    setWebcam(product.webcam);
    setOs(product.os);
    setPin(product.pin);
    setWeight(product.weight);
    setColor(product.color);
    setPrice(product.price);
    setSize(product.size);
    setSdslot(product.sdslot);
    setCountInStock(product.countInStock);
    setDescription(product.description);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        _id: id,
        typeProduct,
        factory,
        name,
        cpu,
        gpu,
        ram,
        image,
        harddrive,
        screen,
        io,
        audio,
        keyboard,
        lan,
        wifi,
        bluetooth,
        webcam,
        os,
        pin,
        weight,
        color,
        price,
        size,
        sdslot,
        countInStock,
        description,
      })
    );
  };

  const deleteHandler = (product) => {
    dispatch(deleteProduct(product._id));
  };
  return (
    <>
      <div className="slider-area ">
        <div className="single-slider slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>Products Manager</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ko xác định là qq gì */}

      <div className="product-header">
        <h3>Products</h3>
        <button onClick={() => openModal({})} className="btn_3">
          Create Product
        </button>
        <br></br>
      </div>
      {/* end ất ơ gì đó */}
      {loadingSave ? (
        <div className="preLoaderStart">
          <img src="img/products/gif/loading-arrow.gif" />
        </div>
      ) : errorSave ? (
        <div>{errorSave}</div>
      ) : (
        <>
          {modalVisible && (
            <form
              className="login_part"
              onSubmit={submitHandler}
            >
              <div className="container">
                <div className="login_part_form">
                  <div className="login_part_form_iner">
                    <h3>
                      Welcome Back Admin ! <br></br>
                    </h3>

                    <form
                      className="row contact_form"
                      action="#"
                      method="post"
                      noValidate="noValidate"
                    >
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="typeProduct">Type Product</label>
                        <input
                          className="form-control"
                          type="text"
                          name="typeProduct"
                          id="typeProduct"
                          placeholder="Type Product"
                          value={typeProduct}
                          onChange={(e) => setTypeProduct(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="factory">Factory</label>
                        <input
                          className="form-control"
                          type="text"
                          id="factory"
                          name="factory"
                          placeholder="Factory"
                          value={factory}
                          onChange={(e) => setFactory(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="name">Name</label>
                        <input
                          className="form-control"
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="cpu">Cpu</label>
                        <input
                          className="form-control"
                          type="text"
                          id="cpu"
                          name="cpu"
                          placeholder="cpu"
                          value={cpu}
                          onChange={(e) => setCpu(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="gpu">GPU</label>
                        <input
                          className="form-control"
                          type="text"
                          id="gpu"
                          name="gpu"
                          placeholder="Gpu"
                          value={gpu}
                          onChange={(e) => setGpu(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="ram">Ram</label>
                        <input
                          className="form-control"
                          type="text"
                          id="ram"
                          name="ram"
                          placeholder="ram"
                          value={ram}
                          onChange={(e) => setRam(e.target.value)}
                        />
                      </div>
                      {/* image */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="image">Image</label>
                        <input
                          className="form-control"
                          type="text"
                          id="image"
                          name="image"
                          placeholder="image"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </div>
                      {/* harddrive */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="harddrive">Harddrive</label>
                        <input
                          className="form-control"
                          type="text"
                          id="harddrive"
                          name="harddrive"
                          placeholder="Hard drive"
                          value={harddrive}
                          onChange={(e) => setHardrive(e.target.value)}
                        />
                      </div>
                      {/* screen */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="screen">Screen</label>
                        <input
                          className="form-control"
                          type="text"
                          id="screen"
                          name="screen"
                          placeholder="Screen"
                          value={screen}
                          onChange={(e) => setScreen(e.target.value)}
                        />
                      </div>
                      {/* io */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="io">Input/Output (IO)</label>
                        <input
                          className="form-control"
                          type="text"
                          id="io"
                          name="io"
                          placeholder="IO"
                          value={io}
                          onChange={(e) => setIo(e.target.value)}
                        />
                      </div>
                      {/* audio */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="audio">Audio</label>
                        <input
                          className="form-control"
                          type="text"
                          id="audio"
                          name="audio"
                          placeholder="Audio"
                          value={audio}
                          onChange={(e) => setAudio(e.target.value)}
                        />
                      </div>
                      {/* keyboard */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="keyboard">Keyboard</label>
                        <input
                          className="form-control"
                          type="text"
                          id="keyboard"
                          name="keyboard"
                          placeholder="Keyboard"
                          value={keyboard}
                          onChange={(e) => setKeyboard(e.target.value)}
                        />
                      </div>
                      {/* lan */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="lan">Lan</label>
                        <input
                          className="form-control"
                          type="text"
                          id="lan"
                          name="lan"
                          placeholder="Lan"
                          value={lan}
                          onChange={(e) => setLan(e.target.value)}
                        />
                      </div>
                      {/* wifi */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="wifi">Wifi</label>
                        <input
                          className="form-control"
                          type="text"
                          id="wifi"
                          name="wifi"
                          placeholder="Wifi"
                          value={wifi}
                          onChange={(e) => setWifi(e.target.value)}
                        />
                      </div>
                      {/* bluetooth */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="bluetooth">Bluetooth</label>
                        <input
                          className="form-control"
                          type="text"
                          id="bluetooth"
                          name="bluetooth"
                          placeholder="Bluetooth"
                          value={bluetooth}
                          onChange={(e) => setBluetooth(e.target.value)}
                        />
                      </div>
                      {/* webcam */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="webcam">Webcam</label>
                        <input
                          className="form-control"
                          type="text"
                          id="webcam"
                          name="webcam"
                          placeholder="Webcam"
                          value={webcam}
                          onChange={(e) => setWebcam(e.target.value)}
                        />
                      </div>
                      {/* os */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="os">Operation System (OS)</label>
                        <input
                          className="form-control"
                          type="text"
                          id="os"
                          name="os"
                          placeholder="OS"
                          value={os}
                          onChange={(e) => setOs(e.target.value)}
                        />
                      </div>
                      {/* pin */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="pin">Pin</label>
                        <input
                          className="form-control"
                          type="text"
                          id="pin"
                          name="pin"
                          placeholder="Pin"
                          value={pin}
                          onChange={(e) => setPin(e.target.value)}
                        />
                      </div>
                      {/* weight */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="weight">Weight</label>
                        <input
                          className="form-control"
                          type="text"
                          id="weight"
                          name="weight"
                          placeholder="Weight"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </div>
                      {/* color */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="color">Color</label>
                        <input
                          className="form-control"
                          type="text"
                          id="color"
                          name="color"
                          placeholder="Color"
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                        />
                      </div>
                      {/* price */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="price">Price</label>
                        <input
                          className="form-control"
                          type="number"
                          id="price"
                          name="price"
                          placeholder="Price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                      {/* size */}
                      <div className="col-md-12 form-group p_star">
                        {" "}
                        <label htmlFor="size">size</label>
                        <input
                          className="form-control"
                          type="text"
                          id="size"
                          name="size"
                          placeholder="Size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                        />
                      </div>
                      {/* sd slot */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="sdslot">SD slot</label>
                        <input
                          className="form-control"
                          type="text"
                          id="sdslot"
                          name="sdslot"
                          placeholder="SD slot"
                          value={sdslot}
                          onChange={(e) => setSdslot(e.target.value)}
                        />
                      </div>
                      {/* countInStock */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="countInStock">Count In Stock</label>
                        <input
                          className="form-control"
                          type="number"
                          id="countInStock"
                          name="countInStock"
                          placeholder="Count In Stock"
                          value={countInStock}
                          onChange={(e) => setCountInStock(e.target.value)}
                        />
                      </div>
                      {/* description */}
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="description">Description</label>
                        <textarea
                          className="form-control"
                          type="text"
                          id="description"
                          name="description"
                          placeholder="Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12 form-group">
                        <button type="submit" value="submit" className="btn_3">
                          {id ? "Update" : "Create"}
                        </button>
                        <button
                          type="button"
                          value="submit"
                          className="btn_3"
                          onClick={() => setModalVisible(false)}
                        >
                          Back
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </form>
          )}

          <div className="product-list">
            <table className="table">
              <thead>
                <tr>
                  <th className="thProductScreen">Product ID</th>
                  <th className="thProductScreen">Factory</th>
                  <th className="thProductScreen">Name</th>
                  <th className="thProductScreen">Price</th>
                  <th className="thProductScreen">Picture Link</th>
                  <th className="thProductScreen">Category</th>
                  <th className="thProductScreen">Count in stock</th>
                  <th className="thProductScreen">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id} className="trProductSreen">
                    <td>{product._id}</td>
                    <td>{product.factory}</td>
                    <td>{product.name}</td>
                    <td>{product.price}$</td>
                    <td>{product.image}</td>
                    <td>{product.typeProduct}</td>
                    <td>{product.countInStock}</td>
                    <td>
                      <button
                        className="btn_3"
                        onClick={() => openModal(product)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn_3"
                        onClick={() => deleteHandler(product)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

export default ProductsScreen;
