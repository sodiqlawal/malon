import React from 'react';
import "./SideDrawer.css"

const SideDrawer = (props) => {
    // let drawerclasses = 'side-drawer';
    // if(props.clicktoggle) {
    //     drawerclasses = 'sidedrawer open'
    // }
    return (
        <>
        {
            props.clicktoggle ?
       
        <nav className="sidedrawer open">
            <ul>
                <li className="nav-item link">
                    <a className="nav-link linkchild" href="#">Home</a>
                </li>
                <li className="nav-item link">
                    <a className="nav-link linkchild" href="#">About Us</a>
                </li>
                <li className="nav-item link">
                    <a className="nav-link linkchild" href="#">Contact us</a>
                </li>
            </ul>
        </nav> :
        <div></div>
    }
    </>
    )
}


export default SideDrawer;