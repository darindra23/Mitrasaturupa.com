import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "../../assets/css/owl.carousel.css";
import "../../assets/css/owl.theme.default.min.css";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.png";

export default class Clients extends Component {
  clientsslider = {
    sliders: [
      {
        img: img1,
      },
      {
        img: img2,
      },
      {
        img: img3,
      },
      {
        img: img4,
      },
      {
        img: img5,
      },
    ],
  };
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  render() {
    return (
      <section className="clients-wrapper">
        <div className="container">
          <OwlCarousel
            className="owl-theme"
            loop={true}
            autoplay={true}
            margin={10}
            dots={false}
            nav={false}
            responsive={this.state.responsive}
          >
            {this.clientsslider.sliders.map((item, index) => {
              return (
                <div className="items text-center" key={index}>
                  <img src={item.img} alt="Clients" />
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      </section>
    );
  }
}

// import React from 'react'
// import OwlCarousel from 'react-owl-carousel';
// import '../assets/css/owl.carousel.css';
// import '../assets/css/owl.theme.default.min.css';
// import img1 from '../assets/images/client1.png'
// import img2 from '../assets/images/client2.png'
// import img3 from '../assets/images/client3.png'
// import img4 from '../assets/images/client4.png'
// import img5 from '../assets/images/client5.png'

// clientsslider = {
//     sliders: [
//         {
//             img: img1
//         },
//         {
//             img: img2
//         },
//         {
//             img: img3
//         },
//         {
//             img: img4
//         },
//         {
//             img: img5
//         }
//     ]
// }

// export default function Clients() {
//     return (
//         <section className="clients-wrapper">
//             <div className="container">
//                 <OwlCarousel className="owl-theme" loop={true} autoplay={true} margin={10} dots={false} nav={false} items={5} >
//                     {this.clientsslider.sliders.map((item, index) => {
//                         return <div className="items text-center" key={index}>
//                             <img src={item.img} alt="Clients" />
//                         </div>
//                     })}
//                 </OwlCarousel>
//             </div>
//         </section>
//     )
// }
