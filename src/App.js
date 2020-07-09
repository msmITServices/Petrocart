import React, { Suspense, lazy,useEffect} from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import {addCollectionAndDocuments} from './firebase/firebase.util';
// import {Data} from './data/hero-sliders/hero-slider-three';
 import categorydata from "./data/category.json";
import productsData from './data/products.json';
//import testimonialData from "./data/testimonial/testimonial-one.json";
import { connect } from "react-redux";
import {fetchProductsStart} from './redux/products/product.actions';
import {selectAllProduct} from './redux/products/product.selectors';
import {deleteAllDocuments} from './firebase/firebase.util'
const HomeElectronics = lazy(() => import("./pages/home/HomeElectronics"));

// other pages
const About = lazy(() => import("./pages/other/About"));
const Privacy = lazy(() => import("./pages/policies/privacy_policy"));
const Terms = lazy(() => import("./pages/policies/terms_and_conditions"));
const ReturnRefund = lazy(() => import("./pages/policies/return-refund"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));
const Product = lazy(() => import("./pages/shop-product/Product"));
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

const App =({fetchProducts,products}) => {


  useEffect(()=>{
    if(!products){
        fetchProducts();
    }
  },[]);


  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span>Petrocart</span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>         
                <Route
                  exact path="/"
                  component={HomeElectronics}
                />
              <Route
                exact path={process.env.PUBLIC_URL + "/shop"}
                  component={ShopGridStandard}
                />
     {/* Shop product pages */}
                  <Route
                  path={process.env.PUBLIC_URL + "/shop/:prouctid"}
                  render={routeProps => (
                    <Product {...routeProps} key={routeProps.match.params.id} />
                  )}
                />


                <Route
                  path={process.env.PUBLIC_URL + "/privacy-policy"}
                  component={Privacy}
                />
                
                <Route
                  path={process.env.PUBLIC_URL + "/terms-conditions"}
                  component={Terms}
                />
              <Route
                  path={process.env.PUBLIC_URL + "/refund-cancellation-policy"}
                  component={ReturnRefund}
                /> 

                {/* Other pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/about"}
                  component={About}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/contact"}
                  component={Contact}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/my-account"}
                  component={MyAccount}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/login-register"}
                  component={LoginRegister}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/cart"}
                  component={Cart}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  component={Wishlist}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/compare"}
                  component={Compare}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/checkout"}
                  component={Checkout}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/not-found"}
                  component={NotFound}
                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};
const mapStateToProps = state => {
  return{
      products: selectAllProduct(state)
  }
}
const mapDispatchToProps=(dispatch)=>({
  fetchProducts:()=>dispatch(fetchProductsStart())
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
