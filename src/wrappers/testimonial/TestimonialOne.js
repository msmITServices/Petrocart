import PropTypes from "prop-types";
import React,{useEffect} from "react";
import Swiper from "react-id-swiper";
//import testimonialData from "../../data/testimonial/testimonial-one.json";
import TestimonialOneSingle from "../../components/testimonial/TestimonialOneSingle.js";
import {fetchTestimonialStart} from '../../redux/testimonial/testimonial.actions';
import {selectAlltestimonialsData,selectAlltestimonials,isFetching} from '../../redux/testimonial/testimonial.selectors';
import {connect} from 'react-redux';
import TestimonialOneSkeleton from "../../components/skeleton/TestimonialSkeleton.jsx";
const TestimonialOne = ({
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  bgColorClass,
  testimonialsData,
  fetchTestimonial,
  isTestimonialData,
  loading
}) => {
  // swiper slider settings
  const settings = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  };

  useEffect(()=>{
    if(!isTestimonialData){
      fetchTestimonial();
    }
  },[])

  return (
    <div
      className={`testimonial-area ${spaceTopClass ? spaceTopClass : ""}  ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${spaceLeftClass ? spaceLeftClass : ""}  ${
        spaceRightClass ? spaceRightClass : ""
      } ${bgColorClass ? bgColorClass : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 ml-auto mr-auto">
            <div className="testimonial-active nav-style-1 nav-testi-style">
              {!loading?
              <Swiper {...settings}>
                {testimonialsData &&
                  testimonialsData.map((single, key) => {
                    return (
                      <TestimonialOneSingle
                        data={single}
                        key={key}
                        sliderClass="swiper-slide"
                      />
                    );
                  })}
              </Swiper>:
               <TestimonialOneSkeleton
               sliderClass="swiper-slide"
             />
}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialOne.propTypes = {
  bgColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

const mapStateToProps=(state)=>({
  testimonialsData:selectAlltestimonialsData(state),
  isTestimonialData:selectAlltestimonials(state),
  loading:isFetching(state)
});

const mapDispatchToProps=(dispatch)=>({
  fetchTestimonial:()=>dispatch(fetchTestimonialStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(TestimonialOne);
