import PropTypes from "prop-types";
import React,{useEffect} from "react";
import Swiper from "react-id-swiper";
import categoryData from "../../data/category/category-two.json";
import CategoryTwoSingle from "../../components/category/CategoryTwoSingle.js";
import  SecondarySliderSkeleton from "../../components/skeleton/SecondarySliderSkeleton";
import SectionTitleFour from "../../components/section-title/SectionTitleFour.js";
import {createStructuredSelector} from 'reselect';
import CategoryThreeSingle from "../../components/category/CategoryThreeSingle.js";
import {fetchSliderSecondaryStart} from '../../redux/slider/slider.actions';
import SectionTitle from "../../components/section-title/SectionTitle";
import {connect} from 'react-redux';
import {selectSecondarySliderData,selectSecondarySliderCollection,isSecondaryFetching }from "../../redux/slider/slider.selectors";

const CategoryTwoSlider = ({spaceTopClass, spaceBottomClass,isFetching, sliderData ,fetchSliderSecondaryStart,isSliderData}) => {
  // swiper slider settings
  const settings = {
    loop: false,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    breakpoints: {
      992: {
        slidesPerView: 4
      },
      576: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 1
      }
    }
  };

  useEffect(()=>{
    if(!isSliderData){
      fetchSliderSecondaryStart();
    }
  },[]);
  
  return (
    <div
      className={`collections-area ${spaceTopClass ? spaceTopClass : ""}  ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        {/* section title */}
        <SectionTitle titleText="Collections" spaceBottomClass="mb-40" />
        <div className="collection-wrap">
          <div className="collection-active">
            {!isFetching?
            <Swiper {...settings}>
              {sliderData &&
                sliderData.map((single, key) => {
                  return (
                    <CategoryTwoSingle
                      data={single}
                      key={key}
                      sliderClass="mr-3 ml-3"
                    />
                  );
                })}
            </Swiper>
            :
            <Swiper {...settings}>
            {categoryData &&
              categoryData.map((single, key) => {
                return (
                  <SecondarySliderSkeleton
                    sliderClass="m-3"
                  />
                );
              })}
          </Swiper>
}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps=dispatch=>({
  fetchSliderSecondaryStart:()=>dispatch(fetchSliderSecondaryStart())
});

const mapStateToProp=createStructuredSelector({
  sliderData:selectSecondarySliderData,
  isSliderData:selectSecondarySliderCollection,
  isFetching:isSecondaryFetching
});

export default connect(mapStateToProp,mapDispatchToProps)(CategoryTwoSlider);
