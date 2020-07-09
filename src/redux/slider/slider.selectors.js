import {createSelector} from 'reselect';

const selectSliderMainData=state=>state.sliderMain;
const selectSliderSecondaryData=state=>state.sliderSecondary;

export const selectMainSliderCollection=createSelector(
    [selectSliderMainData],
    sliderData=>sliderData.collections
);
export const selectSecondarySliderCollection=createSelector(
    [selectSliderSecondaryData],
    sliderData=>sliderData.collections
);

export const selectMainSliderData=createSelector(
[selectMainSliderCollection],
sliderData=>sliderData?Object.keys(sliderData).map(key=>sliderData[key]):[]
)

export const selectSecondarySliderData=createSelector(
    [selectSecondarySliderCollection],
    sliderData=>sliderData?Object.keys(sliderData).map(key=>sliderData[key]):[]
    )
export const isFetching=createSelector(
    [selectSliderMainData],
    data=>data.isFetching
)

export const isSecondaryFetching=createSelector(
    [selectSliderSecondaryData],
    data=>data.isFetching
)