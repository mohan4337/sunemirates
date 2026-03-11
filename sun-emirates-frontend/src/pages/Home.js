import React, { memo } from "react";
import SpecialistAreas from "../components/SpecialistAreas";
import Chatbot from "../components/Chatbot";

const banners = [
"/images/Banner/1.jpg",
"/images/Banner/2.jpg",
"/images/Banner/3.jpg"
];

const clients = [
{ src: "/images/Clients/Clients1.png", alt: "KHANSAHEB" },
{ src: "/images/Clients/Clients2.png", alt: "AL Basti & Muktha LLC" },
{ src: "/images/Clients/Clients3.png", alt: "ThyssenKrupp" },
{ src: "/images/Clients/Clients4.png", alt: "MEGARME" },
{ src: "/images/Clients/Clients5.png", alt: "New Trade Links LLC" },
{ src: "/images/Clients/Clients6.png", alt: "Ferrotech International Fze" },
{ src: "/images/Clients/Clients7.png", alt: "Al Ghandi Electronics" },
{ src: "/images/Clients/Clients8.png", alt: "Hi-Tec" },
{ src: "/images/Clients/Clients9.png", alt: "Somec-Sharaf" },
{ src: "/images/Clients/Clients10.png", alt: "STADLERS" },
{ src: "/images/Clients/Clients11.png", alt: "AL REYAMI" },
{ src: "/images/Clients/Clients12.png", alt: "Dutco Balfour Beatty LLC" },
{ src: "/images/Clients/Clients13.png", alt: "AL REYAMI INTERIORS" }
];

function Home() {

return ( <div className="pageContainer">


  {/* Banner Slider */}
  <div className="SliderShowView">
    <div className="slideshow">

      {banners.map((src, index) => {
        const bannerClass = "banner banner" + (index + 1);

        return (
          <img
            key={index}
            src={src}
            alt="Sun Emirates Banner"
            loading={index === 0 ? "eager" : "lazy"}
            className={bannerClass}
          />
        );
      })}

    </div>
  </div>


  {/* Main Content */}
  <table cellPadding="2" cellSpacing="0" border="0" width="100%">
    <tbody>

      <tr>
        <td style={{ width: "70%" }}>

          <div className="ContentsView innerLeftPane">

            <p className="pspan">The Company</p>

            <p className="parp">
              We are pleased to introduce ourselves as
              <b> SUN EMIRATES MECHANICAL WORKS LLC </b>,
              expertise in Steel structural designers and contractors
              and one of the growing steel fabrication company located
              in Al Shenaya New Industrial area, Ajman, U.A.E established in 2007.
            </p>

            <p className="parp">
              We have been in the business of stainless steel and mild
              steel fabrication for Construction, Interior Decoration,
              Marine, Power and Oil & Gas sectors.
            </p>

            <p className="parp">
              We have experienced technical team who expertise on producing
              ranges of products in time with best quality to meet the
              requirement and specification of the clients.
            </p>

          </div>

        </td>

        <td style={{ width: "30%" }} className="osa">

          <div className="innerRightPane osa">
            <SpecialistAreas />
          </div>

        </td>
      </tr>


      <tr>
        <td colSpan={2}>
          <p className="pspan">Our Clients</p>
        </td>
      </tr>


      <tr>
        <td colSpan={2} className="clientplan">

          <div className="image_carousel">
            <div className="client-scroll">

              {clients.map((client, index) => (
                <img
                  key={index}
                  src={client.src}
                  alt={client.alt}
                  title={client.alt}
                  loading="lazy"
                />
              ))}

              {clients.map((client, index) => (
                <img
                  key={"dup" + index}
                  src={client.src}
                  alt={client.alt}
                  loading="lazy"
                />
              ))}

            </div>
          </div>

        </td>
      </tr>

    </tbody>
  </table>

  <Chatbot />

</div>


);

}

export default memo(Home);
