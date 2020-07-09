import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
const HeroSliderSingleSkeleton = () => {
  return (
    <div
     className="slider-height-7 bg-glaucous d-flex align-items-center"
    >
      <div className="container">
        <div className="row align-items-center slider-h9-mrg">
          <div className="col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-content-7 slider-animated-1">
              <h3><Skeleton  style={{lineHeight: 2}}/></h3>
              <h1><Skeleton  style={{lineHeight: 5}}/></h1>
              <div>
              <Skeleton  style={{lineHeight: 2}} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-singleimg-hm9 slider-animated-1">
              {/* <img
                className="animated"
                src={process.env.PUBLIC_URL + data.image}
                alt=""
              /> */}
              <Skeleton width={400} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HeroSliderSingleSkeleton;
