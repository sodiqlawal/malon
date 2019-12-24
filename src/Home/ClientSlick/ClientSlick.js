import React from "react";
import './ClientSlick.css'
import auditor from '../../images/auditor.png'
import federal from '../../images/federal.png'
import national from '../../images/national.png'
import srh from '../../images/srh.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class ClientSlick extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
    };
    return (
      <Slider {...settings} style={{padding:"2rem auto", width:"90%"}}>       
        <div className="ml-2"><img src={auditor} alt="" style={{width:"200px",height:"100px"}}/></div>
        <div className="ml-2"><img src={federal} alt="" style={{width:"200px",height:"100px"}} /></div>
        <div className="ml-2"><img src={national} alt="" style={{width:"200px",height:"100px"}} /></div>
        <div className=""><img src={srh} alt="" style={{width:"200px",height:"100px"}} /></div>
      </Slider>
    );
  }
}


export default ClientSlick;