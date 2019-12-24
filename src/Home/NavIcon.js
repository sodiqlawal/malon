import React from "react";
import "./NavIcon.css";

const NavIcon = (props) => {
    return (
        <button onClick={props.togglebutton} className="togglebutton">
            <div className="togglebuttonline"></div>
            <div className="togglebuttonline"></div>
            <div className="togglebuttonline"></div>
        </button>
    )
}


export default NavIcon;