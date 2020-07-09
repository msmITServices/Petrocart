import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const ReturnRefund = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Petrocart | Refund-and-Cancellation-Policy</title>
        <meta
          name="description"
          content="You must read before use our site"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
      Refund and Cancellation Policy
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />


        {/* text grid */}
        <div>
      <div className="container">
        <div className="welcome-content text-center">
          <h1>Refund and Cancellation Policy</h1>
          </div>
          <p>
          &nbsp;&nbsp;&nbsp;Our focus is complete customer satisfaction. In the event, if you are displeased with the services provided, we will refund back the money, provided the reasons are genuine and proved after investigation. Please read the fine prints of each deal before buying it, it provides all the details about the services or the product you purchase.<br/> 
          &nbsp;&nbsp;&nbsp;In case of dissatisfaction from our services, clients have the liberty to cancel their projects and request a refund from us. Our Policy for the cancellation and refund will be as follows:<br/>

<strong> Cancellation Policy</strong><br/>
&nbsp;&nbsp;&nbsp;For Cancellations please contact the us via contact us link.<br/>
&nbsp;&nbsp;&nbsp;Requests received later than 2 business days prior to the end of the current service period will be treated as cancellation of services for the next service period.<br/>
<strong>Refund Policy</strong><br/>
&nbsp; &nbsp; &nbsp;We will try our best to create the suitable design concepts for our clients.<br/>

&nbsp; &nbsp; &nbsp;In case any client is not completely satisfied with our products we can provide a refund.<br/>
&nbsp; &nbsp; &nbsp;If paid by credit card, refunds will be issued to the original credit card provided at the time of purchase and in case of payment gateway name payments refund will be made to the same account.<br/>
          </p>
    
      </div>
    </div>


      </LayoutOne>
    </Fragment>
  );
};

ReturnRefund.propTypes = {
  location: PropTypes.object
};

export default ReturnRefund;