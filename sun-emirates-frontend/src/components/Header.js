import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header-Container">
      <div className="header-Container-wrapper">

        {/* LEFT LOGO */}
        <div className="header-LeftPane">
          <div className="logo-container">
            <Link to="/" title="Sun Emirates">
              <img
                src="/images/Common/NewLogo.png"
                alt="Sun Emirates"
                title="Sun Emirates"
              />
            </Link>
          </div>
        </div>

        {/* RIGHT CONTACT DETAILS */}
        <div className="header-RightPane">
          <div className="contactInfo">

            <div className="comTitle">
              Sun Emirates Mechanical Works LLC
            </div>

            <div className="comAddress">
              P.O.Box : 14655, Ajman - U.A.E.
            </div>

            <div className="comContacts">
              <span className="comTelphone">&nbsp;&nbsp;&nbsp;&nbsp;</span>
              +971-6-7481646
              <span className="pipeSeparator">&nbsp;|&nbsp;</span>

              <span className="comMobile">&nbsp;&nbsp;&nbsp;</span>
              +971-50-7743556
              <span className="pipeSeparator">&nbsp;|&nbsp;</span>

              <span className="comFax">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              +971-6-7481647
            </div>

            <div className="comEmails">

              <span className="Icon-EMail">&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a href="mailto:sales@sunemirates.com">
                sales@sunemirates.com
              </a>

              <span className="pipeSeparator">&nbsp;|&nbsp;</span>

              <span className="Icon-EMail">&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a href="mailto:saminathan@sunemirates.com">
                saminathan@sunemirates.com
              </a>

              <span className="pipeSeparator">&nbsp;|&nbsp;</span>

              <span className="Icon-EMail">&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a href="mailto:sunemw@eim.ae">
                sunemw@eim.ae
              </a>

            </div>

          </div>

          {/* NAVIGATION MENU */}
          <div id="SETopNavigation">
            <div className="menuTopNav">

              <NavLink to="/">Home</NavLink>
              <span className="pipeSeparator">|</span>

              <NavLink to="/products">Products</NavLink>
              <span className="pipeSeparator">|</span>

              <NavLink to="/services">Services</NavLink>
              <span className="pipeSeparator">|</span>

              <NavLink to="/clients">Clients</NavLink>
              <span className="pipeSeparator">|</span>

              <NavLink to="/equipments">Equipments</NavLink>
              <span className="pipeSeparator">|</span>

              <NavLink to="/about">About Us</NavLink>
              <span className="pipeSeparator">|</span>

              {/* NEW CONTACT PAGE */}
              <NavLink to="/contact">Contact</NavLink>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Header;