import PropTypes from "prop-types";
import React from "react";
import Skeleton from 'react-loading-skeleton';
const TestimonialOneSkeleton = ({ sliderClass }) => {
  return (
    <div
      className={`single-testimonial text-center ${
        sliderClass ? sliderClass : ""
      }`}
    >
<Skeleton width={70} height={70} />
      <p><Skeleton width={300}/><br/>
      <Skeleton width={300}/>
      </p>
      <div className="client-info">
        <i className="fa fa-map-signs" />
        <h5><Skeleton height={20} width={100}/></h5>
        <span><Skeleton height={15} width={60}/></span>
      </div>
    </div>
  );
};

TestimonialOneSkeleton.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default TestimonialOneSkeleton;
