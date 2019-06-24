import React, { Component } from "react";
import Slider from "react-slick";
import pic from "../../images/005.jpg";
import pic1 from "../../images/001.jpg";
import pic2 from "../../images/003.jpg";

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
      infinite: true,
      slidesToShow: 1
      // slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          {/* <Image src={pic} /> */}

          <div>
            <Image src={pic1} />
          </div>
          <div>
            <Image src={pic} />
          </div>
          <div>
            <Image src={pic2} />
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
