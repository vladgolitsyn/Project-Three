import React, { Component } from "react";
import Slider from "react-slick";
import pic5b from "../../images/005b.png";
import pic3b from "../../images/003b.png";
import pic42 from "../../images/0042.png"


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
        <Slider {...settings} className='slider'>
          {/* <Image src={pic} /> */}

          <div>
            <Image src={pic42} />
          </div>
          <div>
            <Image src={pic3b} />
          </div>
          <div>
            <Image src={pic5b} />
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

