import React, { Component } from "react";
import Slider from "react-slick";
import pic5b from "../../images/005b.png";
import picHands from "../../images/Concert-desktop.jpg";
import picArena from "../../images/arena.jpg";
import "./style.css";

import { Image } from "semantic-ui-react";

export class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      autoplay: true,
      dots: true,
      slidesToShow: 1

      // slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings} className="slider">
          {/* <Image src={pic} /> */}

          <div>
            <Image className="slider-image" src={picHands} />
          </div>
          <div>
            <Image className="slider-image" src={picArena} />
          </div>
          <div>
            <Image className="slider-image" src={pic5b} />
          </div>

          {/* <div>
            <img src="/img/" alt="" />
          </div> */}
        </Slider>
      </div>
    );
  }
}
export default SimpleSlider;
