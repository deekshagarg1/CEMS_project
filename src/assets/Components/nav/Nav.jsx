import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";

function Nav(){
    return(
        <>

<div className="nav">
<div className="nav-left">
    <img src="/photos/mits_logo.png" alt=""/> 
    <strong>CEMS</strong>
</div>
<div className="nav-right">
    <Link to='/'><p>Home</p></Link>
    <Link to='/event'><p>Events</p></Link>
    <Link to='/about'><p>About</p></Link>
    <Link to='/contact'><p>Contact</p></Link>
    <Link to='/login'><p>Login</p></Link>
    <Link to='/register'><p>Register</p></Link>

</div>

    </div>

        </>
    )
}
export default Nav;