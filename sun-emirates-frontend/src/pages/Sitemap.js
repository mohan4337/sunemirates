import React from "react";
import { Link } from "react-router-dom";

const Sitemap = () => {

const siteMapItems = [
{ title: "Home", path: "/" },
{ title: "Products", path: "/products" },
{ title: "Services", path: "/services" },
{ title: "Clients", path: "/clients" },
{ title: "Equipments", path: "/equipments" },
{ title: "About Us", path: "/about" },
{ title: "Contact Us", path: "/contact" },
{ title: "Feedback", path: "/feedback" },
{ title: "Location Map", path: "/locationmap" },
{ title: "Privacy Policy", path: "/privacypolicy" },
{ title: "Disclaimer", path: "/disclaimer" }
];

const productItems = [
{ title: "Stainless Steel Works", path: "/stainless-steel" },
{ title: "Mild Steel Works", path: "/mild-steel" },
{ title: "Machine Shop", path: "/machine-shop" },
{ title: "Pre Fabrication Activities", path: "/pre-fabrication" },
{ title: "Surface Treatment", path: "/surface-treatment" },
{ title: "Finishing Activities", path: "/finishing-activities" }
];

return ( <div className="pageContainer">


  <table cellPadding="0" cellSpacing="0" border="0" width="100%">
    <tbody>

      <tr>
        <td>
          <span className="PageHeader">Sitemap</span>
        </td>
      </tr>

      <tr>
        <td align="center">
          <img
            src="/images/Common/sitemap.png"
            alt="Sitemap"
            title="Sitemap"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </td>
      </tr>

      <tr>
        <td style={{ height: "20px" }}></td>
      </tr>

      <tr>
        <td>

          <div className="sitemapdiv" style={{ textAlign: "left", paddingLeft: "40px" }}>

            {/* MAIN PAGES */}
            <ol type="A" style={{ lineHeight: "26px" }}>
              {siteMapItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ol>

            {/* PRODUCTS */}
            <div style={{ marginTop: "20px" }}>
              <strong>Products & Services:</strong>

              <ol type="I" style={{ marginTop: "10px", lineHeight: "26px" }}>
                {productItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ol>
            </div>

          </div>

        </td>
      </tr>

    </tbody>
  </table>

</div>

);
};

export default Sitemap;
