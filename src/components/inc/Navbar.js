import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-light cust-navbar">
            <div class="container ">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav -auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/settings" class="nav-link active nav-links">
                                <img src={require(`../images/icons/icons8-settings-100.png`)} width={30}></img>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/notifications" class="nav-link active nav-links">
                                <img src={require(`../images/icons/icons8-notification-100.png`)} width={30}></img>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/messages" class="nav-link active nav-links">
                                <img src={require(`../images/icons/icons8-group-message-100.png`)} width={30}></img>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="custLogo">
                    <Link to="/" class="navbar-brand ">
                        <img
                            src={require(`../images/logo.png`)}
                            width={300}
                        ></img>
                    </Link>
                </div>
                <h6>THISURA THEBUWANA</h6>
                <img src={require(`../images/icons/icons8-male-user-100.png`)} width={70}></img>
            </div>
        </nav>
        //       
    );
}

export default Navbar;