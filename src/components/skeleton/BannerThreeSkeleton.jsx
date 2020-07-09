import PropTypes from "prop-types";
import React from "react";
import Skeleton from 'react-loading-skeleton';
const BannerThreeSkeleton = ({  spaceBottomClass }) => {
  return (
    <div className="col-lg-6 col-md-6">
      <div
        className={`single-banner-2 ${
          spaceBottomClass ? spaceBottomClass : ""
        }`}
      >
          <Skeleton width={600} height={300} />
        <div className="banner-content-2">
          <h3><Skeleton/></h3>
          <h4>
           <Skeleton />
          </h4>
          <Skeleton />
        </div>
      </div>
    </div>
  );
};

BannerThreeSkeleton.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default BannerThreeSkeleton;
