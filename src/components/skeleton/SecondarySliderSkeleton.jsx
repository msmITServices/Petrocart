import PropTypes from "prop-types";
import React from "react";
import Skeleton from 'react-loading-skeleton';

const SecondarySliderSkeleton = ({sliderClass }) => (
        <div className={`collection-product ${sliderClass ? sliderClass : ""}`}>
          <div className="collection-img">

              <Skeleton width={300} height={230} />
          </div>
          <div className="collection-content">
            <Skeleton width={100} height={20}/>
            <h4>
              <Skeleton width={200} height={40}/>
            </h4>
          </div>
        </div>
  )

SecondarySliderSkeleton.propTypes = {
  sliderClass: PropTypes.string
};

export default SecondarySliderSkeleton;
