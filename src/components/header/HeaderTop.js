import PropTypes from "prop-types";
import React from "react";
import PhoneNumber from "./sub-components/PhoneNumber";

const HeaderTop = ({
  borderStyle
}) => {
  return (
    <div
      className={`header-top-wap ${
        borderStyle === "fluid-border" ? "border-bottom" : ""
      }`}
    >
      <PhoneNumber/>
      <div className="header-offer">
        <p>
          Free delivery on order over{"2000"}
          <span>
      
          </span>
        </p>
      </div>
    </div>
  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string
};

export default HeaderTop;
