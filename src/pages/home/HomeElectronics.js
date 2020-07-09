import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import HeroSliderThree from "../../wrappers/hero-slider/main-slider";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import TabProductThree from "../../wrappers/product/TabProductThree";
import BannerThree from "../../wrappers/banner/BannerThree";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import CategoryThreeSlider from "../../wrappers/category/CategoryThreeSlider";
import CategoryOneSlider from "../../wrappers/category/CategoryOneSlider";
import CategoryTwoSlider from "../../wrappers/category/CategoryTwoSlider";
const HomeElectronics = () => {
  
  return (
    <Fragment>
      <MetaTags>
        <title>PetroCart | Home</title>
        <meta
          name="description"
          content="Electronics product at lowest price"
        />
      </MetaTags>
      <LayoutTwo>
        {/* hero slider */}
        <HeroSliderThree />

        {/* category slider */}
        <CategoryThreeSlider spaceBottomClass="pb-95"/>

        {/* section title with text */}
        <SectionTitleWithText spaceBottomClass="pb-90" />

        {/* tab product */}
        <TabProductThree spaceBottomClass="pb-60" category="street lights" />

        {/* banner */}
        <BannerThree spaceBottomClass="pb-100" />

        {/* testimonial */}
        <TestimonialOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
        />

      </LayoutTwo>
    </Fragment>
  );
};

export default HomeElectronics;
