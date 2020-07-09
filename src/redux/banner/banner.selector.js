import {createSelector} from 'reselect';

export const selectBanner=state=>state.banner;

export const selectBannerCollections=createSelector(
    [selectBanner],
    banners=>banners.collections
);

export const selectBannerData=createSelector(
    [selectBannerCollections],
bannerData=>bannerData?Object.keys(bannerData).map(key=>bannerData[key]):[]
)

export const isFetching=createSelector(
    [selectBanner],
    banner=>banner.isFetching
)