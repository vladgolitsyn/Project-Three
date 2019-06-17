import React, { Component } from "react";
import Slider from "react-slick";
// import pic from "../images/005.jpg";
// import { Image } from "semantic-ui-react";

export class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear"
    };
    return (
      <div>
        <h3> Image slider with one item at a time</h3>
        <Slider {...settings}>
          {/* <Image src={pic} /> */}

          <div>
            <img src="/img/" alt="" />
          </div>
          <div>
            <img src="/img/" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
export default SimpleSlider;
