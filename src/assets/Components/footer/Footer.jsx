import React from "react";
import'./Footer.css';

function Footer(){
    return(
        <>
<div className="footer-main">

<div className="footer-top">
    <div className="footer-top-right">
      <div className="f-logo">
          <img src="https://ams.mitsgwalior.in/images/mits.png" alt="" /><h3>CEMS</h3>
      </div>
        <br />
        <p>Streamline your campus events with our comprehensive management platform</p>
    </div>
    <div className="footer-top-left">
        <div className="f-l">
            <strong>Quick Link</strong>
            <p>  Browse Events</p>
            <p>About Us</p>
            <p>Contact</p>
        </div>
          <div className="f-l">
            <strong>For Students</strong>
            <p>Create Account</p>
            <p>Sign In</p>
            <p>My Dashboard</p>
        </div>
          <div className="f-l">
            <strong>Support</strong>
            <p>Help Center</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>
    </div>
    </div>
<div className="footer-bottom">© 2025 CEMS. All rights reserved.</div>


</div>
        </>
    )
}
export default Footer;