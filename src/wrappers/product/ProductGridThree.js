import React, { Fragment} from "react";
import { connect } from "react-redux";
import { getProducts } from "../../helpers/product";
import ProductGridSingleThree from "../../components/product/ProductGridSingleThree";
import { addToCart } from "../../redux/cart/cart.actions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";
import {selectCartItems} from '../../redux/cart/cart.selector';
import  SecondarySliderSkeleton from '../../components/skeleton/SecondarySliderSkeleton';
import {selectAllProductData,selectLoadingState} from '../../redux/products/product.selectors';

const ProductGridThree = ({
  products=[],
  addToCart,
  addToWishlist,
  addToCompare,
  cartItems,
  wishlistItems,
  compareItems,
  sliderClassName,
  spaceBottomClass,
  loading
}) => {

    return (
!loading?
    <Fragment>
      {
      products.map(product => {
        return (
          <ProductGridSingleThree
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            addToCompare={addToCompare}
            cartItem={
             cartItems?cartItems.filter(cartItem => cartItem.id === product.id)[0]:[]
            }
            wishlistItem={
              wishlistItems.filter(
                wishlistItem => wishlistItem.id === product.id
              )[0]
            }
            compareItem={
              compareItems.filter(
                compareItem => compareItem.id === product.id
              )[0]
            }
            key={product.id}
          />
        );
      })}

    </Fragment>
:
<Fragment>
<SecondarySliderSkeleton sliderClass="mr-5"/>
<SecondarySliderSkeleton sliderClass="mr-5"/>
<SecondarySliderSkeleton sliderClass="mr-5"/>
<SecondarySliderSkeleton sliderClass="mr-5"/>
<SecondarySliderSkeleton sliderClass="mr-5"/>
<SecondarySliderSkeleton sliderClass="mr-5"/>
</Fragment>
  );
  
};


const mapStateToProps = (state, ownProps) => {
  return {
    products: getProducts(
      selectAllProductData(state),
      ownProps.category,
      ownProps.type,
      ownProps.limit
    ),
  loading:selectLoadingState(state),
  //  products:getProducts(state),
    cartItems:selectCartItems(state),
    wishlistItems: state.wishlist,
    compareItems: state.compare
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGridThree);
