import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Footer = () => { 

const currentYear = new Date().getFullYear(); 

return ( 

<div id="footerContainerid" className="footerCont"> 

<div className="footercoprigt"> 
<span>Copyright © {currentYear} </span> 
<img src="/images/Common/FooterSunEmirates.png" alt="Sun Emirates" align="absMiddle" />. All rights reserved. 
</div> 

<div className="footermenu"> 

<Link to="/locationmap" className="fooLnks" title="Click here to view Location Map"> 
Location Map 
</Link> 

<span className="pipeSeparator">&nbsp;|&nbsp;</span> 

<Link to="/contact" className="fooLnks" title="Click here to view Contact Us"> 
Contact Us 
</Link> 

<span className="pipeSeparator">&nbsp;|&nbsp;</span> 

<Link to="/sitemap" className="fooLnks" title="Click here to view Sitemap"> 
Sitemap 
</Link> 

<span className="pipeSeparator">&nbsp;|&nbsp;</span> 

<Link to="/feedback" className="fooLnks" title="Click here to view Feedback"> 
Feedback 
</Link> 

</div> 

</div> 

); 

}; 

export default Footer;