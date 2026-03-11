import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SpecialistAreas from '../components/SpecialistAreas';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: 'Company Information',
      content: (
        <table cellpadding="0" cellspacing="0" border="0" width="99%" className="tablestr">
          <tbody>
            <tr>
              <td className="abtLabel">Year of Establishment</td>
              <td className="abtLabel">2007</td>
            </tr>
            <tr>
              <td className="abtLabel">Sponsor</td>
              <td className="abtLabel">Mr. Abdulla Omar Al Saeidi</td>
            </tr>
            <tr>
              <td className="abtLabel">Manager (Sales & Operations)</td>
              <td className="abtLabel">Mr. Saminathan B.E.</td>
            </tr>
            <tr>
              <td className="abtLabel">Manager (Accounts)</td>
              <td className="abtLabel">Mrs. Tahseen Syed Khaleemulla B.A</td>
            </tr>
          </tbody>
        </table>
      )
    },
    {
      title: 'Company Location Information',
      content: (
        <table cellpadding="0" cellspacing="0" border="0" width="99%" className="tablestr">
          <tbody>
            <tr>
              <td className="abtLabel">Total Area</td>
              <td className="abtLabel">16000 Sq. feet</td>
            </tr>
            <tr>
              <td className="abtLabel">Workshop - Open Area</td>
              <td className="abtLabel">6000 Sq. feet</td>
            </tr>
            <tr>
              <td className="abtLabel">Workshop - Covered Area</td>
              <td className="abtLabel">10000 Sq. feet</td>
            </tr>
          </tbody>
        </table>
      )
    },
    {
      title: 'Company Employees Information',
      content: (
        <table cellpadding="0" cellspacing="0" border="0" width="99%" className="tablestr">
          <tbody>
            <tr>
              <th className="abtLabel">Number of Employees</th>
              <th className="abtLabel">36 + 40 (Sub Contracting)</th>
            </tr>
            <tr>
              <td className="abtLabel">Mechanical Engineer</td>
              <td className="abtLabel">01</td>
            </tr>
            <tr>
              <td className="abtLabel">Operation Incharge</td>
              <td className="abtLabel">02</td>
            </tr>
            <tr>
              <td className="abtLabel">Accountant</td>
              <td className="abtLabel">01</td>
            </tr>
            <tr>
              <td className="abtLabel">Senior Foreman</td>
              <td className="abtLabel">02</td>
            </tr>
            <tr>
              <td className="abtLabel">Fabricators(Fittter)</td>
              <td className="abtLabel">07</td>
            </tr>
            <tr>
              <td className="abtLabel">Welders(Blaster & Painter)</td>
              <td className="abtLabel">04</td>
            </tr>
            <tr>
              <td className="abtLabel">SS Finishing Technicians</td>
              <td className="abtLabel">04</td>
            </tr>
            <tr>
              <td className="abtLabel">Machine Operators</td>
              <td className="abtLabel">02</td>
            </tr>
            <tr>
              <td className="abtLabel">Drivers</td>
              <td className="abtLabel">03</td>
            </tr>
            <tr>
              <td className="abtLabel">Technical Helpers</td>
              <td className="abtLabel">10</td>
            </tr>
          </tbody>
        </table>
      )
    }
  ];

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? -1 : index);
  };

  return (
    <table cellpadding="0" border="0" cellspacing="0" width="100%">
      <tbody>
        <tr>
          <td width="70%">
            <table cellpadding="0" border="0" cellspacing="0" width="100%">
              <tbody>
                <tr>
                  <td align="center">
                    <div className="PageHeader">
                      About Us
                    </div>
                    <table cellpadding="0" cellspacing="0" width="100%">
                      <tbody>
                        <tr>
                          <td align="center" colSpan={2}>
                            <img 
                              src="/images/Common/Aboutsbnr.png" 
                              alt="About Us" 
                              title="About Us"
                              align="absMiddle"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="abtContentsView">
                      <p className="abtparp">
                        We are pleased to introduce ourselves as <b>SUN EMIRATES MECHANICAL WORKS LLC</b>,
                        expertise in Steel structural designers and contractors and one of the growing steel
                        fabrication company located in Al Shenaya New Industrial area , Ajman, U.A.E established
                        in 2007. We have been in the business of stainless steel and mild steel fabrication
                        for Construction, Interior Decoration, Marine, Power and Oil & Gas sectors.
                      </p>
                      <p className="abtparp">
                        As a multi-faceted establishment, we are continually growing, diversifying into
                        new product areas, improving on the existing ones with best quality on time and
                        servicing the ever-growing multi industrial sectors in the Gulf.
                      </p>
                      <p className="abtparp">
                        You are important to us, we therefore feel the need to register our company in your
                        esteemed organization and kindly send us your valuable enquiries. We can offer you
                        the best competitive price with best delivery. We are herewith attaching our company
                        pre-qualification documents for your records.
                      </p>
                      <p className="abtparp">
                        Assuring our best attention , Services and healthy business relation at all times.
                      </p>
                      <p className="abtparp">
                        Awaiting to receive your valued enquiries.
                        <Link to="/feedback"> Post your valuable queries</Link>
                      </p>
                      <p className="abtparp">
                        We have experienced technical team who expertise on producing ranges of products
                        in time with best quality to meet with the requirement and specification of the
                        clients.
                      </p>
                      <br />
                    </div>
                    <div className="accordinAbtUs">
                      {sections.map((section, index) => (
                        <div key={index}>
                          <h3 onClick={() => toggleSection(index)} style={{ cursor: 'pointer' }}>
                            <a href="#">{section.title}</a>
                          </h3>
                          {activeSection === index && (
                            <div>
                              {section.content}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td width="30%" valign="top" className="osa">
            <SpecialistAreas />
          </td>
        </tr>
        <tr>
          <td style={{ height: '25px' }}>
            &nbsp;
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AboutUs;
