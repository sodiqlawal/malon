import React from "react";
import './TestimonialSlick.css'
import olamide from '../../images/olamide.jpg'
import tobi from '../../images/tobi.jpg'
import damola from '../../images/damola.jpg'
import cynthia from '../../images/cynthia.jpg'
import william from '../../images/william.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faFacebook, faSkype, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab,faFacebook,faTwitter,faSkype);

class TestimonialSlick extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true
    };
    return (
      <Slider {...settings}>
        <div className="card" style={{width: "8rem;", borderRadius:"50%"}}>
          <div className="rounded-circle" style={{borderRadius:"50%"}}>
          <img src={olamide} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">CEO/PRINCIPAL CONSULTANT</h5>
            <div>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} className="ml-2"/>
            <FontAwesomeIcon icon={faSkype} className="ml-2"/>
            </div>
          </div>
        </div>        
        <div className="card" style={{width: "8rem;"}}>
          <img src={tobi} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">MOBILE DEVELOPER</h5>
            <div>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} className="ml-2"/>
            <FontAwesomeIcon icon={faSkype} className="ml-2"/>
            </div>
          </div>
        </div> 
        <div className="card" style={{width: "8rem;"}}>
          <img src={damola} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">BACKEND DEVELOPER</h5>
            <div>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} className="ml-2"/>
            <FontAwesomeIcon icon={faSkype} className="ml-2"/>
          </div>
          </div>
        </div> 
        <div className="card" style={{width: "8rem;"}}>
          <img src={cynthia} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">FRONTEND DEVELOPER(INTERN)</h5>
            <div>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} className="ml-2"/>
            <FontAwesomeIcon icon={faSkype} className="ml-2" />
            </div>
          </div>
        </div> 
        <div className="card" style={{width: "8rem;"}}>
          <img src={william} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">UI/UX DESIGNER</h5>
            <div>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} className="ml-2"/>
            <FontAwesomeIcon icon={faSkype} className="ml-2" />
            </div>
          </div>
        </div> 
      </Slider>
    );
  }
}


export default TestimonialSlick;