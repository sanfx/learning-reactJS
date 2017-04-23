import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div  className="navbar navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">{props.homeLink}</a></li>
                            <li><a href="#">{props.other}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
}