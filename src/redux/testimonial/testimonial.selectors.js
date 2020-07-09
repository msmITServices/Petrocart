import {createSelector} from 'reselect';

export const selectTestimonials=state=>state.testimonial;

export const selectAlltestimonials=createSelector(
    [selectTestimonials],
    testimonial=>testimonial.testimonials
);

export const selectAlltestimonialsData=createSelector(
    [selectAlltestimonials],
testimonialData=>testimonialData?Object.keys(testimonialData).map(key=>testimonialData[key]):[]
);

export const isFetching=createSelector(
    [selectTestimonials],
    testimonial=>testimonial.isFetching
);