import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";

function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);
  const handleAddtoCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };
  return (
    <>
      {loading ? (
        <div className="preLoaderStart">
          <img src="img/products/gif/loading-arrow.gif" />
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          {/* <!-- Hero Area Start--> */}
          <div className="slider-area ">
            <div className="single-slider slider-height2 d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="hero-cap text-center">
                      <h2>Product Details</h2>
                      <h2>{product.name}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <article className="desc">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={product.image}
                  className="img-fluid"
                  alt={product.name}
                ></img>
                <br></br>
                <br></br>
                <br></br>
                <h2 className="description">Description</h2>
                {product.description}
              </div>
              <div className="col-md-6">
                {/* Factory */}
                <div className="row">
                  <div className="col-md-3">Factory:</div>
                  <div className="col-md-9">{product.factory}</div>
                </div>
                {/* end of Factory */}
                {/* cpu */}
                <div className="row">
                  <div className="col-md-3">CPU:</div>
                  <div className="col-md-9">{product.cpu}</div>
                </div>
                {/* end of cpu */}
                {/* RAM */}
                <div className="row">
                  <div className="col-md-3">RAM:</div>
                  <div className="col-md-9">{product.ram}</div>
                </div>
                {/* end of RAM */}
                {/* GPU */}
                <div className="row">
                  <div className="col-md-3">GPU:</div>
                  <div className="col-md-9">{product.gpu}</div>
                </div>
                {/* end of GPU */}
                {/* Hard dirve */}
                <div className="row">
                  <div className="col-md-3">Hard dirve:</div>
                  <div className="col-md-9">{product.harddrive}</div>
                </div>
                {/* end of Hard dirve */}
                {/* Screen */}
                <div className="row">
                  <div className="col-md-3">Screen:</div>
                  <div className="col-md-9">{product.screen}</div>
                </div>
                {/* end of Screen */}
                {/* Input/Output */}
                <div className="row">
                  <div className="col-md-3">Input/Output:</div>
                  <div className="col-md-9">{product.io}</div>
                </div>
                {/* end of Input/Output */}
                {/* Audio */}
                <div className="row">
                  <div className="col-md-3">Audio:</div>
                  <div className="col-md-9">{product.audio}</div>
                </div>
                {/* end of Audio */}
                {/* Keyboard */}
                <div className="row">
                  <div className="col-md-3">Keyboard:</div>
                  <div className="col-md-9">{product.keyboard}</div>
                </div>
                {/* end of Keyboard */}
                {/* Lan */}
                <div className="row">
                  <div className="col-md-3">Lan:</div>
                  <div className="col-md-9">{product.lan}</div>
                </div>
                {/* end of Lan */}
                {/* Wifi */}
                <div className="row">
                  <div className="col-md-3">Wifi:</div>
                  <div className="col-md-9">{product.wifi}</div>
                </div>
                {/* end of Wifi */}
                {/* Bluetooth */}
                <div className="row">
                  <div className="col-md-3">Bluetooth:</div>
                  <div className="col-md-9">{product.bluetooth}</div>
                </div>
                {/* end of Bluetooth */}
                {/* Webcam */}
                <div className="row">
                  <div className="col-md-3">Webcam:</div>
                  <div className="col-md-9">{product.webcam}</div>
                </div>
                {/* end of Webcam */}
                {/* cpu Operation System*/}
                <div className="row">
                  <div className="col-md-3">Operation System:</div>
                  <div className="col-md-9">{product.os}</div>
                </div>
                {/* end of Operation System */}
                {/* Pin */}
                <div className="row">
                  <div className="col-md-3">Pin:</div>
                  <div className="col-md-9">{product.pin}</div>
                </div>
                {/* end of Pin */}
                {/* Weight */}
                <div className="row">
                  <div className="col-md-3">Weight:</div>
                  <div className="col-md-9">{product.weight}</div>
                </div>
                {/* end of Weight */}
                {/* Color */}
                <div className="row">
                  <div className="col-md-3">Color:</div>
                  <div className="col-md-9">{product.color}</div>
                </div>
                {/* end of Color */}
                {/* Size */}
                <div className="row">
                  <div className="col-md-3">Size:</div>
                  <div className="col-md-9">{product.size}</div>
                </div>
                {/* end of Size */}
                {/* SDSlot */}
                <div className="row">
                  <div className="col-md-3">SDSlot:</div>
                  <div className="col-md-9">{product.sdslot}</div>
                </div>
                {/* end of SDSlot */}
                {/* Price */}
                <div className="row">
                  <div className="col-md-3">
                    <h2>Price:</h2>
                  </div>
                  <div className="col-md-9">
                    <h2>{product.price}</h2>
                  </div>
                </div>
                {/* end of Price */}
                {/* Status */}
                <div className="row">
                  <div className="col-md-3">
                    <h3>Status:</h3>
                  </div>

                  <div className="col-md-9">
                    <h3>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}{" "}
                    </h3>
                  </div>
                </div>
                {/* end of Status */}
                {/* Qty */}
                <div className="row">
                  <div className="col-md-3">
                    <h4>Qty:</h4>
                  </div>

                  <div className="col-md-9">
                    <h4>
                      <select
                        value={qty}
                        onChange={(e) => {
                          setQty(e.target.value);
                        }}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </h4>
                  </div>
                </div>
                {/* end of Qty */}
                {/* add to cart */}
                {product.countInStock > 0 && (
                  <button onClick={handleAddtoCart} className="addToCart">
                    Add to Cart
                  </button>
                )}
                {/* end of add to cart */}
              </div>
            </div>
          </article>
          {/* <!--? Shop Method Start--> */}
        <div className="shop-method-area">
          <div className="container">
            <div className="method-wrapper">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-method mb-40">
                    <i className="ti-package"></i>
                    <h6>Free Shipping Method</h6>
                    <p>
                      aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-method mb-40">
                    <i className="ti-unlock"></i>
                    <h6>Secure Payment System</h6>
                    <p>
                      aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-method mb-40">
                    <i className="ti-reload"></i>
                    <h6>Secure Payment System</h6>
                    <p>
                      aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Shop Method End--> */}
        </>
      )}
    </>
  );
}

export default ProductScreen;
