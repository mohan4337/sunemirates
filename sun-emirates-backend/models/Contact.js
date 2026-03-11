const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

router.post("/send", async (req, res) => {

try {

const { name, phone, email, message } = req.body;

/* Save to MongoDB */

const newContact = new Contact({
name,
phone,
email,
message
});

await newContact.save();

/* Send Email */

const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
user: "yourgmail@gmail.com",
pass: "your_app_password"
}
});

const mailOptions = {
from: email,
to: "yourgmail@gmail.com",
subject: "New Contact Message - Sun Emirates Website",
html: `
<h3>New Contact Message</h3>
<p><b>Name:</b> ${name}</p>
<p><b>Phone:</b> ${phone}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Message:</b> ${message}</p>
`
};

await transporter.sendMail(mailOptions);

res.status(200).json({ message: "Message sent successfully" });

} catch (error) {

console.error(error);
res.status(500).json({ message: "Error sending message" });

}

});

module.exports = router;