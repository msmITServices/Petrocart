import PropTypes from "prop-types";
import React, { useEffect } from "react";
import BannerThreeSingle from "../../components/banner/BannerThreeSingle.js";
import {connect} from 'react-redux';
import {selectBannerData,selectBannerCollections,isFetching} from '../../redux/banner/banner.selector';
import {fetchBannerStart} from '../../redux/banner/banner.actions';
import BannerThreeSkeleton from '../../components/skeleton/BannerThreeSkeleton';

const BannerThree = ({ spaceBottomClass,bannerData,fetchBanner,isBannerDataAvailable,isLoading }) => {
  useEffect(()=>{
    if(!isBannerDataAvailable){
      fetchBanner();
    }  
  },[]);
  return (
    <div className={`banner-area ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="container">
       {!isLoading ?
        <div className="row">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerThreeSingle
                  data={single}
                  key={key}
                  spaceBottomClass="mb-30"
                />
              );
            })}
        </div>
        :
        <div className="row">
                <BannerThreeSkeleton
                  spaceBottomClass="mb-30"
                />
                 <BannerThreeSkeleton
                  spaceBottomClass="mb-30"
                />
        </div>
}

      </div>
    </div>
  );
};

BannerThree.propTypes = {
  spaceBottomClass: PropTypes.string
};

const mapStateToProps=state=>({
  bannerData:selectBannerData(state),
  isBannerDataAvailable:selectBannerCollections(state),
  isLoading:isFetching(state)
});

const mapDispatchToProps=dispatch=>({
  fetchBanner:()=>dispatch(fetchBannerStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(BannerThree);
