import PropTypes from "prop-types";
import {connect} from 'react-redux';
import React,{useEffect} from "react";
import Swiper from "react-id-swiper";
import {createStructuredSelector} from 'reselect';
import CategoryThreeSingle from "../../components/category/CategoryThreeSingle.js";
import {fetchSliderSecondaryStart} from '../../redux/slider/slider.actions';
import SectionTitle from "../../components/section-title/SectionTitle";
import {selectSecondarySliderData,selectSecondarySliderCollection,isSecondaryFetching }from "../../redux/slider/slider.selectors";
import SecondarySliderSkeleton from "../../components/skeleton/SecondarySliderSkeleton.jsx";
const CategoryThreeSlider = ({ spaceTopClass, spaceBottomClass,isFetching, sliderData ,fetchSliderSecondaryStart,isSliderData }) => {
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

  const theData = [
    { id:1
    },
    {
      id:2
    },
    {
      id:3

    }
    ,
    {
      id:4

    }
]

  return (
    <div
      className={`collections-area ${spaceTopClass ? spaceTopClass : ""}  ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
      <SectionTitle titleText="Collections" spaceBottomClass="mb-40" />
        <div className="collection-wrap">
          <div className="collection-active">
          { !isFetching?
            <Swiper {...settings}>
            
              {sliderData &&
                sliderData.map((single, key) => {
                  return (
                    <CategoryThreeSingle
                      data={single}
                      key={key}
                      sliderClass="swiper-slide"
                    />
                  );
                })
              }
                </Swiper> 
                
                :
            
                  <div className="row">
                    <SecondarySliderSkeleton
                       sliderClass="mr-5"  />
                      <SecondarySliderSkeleton
                       sliderClass="mr-5"
                      />
                       <SecondarySliderSkeleton
                     />
                
                      
                  </div>
            
      
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

export default connect(mapStateToProp,mapDispatchToProps)(CategoryThreeSlider);
