import {createSelector} from 'reselect';

export const selectProducts=state=>state.products;

export const selectAllProduct=createSelector(
    [selectProducts],
    products=>products.products
);

export const selectAllProductData=createSelector(
    [selectAllProduct],
productsData=>productsData?Object.keys(productsData).map(key=>productsData[key]):[]
)

export const selectProductFromParam=routeName=>createSelector(
    [selectAllProductData],
productsData=>{
console.log(routeName,productsData);
return productsData?productsData.filter(function(ob){
    return ob.name.toLowerCase()===routeName
})[0]:null
}
);

export const selectLoadingState=createSelector(
    [selectProducts],
    productsState=>productsState.isFetching
);