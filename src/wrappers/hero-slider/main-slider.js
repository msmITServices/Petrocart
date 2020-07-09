import React,{useEffect} from "react";
import Swiper from "react-id-swiper";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectMainSliderData,selectMainSliderCollection,isFetching }from "../../redux/slider/slider.selectors";
import HeroSliderThreeSingle from "../../components/main-slider/HeroSliderThreeSingle.js";
import {fetchSliderMainStart} from '../../redux/slider/slider.actions';
import HeroSliderSingleSkeleton from '../../components/skeleton/heroSliderSingleSkeleton';

const HeroSliderThree = ({Data,fetchSliderStartMain,isPrimarySlider,isFetching}) => {
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };

  useEffect(()=>{
    if(!isPrimarySlider){
      fetchSliderStartMain();
    }  
},[]);

  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">

       { !isFetching?
        <Swiper {...params}>
          {Data &&
            Data.map((data) => {
              return (
                <HeroSliderThreeSingle
                  data={data}
                  key={data.id}
                  sliderClass="swiper-slide"
                />
              );
            })}
        </Swiper>
        :
            <HeroSliderSingleSkeleton
                sliderClass="swiper-slide"
              />
         
          }
      </div>
    </div>
  );
};

const mapDispatchToProps=dispatch=>({
  fetchSliderStartMain:()=>dispatch(fetchSliderMainStart())
});

const mapStateToProp=createStructuredSelector({
  Data:selectMainSliderData,
  isPrimarySlider:selectMainSliderCollection,
  isFetching:isFetching
});

export default connect(mapStateToProp,mapDispatchToProps)(HeroSliderThree);
