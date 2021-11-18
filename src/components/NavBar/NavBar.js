import React from 'react';
import { Link } from "react-router-dom";

import {BsEnvelope} from "react-icons/bs";

import "./index.css";

function NavBar(props) {
    return (
        <nav className="nav">
            <div className="logo">
            <h1 >mailing-system</h1><BsEnvelope className="logo-icon" />
            </div>
            <ul className="nav-list">
                <li><Link to="/subscribers">Subscribers</Link></li>
                <li> <Link to="/add-subscriber">Add Subscriber</Link></li>
                <li> <Link to="/campaign">Campaign</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;