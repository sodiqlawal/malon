import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "animate.css/animate.css";
import Particles from 'react-particles-js';
import Slider from '../Home/Slider'
import AOS from "aos";
import NavIcon from "../Home/NavIcon";
import SideDrawer from "../Home/SideDrawer";
import logo from "../images/logo.png";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fas,
  faEnvelopeOpenText,
  faMapMarkerAlt,
  faSearch,
  faUsers,
  faThumbsUp,
  faEdit,
  faTrophy,
  faMobile,
  faRocket,
  faCogs,
  faLaptop,
  faCamera,
  faCalendarAlt,
  faPlane,
  faPhoneSquareAlt,
  faCode,
  faGripVertical
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  fab,
  faFacebook,
  faInstagram,
  faTwitter,
  faBattleNet,
  faUikit,
  faSkype
} from "@fortawesome/free-brands-svg-icons";
library.add(
  fas,
  fab,
  faEnvelopeOpenText,
  faMapMarkerAlt,
  faSearch,
  faFacebook,
  faInstagram,
  faTwitter,
  faUsers,
  faThumbsUp,
  faEdit,
  faTrophy,
  faRocket,
  faMobile,
  faCogs,
  faLaptop,
  faCamera,
  faCalendarAlt,
  faPlane,
  faEnvelope,
  faPhoneSquareAlt,
  faCode,
  faGripVertical,
  faUikit
);

const particleOPtions = {
  particles: {
    // line_linked: {
    // 	shadow: {
    // 		enable: true,
    // 		color: "#3CA9D1",
    // 		blur: 5
    // 	}
    // }
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navIconOPen: false,
    };
    AOS.init();
  }


  // lifecycle to execute aos
  componentWillReceiveProps() {
    AOS.refresh();
  }

  // to toggle the navicon collapse button
  NavIconToggleClickHandler = () => {
    this.setState(prevState => {
      return { navIconOPen: !prevState.navIconOPen };
    });
  };

  

  render() {
    let date = new Date().getFullYear()
    return (
      // container
      <React.Fragment className="fragment">
        <Particles className="particles"
              params={particleOPtions}
        />
        {/* start slider */}
        <Slider />
        {/* end slider */}
        {/* start header */}
        <div className="header">
        {/* <Particles className="particles"
              params={particleOPtions}
        /> */}
          <nav className="navbar navbar-expand-lg navbar-light">
            {/* <a className="navbar-brand text-danger text-slanted" href="#">
              Malon
            </a> */}
			<img src={logo} alt="logo" className="imagelogo" />

            <div className="shownav">
              <ul className="nav">
              <li className="nav-item">
                  <button className=" btn nav-link shownav-link aboutlinkhover" style={{background:"transparent"}}>
                  <Link exact to="/" className="">
                    Home
                  </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn nav-link shownav-link about">
                  <Link to="/about" className="">
                    About
                  </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <a className="nav-link shownav-link" href="#">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link shownav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link shownav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <NavIcon togglebutton={this.NavIconToggleClickHandler} />
          </nav>
        </div>
        {/* end header */}
        {/* start startdrawer */}
        <div>
          <SideDrawer clicktoggle={this.state.navIconOPen} />
        </div>
        {/* end sidedrawer */}

        {/* start about */}
        <div className="p-5">
            <h3 className="my-3">About Us</h3>
            <p className="mt-4">Malon Global Technologies Limited (Branded as Malon Tech) brings forward years of knowledge, experience, and doggedness, and utilizes them to provide its clients with value-added benefits. Since registered in 2011, the target was to offer unique and niche solutions with great added value.
            The Company’s core business areas include development of deployment of IT solutions across various sectors of human endeavors and businesses.<br/><br/>

            Malon Tech delivers much more than just technology, it’s objective is to fully understand the customers’ business processes and to deliver significant added value to its customers by developing solutions that dramatically reduce their costs and enhance their ability to adapt to changes in their markets. <br/><br/>

            Malon Tech’s services and solutions are versified. Merging them all brings forward a unique and valuable offering in business enhancement. This covers aspects such as building the right process, automating them and launching them into international marketplace while using best practices and international standards as guidelines to ensure qualitative service delivery.
            In more ways than one, Malon Tech is a one stop-shop for any establishment’s complete technology needs.
        </p>
        </div>
        {/* end about */}

        {/* start footer */}
		<footer className="footercontainer bg-secondary">


      {/* start sitemapsubscribe */}
    <div className="d-flex footercontainertop">
      {/* start about section */}
      <div className="footeraboutcontainer py-3">
        <ul className="text-white footeraboutlists">
          <li className="footeraboutlist">About Us</li>
          <li className="footeraboutlist">Contact Us</li>
          <li className="footeraboutlist">Career</li>
          <li className="footeraboutlist">Terms and Policies</li>
        </ul>
      </div>
      {/* end about section */}
      {/* start sitemap */}
      <div className="text-white py-2 footercontainertext">
        <strong>Headquarters</strong>
        <p>No. 4, Law Close Extension, <br/>Unilag Estate, Magodo <br/>Phase1,<br/> Lagos, Nigeria.</p>
        <div className="d-flex">
          <FontAwesomeIcon icon={faEnvelope} className="my-1" />
          <p className="ml-1 malontext">info@malonglobalTechnologies.com</p>
        </div>
        <div className="d-flex my-0 py-0 malontext">
          <FontAwesomeIcon icon={faPhoneSquareAlt} className="my-1" />
          <p className="ml-1">07-00-0000</p>
        </div>
      </div>
      {/* end sitemap */}
        {/* start footertop */}
		<div className="footertop">
			{/* <div>
				<strong className="text-slanted f-700 text-white">Malon</strong>
			</div> */}
			<img src={logo} alt="logo" className="imagelogofoot my-3" />
			<div className="footertopnote">
				<p className="text-white">To get latest update from our latest articles, subscribe to our page now</p>
				<div className="input-group mb-3">
					<input type="text" className="form-control subscribesearch" placeholder="Enter your username" aria-label="Enter your username" aria-describedby="basic-addon2" />
					<div className="input-group-append">
						<span className="input-group-text btn text-white pointer" id="basic-addon2">Subscribe</span>
					</div>
				</div>
			</div>
		</div>
		{/* end footertop */}
    </div>
    {/* end sitemapsubscribe */}
              {/* start footerbottom */}
              <div className="footer py-4 px-2">
          <p className="footertext text-light">
            {" "}
            &copy; <b className="date">{date}</b>, Malon Inc.All rights reserved.Terms, Privacy,
            Copyright, & Cookies
          </p>
          <section className="footersection">
            <FontAwesomeIcon
              icon={faFacebook}
              className="footersectionicon mx-3"
            />
            <FontAwesomeIcon icon={faInstagram} className="footersectionicon" />
            <FontAwesomeIcon
              icon={faTwitter}
              className="footersectionicon mx-3"
            />
          </section>
        </div>
       {/* end footerbottom */}
		</footer>
        {/* end footer */}
      </React.Fragment>
    );
  }
}

export default Home;
