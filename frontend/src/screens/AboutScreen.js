import React from "react";
import { Link } from "react-router-dom";
function AboutScreen() {
  return (
    <>
      {/* <!-- Hero Area Start--> */}
      <div class="slider-area ">
        <div class="single-slider slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap text-center">
                  <h2>About Us</h2>
                  {/* <!-- Button --> */}
                  <div className="row justify-content-center">
                    <div className="room-btn pt-70">
                      <Link to="/" className="btn view-btn1">
                        Back To Home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-details section-padding30">
        <div class="container">
          <div class="row">
            <div class="offset-xl-1 col-lg-8">
              <div class="about-details-cap mb-50">
                <h4>Our Mission</h4>
                <p>
                  Consectetur adipiscing elit, sued do eiusmod tempor ididunt
                  udfgt labore et dolore magna aliqua. Quis ipsum suspendisces
                  gravida. Risus commodo viverra sebfd dho eiusmod tempor
                  maecenas accumsan lacus. Risus commodo viverra sebfd dho
                  eiusmod tempor maecenas accumsan lacus.
                </p>
                <p>
                  {" "}
                  Risus commodo viverra sebfd dho eiusmod tempor maecenas
                  accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor
                  maecenas accumsan.
                </p>
              </div>

              <div class="about-details-cap mb-50">
                <h4>Our Vision</h4>
                <p>
                  Consectetur adipiscing elit, sued do eiusmod tempor ididunt
                  udfgt labore et dolore magna aliqua. Quis ipsum suspendisces
                  gravida. Risus commodo viverra sebfd dho eiusmod tempor
                  maecenas accumsan lacus. Risus commodo viverra sebfd dho
                  eiusmod tempor maecenas accumsan lacus.
                </p>
                <p>
                  {" "}
                  Risus commodo viverra sebfd dho eiusmod tempor maecenas
                  accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor
                  maecenas accumsan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutScreen;
