import React from "react";

import Slider from "react-slick"




function Sliderrr() {
    let sliderItems = [
        {
            sliderImg: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20"
        },
        {
            sliderImg: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1e31c9d65e3b4592.jpg?q=20"
        },
        {
            sliderImg: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/345037032e3daaaf.jpg?q=20"
        },
        {
            sliderImg: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/75b8877f00fe7c6c.jpg?q=20"
        },
        {
            sliderImg: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/cc633426b89ad841.png?q=20"
        },
        {
            sliderImg: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7b4e01f6a35a98a8.jpg?q=20"
        },
    ]
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div style={{ width: "1320px" }} className="mx-auto mt-6">
            <Slider  {...settings}>
                {sliderItems.map((v, i) => {
                    return (
                        <div key={i}>
                            <img src={v.sliderImg} className="w-full h-full" />
                        </div>
                    )
                })}
            </Slider>
        </div>



    )
}
export default Sliderrr