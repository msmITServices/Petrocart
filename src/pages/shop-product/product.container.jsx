import {selectLoadingState} from '../../redux/products/product.selectors';
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import {selectProductFromParam} from '../../redux/products/product.selectors';

import React from 'react';
import {connect} from 'react-redux';
const ProductPageContainer=({isLoading,productData})=>{

    if(isLoading){
    return <div className="flone-preloader-wrapper">
        <div className="flone-preloader">
            <span>Petrocart</span>
            <span></span>
            </div>
        </div>
    }
    else{
      return <div>
      <ProductImageDescription
  spaceTopClass="pt-100"
  spaceBottomClass="pb-100"
  product={productData}
/>
{/* product description tab */}
<ProductDescriptionTab
  spaceBottomClass="pb-90"
  productFullDesc={productData.fullDescription}
/>

{/* related product slider */}
<RelatedProductSlider
  spaceBottomClass="pb-95"
  category={productData.category}
/>
</div>
    
}
}

const mapStateToProps=(state,ownProps)=>({
    productData:selectProductFromParam(ownProps.match.params.prouctid)(state),
    isLoading:selectLoadingState(state)
});

export default connect(mapStateToProps)(ProductPageContainer);