import React from 'react';
import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <nav>
            <ul>
                <Link to="/">Subscribers</Link>
                <Link to="/add-subscriber">Add Subscriber</Link>
                <Link to="/campaign">Campaign</Link>
            </ul>
        </nav>
    );
}

export default NavBar;