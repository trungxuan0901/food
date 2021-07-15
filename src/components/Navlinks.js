import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

function Navlinks() {
    return (
        <div className="navlinks">
            <div className="navlinks__outer">
                <div className="navlinks__inner">
                    <Link to="/" className="text-danger">Home</Link>
                    <Link to="/detailsProduct" className="text-warning">Menu</Link>
                    <Link to="/services" className="text-warning">Service</Link>
                    <Link to="/comments" className="text-warning">Customer Reviews</Link>
                </div>
            </div>
        </div>
    )
}

export default Navlinks;
