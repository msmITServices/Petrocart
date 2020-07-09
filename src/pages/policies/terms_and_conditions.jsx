import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Terms = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Petrocart | Terms-and-conditions</title>
        <meta
          name="description"
          content="You must read before use our site"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
       Terms and Conditions
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />


        {/* text grid */}
        <div>
      <div className="container">
        <div className="welcome-content text-center">
          <h1>Terms and Conditions</h1>
          </div>
          <p>
          &nbsp; &nbsp; &nbsp; The terms "We" / "Us" / "Our"/”Company” individually and collectively refer to <strong>Petrocart</strong>.and the terms "Visitor” ”User” refer to the users. <br/>
          &nbsp; &nbsp; &nbsp; This page states the Terms and Conditions under which you (Visitor) may visit this website (“Website”). Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to exit this site. The business, any of its business divisions and / or its subsidiaries, associate companies or subsidiaries to subsidiaries or such other investment companies (in India or abroad) reserve their respective rights to revise these Terms and Conditions at any time by updating this posting. You should visit this page periodically to re-appraise yourself of the Terms and Conditions, because they are binding on all users of this Website.<br/>
<strong>USE OF CONTENT</strong><br/>
&nbsp; &nbsp; &nbsp;All logos, brands, marks headings, labels, names, signatures, numerals, shapes or any combinations thereof, appearing in this site, except as otherwise noted, are properties either owned, or used under licence, by the business and / or its associate entities who feature on this Website. The use of these properties or any other content on this site, except as provided in these terms and conditions or in the site content, is strictly prohibited.<br/>

&nbsp; &nbsp; &nbsp;You may not sell or modify the content of this Website  or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without the respective organisation’s or entity’s written permission.<br/>

<strong>ACCEPTABLE WEBSITE USE</strong><br/>
&nbsp; &nbsp; &nbsp;(A) Security Rules<br/>
Visitors are prohibited from violating or attempting to violate the security of the Web site, including, without limitation, (1) accessing data not intended for such user or logging into a server or account which the user is not authorised to access, (2) attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorisation, (3) attempting to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus or "Trojan horse" to the Website, overloading, "flooding", "mail bombing" or "crashing", or (4) sending unsolicited electronic mail, including promotions and/or advertising of products or services. Violations of system or network security may result in civil or criminal liability. The business and / or its associate entities will have the right to investigate occurrences that they suspect as involving such violations and will have the right to involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations.
<br/> 

&nbsp; &nbsp; &nbsp;(B) General Rules<br/>
Visitors may not use the Web Site in order to transmit, distribute, store or destroy material (a) that could constitute or encourage conduct that would be considered a criminal offence or violate any applicable law or regulation, (b) in a manner that will infringe the copyright, trademark, trade secret or other intellectual property rights of others or violate the privacy or publicity of other personal rights of others, or (c) that is libellous, defamatory, pornographic, profane, obscene, threatening, abusive or hateful.
<br/>
<strong>INDEMNITY</strong><br/>
&nbsp; &nbsp; &nbsp;The User unilaterally agree to indemnify and hold harmless, without objection, the Company, its officers, directors, employees and agents from and against any claims, actions and/or demands and/or liabilities and/or losses and/or damages whatsoever arising from or resulting from their use of petrocart.in or their breach of the terms . 

<br/>
<strong>LIABILITY</strong><br/>
&nbsp; &nbsp; &nbsp;User agrees that neither Company nor its group companies, directors, officers or employee shall be liable for any direct or/and indirect or/and incidental or/and special or/and consequential or/and exemplary damages, resulting from the use or/and the inability to use the service or/and for cost of procurement of substitute goods or/and services or resulting from any goods or/and data or/and information or/and services purchased or/and obtained or/and messages received or/and transactions entered into through or/and from the service or/and resulting from unauthorized access to or/and alteration of user's transmissions or/and data or/and arising from any other matter relating to the service, including but not limited to, damages for loss of profits or/and use or/and data or other intangible, even if Company has been advised of the possibility of such damages. <br/>

&nbsp; &nbsp; &nbsp;User further agrees that Company shall not be liable for any damages arising from interruption, suspension or termination of service, including but not limited to direct or/and indirect or/and incidental or/and special consequential or/and exemplary damages, whether such interruption or/and suspension or/and termination was justified or not, negligent or intentional, inadvertent or advertent. <br/>
&nbsp;&nbsp;&nbsp;User agrees that Company shall not be responsible or liable to user, or anyone, for the statements or conduct of any third party of the service. In sum, in no event shall Company's total liability to the User for all damages or/and losses or/and causes of action exceed the amount paid by the User to Company, if any, that is related to the cause of action.<br/>
<strong>DISCLAIMER OF CONSEQUENTIAL DAMAGES</strong><br/>
&nbsp; &nbsp; &nbsp;In no event shall Company or any parties, organizations or entities associated with the corporate brand name us or otherwise, mentioned at this Website be liable for any damages whatsoever (including, without limitations, incidental and consequential damages, lost profits, or damage to computer hardware or loss of data information or business interruption) resulting from the use or inability to use the Website and the Website material, whether based on warranty, contract, tort, or any other legal theory, and whether or not, such organization or entities were advised of the possibility of such damages.<br/>

          </p>
    
      </div>
    </div>


      </LayoutOne>
    </Fragment>
  );
};

Terms.propTypes = {
  location: PropTypes.object
};

export default Terms;