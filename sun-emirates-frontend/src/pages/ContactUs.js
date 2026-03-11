import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {

const [formData, setFormData] = useState({
name:"",
phone:"",
email:"",
message:""
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = async (e) => {

e.preventDefault();

try{

await axios.post("http://localhost:5000/api/contact/send",formData);

alert("Message Sent Successfully!");

setFormData({
name:"",
phone:"",
email:"",
message:""
});

}catch(error){

alert("Error sending message");

}

};

return(

<div className="pageCntsContainer">

<span className="PageHeader">Contact Us</span>

<div style={{textAlign:"center",marginBottom:"20px"}}>
<img
src="/images/Common/contactus.png"
alt="Contact"
style={{maxWidth:"100%"}}
/>
</div>

<div style={{display:"flex",justifyContent:"center"}}>

<table cellPadding="8">

<tbody>

<tr>
<td>Company Name :</td>
<td>SUN EMIRATES MECHANICAL WORKS LLC</td>
</tr>

<tr>
<td>Address :</td>
<td>P.O.Box : 14655, Ajman - U.A.E.</td>
</tr>

<tr>
<td>Telephone :</td>
<td>+971-6-7481646</td>
</tr>

<tr>
<td>Mobile :</td>
<td>+971-50-7743556</td>
</tr>

</tbody>

</table>

</div>

{/* Contact Form */}

<div style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>

<form onSubmit={handleSubmit} style={{width:"350px"}}>

<input
type="text"
name="name"
placeholder="Your Name"
value={formData.name}
onChange={handleChange}
required
style={{width:"100%",padding:"8px",marginBottom:"10px"}}
/>

<input
type="text"
name="phone"
placeholder="Phone Number"
value={formData.phone}
onChange={handleChange}
required
style={{width:"100%",padding:"8px",marginBottom:"10px"}}
/>

<input
type="email"
name="email"
placeholder="Email"
value={formData.email}
onChange={handleChange}
required
style={{width:"100%",padding:"8px",marginBottom:"10px"}}
/>

<textarea
name="message"
placeholder="Message"
rows="4"
value={formData.message}
onChange={handleChange}
required
style={{width:"100%",padding:"8px",marginBottom:"10px"}}
/>

<button className="btnSubmit" type="submit">
Send Message
</button>

</form>

</div>

{/* Google Map */}

<div style={{marginTop:"40px",textAlign:"center",paddingBottom:"40px"}}>

<h3>Our Location</h3>

<iframe
title="Sun Emirates Map"
src="https://www.google.com/maps?q=25.4136,55.5136&z=16&output=embed"
width="80%"
height="350"
style={{border:"0"}}
loading="lazy"
/>

<br/><br/>

<a
href="https://maps.app.goo.gl/LG6k1wxa6SCuatyp9"
target="_blank"
rel="noopener noreferrer"
style={{
background:"#1a73e8",
color:"#fff",
padding:"10px 18px",
textDecoration:"none",
borderRadius:"6px",
fontSize:"14px",
fontWeight:"bold",
display:"inline-block",
marginTop:"10px"
}}
>
Open in Google Maps
</a>

</div>

</div>

);

};

export default ContactUs