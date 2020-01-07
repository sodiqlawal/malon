import React, { Component } from "react";
import { Swiper, Slide } from 'react-dynamic-swiper'
import 'react-dynamic-swiper/lib/styles.css'
import $ from "jquery"
import { Link, animateScroll as scroll } from "react-scroll";
import { BrowserRouter as NavLink } from "react-router-dom";
import "animate.css/animate.css";
import Particles from "react-particles-js";
import Slider from "./Slider";
import ClientSlick from "./ClientSlick/ClientSlick";
import Animate from "animate.css-react";
import AOS from "aos";
import NavIcon from "./NavIcon";
import SideDrawer from "./SideDrawer";
import blackwelcome from "../images/blackwelcome.jpg";
import olamide from "../images/olamide.jpg";
import tobi from "../images/tobi.jpg";
import damola from "../images/damola.jpg";
import cynthia from "../images/cynthia.jpg";
import william from "../images/william.jpg";
import logo from "../images/logo.png";
import "./Home.css";
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
      navIconOPen: false
    };
    AOS.init();
  }


  componentDidMount(){

    // $(document).ready(function() {
    // var s1 = $(".mainsectioncontainer");
    // var s2 = $(".services");
    // var s3 = $(".teamcontainer");
    // var s4 = $(".contact");
    // var s5 = $(".footercontainer");

    // var pos = s1.position();
    // var pos2 = s2.position();
    // var pos3 = s3.position();
    // var pos4 = s4.position();
    // var pos5 = s5.position();


    // $(window).scroll(function() {    

    //   var scroll = $(window).scrollTop();
      
    //   if (scroll > 500) {
    //   $(".nav li:first-child").addClass("current");
    //   }
      
    //   if (scroll >= pos & scroll <= 1000) {
    //   // $(".nav li:first-child").removeClass("current");
    //   $(".nav li:nth-child(2)").addClass("current");
    //   }

    //   if (scroll >= pos2) {
    //     $(".nav li:nth-child(2)").removeClass("current");
    //     $(".nav li:nth-child(3)").addClass("current");
    //     }

    //   if (scroll >= pos3) {
    //     $(".nav li:nth-child(3)").removeClass("current");
    //     $(".nav li:nth-child(4)").addClass("current");
    //     }
      
    //   var scrollBottom = $(window).scrollTop() + $(window).height();
      
    //   if (scroll < 500) {
    //   $(".nav li:first-child").removeClass("current");
    //   }
      
    //   if (scroll < 750) {
    //   $(".nav li:nth-child(2)").removeClass("current");
    //   }
      
    //   });
    // });
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
    let date = new Date().getFullYear();
    const {pathRoute} = this.props
    return (
      // container
      <React.Fragment>
        <div className="fragment" id="home">
          <Particles className="particles" params={particleOPtions} />
          {/* start slider */}
          <Slider />
          {/* end slider */}
          {/* start header */}
          <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
              <img src={logo} alt="logo" className="imagelogo" />

              <div className="shownav">
                <ul className="nav">
                  <li className="nav-item">
                    <button className=" btn nav-link shownav-link home"
                    onClick={()=>pathRoute("home")}>
                      {/* <Link 
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      > */}
                      {/* <NavLink to="/" exact>     */}
                      Home
                      {/* </NavLink> */}
                      {/* </Link> */}
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn nav-link shownav-link aboutlinkhover"
                      style={{ backgroundColor: "transparent" }}
                      onClick={()=>pathRoute("about")}
                    >
                      {/* <NavLink to="/about" */}
                      {/* > */}
                        About Us
                      {/* </NavLink> */}
                    </button>
                  </li>
                  <li className="nav-item white">
                    <Link 
                    activeClass="active"
                    to="service"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link shownav-link pointer">
                      Service
                    </Link>
                  </li>
                  <li className="nav-item white">
                    <Link 
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="nav-link shownav-link pointer">
                      Contact Us
                    </Link>
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
          {/* start mainwelcome */}
          <Animate appear="fadeIn" durationAppear={2000} component="div">
            <main className="mainwelcome text-center my-4">
              <section className="my-auto">
                <h2 className="welcometitle">
                  {" "}
                  Welcome To Malon Global Technologies{" "}
                </h2>
                <p className="px-4">
                  Malon Global Technologies Limited (Branded as Malon Tech)
                  brings forward years of knowledge, experience, and doggedness,
                  and utilizes them to provide its clients with value-added
                  benefits.
                </p>
              </section>
              <img
                src={blackwelcome}
                alt="welcome"
                className="welcome image mx-auto"
              />
            </main>
          </Animate>
          {/* end mainwelcome */}

          <main className="main mainsectioncontainer my-5">
            <section className="mainsection">
              <h3 className="text-center mainsectiontitle pt-5">
                Our Mission and Vision
              </h3>
            </section>
            <section className="sectionproduct mt-3 px-2 d-flex">
              <div className="product">
                <div>
                  <strong style={{ fontSize: "1.5rem" }}> Our Vision</strong>
                  <p style={{ textAlign: "start" }}>
                    To become the leading edge IT Solutions Provider in Africa
                    and the world at large by creating high quality products and
                    services, and partnering with the most renowned suppliers of
                    products needed in order to fulfill our client’s
                    expectations and achieve measurable advantage.
                  </p>
                </div>
              </div>
              <div className="product">
                <div></div>
                <div>
                  <strong className="" style={{ fontSize: "1.5rem" }}>
                    Our Mission
                  </strong>
                  <p style={{ textAlign: "start" }}>
                    To provide IT Solutions to modern day problems, thereby
                    fostering ease of doing business, and becoming a strategic
                    partner to our clients through adherence to best practices
                    and quality service delivery.
                  </p>
                </div>
              </div>
            </section>
          </main>

          {/* start services */}
          <section className="services" id="service"> 
            <div className="section-title text-center">
              <strong className="section-title_name text-secondary">
                WHAT WE DO
              </strong>
            </div>
            <div className="services_center">
              <article className="services_single-service">
                <div className="services_single-service-icon">
                  <FontAwesomeIcon icon={faRocket} />
                </div>
                <h5 className="services_single-service-title">
                  ICT INFRASTRUCTURE SOLUTIONS & SERVICES
                </h5>
                <p className="services_single-service-text">
                  Building and deploying IT Infrastructure to support your
                  business processes or personal need is pertinent to enhancing
                  performance.
                </p>
                <ul className="services_single-service-text wow fadeInUp" data-wow-delay="0.3s">
                  <li>
                    Hardware: <br />
                    Physical hardware, Servers, Storages, network
                    infrastructures, Desktops, laptops and many more. Devices
                    that helps improve IT operations.
                  </li>
                  <li>
                    Network Administration and Management: <br />
                    With the wide array of equipment, processes, and standards
                    available to keep your networks working, we create the
                    balance and bring to fore best practices to ensure your
                    network is properly managed to increase the uptime.
                  </li>
                </ul>
              </article>
              <article className="services_single-service">
                <div className="services_single-service-icon wow fadeInUp">
                  <FontAwesomeIcon icon={faMobile} />
                </div>
                <h5 className="services_single-service-title wow fadeInUp">
                  WEB & MOBILE SOLUTIONS
                </h5>
                <div className="services_single-service-text wow fadeInUp" data-wow-delay="0.2s">
                  <li>
                    Cross Platform Application <br />
                    We build and deploy applications to work effectively on
                    various platforms and devices, while creating a seamless
                    blend between functionality and astute design.
                  </li>
                  <li>
                    Web Applications <br />
                    Creating web applications that proffer solutions to
                    real-life problems is our forte, cutting across various
                    sectors and human endeavor (Health, Finance, Agriculture,
                    Education, Arts&Craft, Media, Non-Profit, Legal, and
                    Oil&Gas, amongst so many others)
                  </li>
                  <li>
                    Custom Web Development <br />
                    If you can conceive it, we can design or develop it.
                  </li>
                </div>
              </article>
              <article className="services_single-service">
                <div className="services_single-service-icon wow fadeInUp">
                  <FontAwesomeIcon icon={faCogs} />
                </div>
                <h5 className="services_single-service-title wow fadeInUp">
                  SOLUTION DEVELOPMENT
                </h5>
                <p className="services_single-service-text wow fadeInUp" data-wow-delay="0.2s">
                  We critically evaluate and select ideas, and make an
                  assessment as to how well they will perform against certain
                  criteria such as capital cost, speed of delivery, level of
                  risk, business/task ease. Solutions are therefore Developed
                  and deployed.
                </p>
              </article>
              <article className="services_single-service">
                <div className="services_single-service-icon wow fadeInUp">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
                <h5 className="services_single-service-title wow fadeInUp">
                  IT CONSULTANCY AND SUPPORT
                </h5>
                <p className="services_single-service-text wow fadeInUp" data-wow-delay="0.2s">
                  Our dedicated, unrelenting, and experienced team is always
                  available to walk you through your IT journey, cutting across
                  Infrastructure and solutions.
                </p>
                <div className="services_single-service-text pt-2 wow fadeInUp" data-wow-delay="0.3s">
                  <strong>Our Consultancy services include: -</strong>
                  <ul>
                    <li>ICT Infrastructure Solutions and Services</li>
                    <li>Web and Mobile Solutions</li>
                    <li>Solution Development</li>
                  </ul>
                </div>
              </article>
            </div>
          </section>
          {/* end services */}
          {/* start projectgrid */}
          <main className="maingrid">
            <section>
              <h5 className="maingridtitle mb-4">Our Clientele</h5>
            </section>
            <section className="Clientelegrid">
              <ClientSlick />
            </section>
          </main>

          {/* start team */}
          <div className="teamcontainer">
            <h2 className="teamtitle text-center">Our Team</h2>
            <div className="teamgrid">
              {/* start first */}
              <div className="one mb-2">
                <img src={olamide} alt="" style={{borderRadius:"100%", height:"250px", width:"250px"}}/>
                <h5 className="mt-2 text-center">Olamide</h5>
                <p style={{textAlign:"center", marginTop:"-0.5rem"}}>CEO/Principal Consultant</p>
                <div></div>
              </div>
              {/* end first */}
              {/* start second */}
              <div className="two mb-2">
                <img src={tobi} alt="" style={{borderRadius:"100%", height:"250px", width:"250px"}}/>
                <h5 className="mt-2 text-center">Tobi</h5>
                <p style={{textAlign:"center", marginTop:"-0.5rem"}}>Mobile developer</p>
                <div></div>
              </div>
              {/* end second */}
              {/* start third */}
              <div className="three mb-2">
                <img src={damola} alt="" style={{borderRadius:"100%", height:"250px", width:"250px"}}/>
                <h5 className="mt-2 text-center">Damola</h5>
                <p style={{textAlign:"center", marginTop:"-0.5rem"}}>Backend Developer</p>
                <div></div>
              </div>
              {/* end third */}
              {/* start fourth */}
              <div className="four mb-2">
                <img src={cynthia} alt="" style={{borderRadius:"100%", height:"250px", width:"250px"}}/>
                <h5 className="mt-2 text-center">Cynthia</h5>
                <p style={{textAlign:"center", marginTop:"-0.5rem"}}>Frontend Developer(Intern)</p>
                <div></div>
              </div>
              {/* end fourth */}
              {/* start fifth */}
              <div className="five mb-2">
                <img src={william} alt="" style={{borderRadius:"100%", height:"250px", width:"250px"}}/>
                <h5 className="mt-2 text-center">William</h5>
                <p style={{textAlign:"center", marginTop:"-0.5rem"}}>UI Designer</p>
                <div></div>
              </div>
              {/* end fifth */}
              {/* start sixth */}
              <div className="five mb-2">
                <img src={'https://ca.slack-edge.com/T9Q2CKC4V-UE1FGDJC8-a8c316792668-512'} alt="" style={{borderRadius:"100%", height:"250px", width:"250px"}}/>
                <h5 className="mt-2 text-center">Sodiq</h5>
                <p style={{textAlign:"center", marginTop:"-0.5rem"}}>Frontend Developer</p>
                <div></div>
              </div>
              {/* end sixth */}
            </div>
          </div>
          {/* end team */}

          {/* contact section */}
          <section className="contact text-center" id="contact">
            {/* section title */}
            <div className="contact-title">
              <h1 className="contact-title_name">Work with us</h1>
              <p className="contact-title_text">
                Malon global is about delivering the best product to our
                clients. Write a few lines on how we can help you. We will
                respond back to you in a couple of hours.
              </p>
            </div>
            {/* end of section title */}
            <div className="contact_center">
              <form>
                {/* form header */}
                <div className="contact_header">
                  <input
                    type="text"
                    placeholder="Name"
                    className="contact_name"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="contact_email"
                  />
                </div>
                {/* form textarea */}
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="How can we help you?"
                  className="contact_textarea"
                ></textarea>
                <button type="submit" className="contact_btn btn wow fadeInUp" data-wow-delay="0.2s">
                  Submit
                </button>
              </form>
            </div>
          </section>
          {/* end of contact section */}

          {/* end mainproduct */}
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
              {/* start sitemap */}
              <div className="text-white py-2 footercontainertext">
                <strong>Headquarters</strong>
                <p>
                  No. 4, Law Close Extension, <br />
                  Unilag Estate, Magodo <br />
                  Phase1,
                  <br /> Lagos, Nigeria.
                </p>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faEnvelope} className="my-1" />
                  <p className="ml-1 malontext">
                    info@malonglobalTechnologies.com
                  </p>
                </div>
                <div className="d-flex my-0 py-0 malontext">
                  <FontAwesomeIcon icon={faPhoneSquareAlt} className="my-1" />
                  <p className="ml-1">07-00-0000</p>
                </div>
              </div>
              {/* end sitemap */}
              {/* start footertop */}
              <div className="footertop">
                <img src={logo} alt="logo" className="imagelogofoot my-3" />
                <div className="footertopnote">
                  <p className="text-white">
                    To get latest update from our latest articles, subscribe to
                    our page now
                  </p>
                  <form action="https://gmail.us4.list-manage.com/subscribe/post?u=f1ca8176cff5519d851b0cc53&amp;id=eb151166c4" method="post" target="_blank" className="validate" noValidate>
                  <div className="input-group mb-3 aria-hidden='true'">
                    <input
                      type="email"
                      className="form-control subscribesearch"
                      placeholder="Enter your email"
                      aria-label="Enter your email"
                      aria-describedby="basic-addon2"
                      required
                    />

                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_f1ca8176cff5519d851b0cc53_eb151166c4" tabIndex="-1" value="" /></div>
                    <div className="input-group-append">
                      <input
                        type="submit"
                        className="input-group-text btn text-white pointer"
                        id="basic-addon2"
                        value="Subscribe"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                      />
                    </div>
                  </div>
                  </form>
                </div>
              </div>
              {/* end footertop */}
            </div>
            {/* end sitemapsubscribe */}
            {/* start footerbottom */}
            <div className="footer py-4 px-2">
              <p className="footertext text-light">
                {" "}
                &copy; <b className="date">{date}</b>, Malon Inc.All rights
                reserved.Terms, Privacy, Copyright, & Cookies
              </p>
              <section className="footersection">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="footersectionicon mx-3"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="footersectionicon"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="footersectionicon mx-3"
                />
              </section>
            </div>
            {/* end footerbottom */}
          </footer>
          {/* end footer */}
      
{/* <div id="mc_embed_signup">
<form action="https://gmail.us4.list-manage.com/subscribe/post?u=f1ca8176cff5519d851b0cc53&amp;id=eb151166c4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required />

    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_f1ca8176cff5519d851b0cc53_eb151166c4" tabindex="-1" value="" /></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>
    </div>
</form>
</div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
