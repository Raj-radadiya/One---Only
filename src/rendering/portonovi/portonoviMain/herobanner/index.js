import React from 'react'
import './herobanner.scss'
import Slider from "react-slick";
import HotelAvailablity from '../../../../layout/hotelAvailablity';
import portonoviFirst from '../../../../assets/image/portonoviherobanner1.webp';
import portonoviSecond from '../../../../assets/image/portonoviherobanner2.webp';
import portonoviThird from '../../../../assets/image/portonoviherobanner3.webp';
import portonoviForth from '../../../../assets/image/portonoviherobanner4.webp';
export default function PortonoviHerobanner() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };
    return (
        <div>
            <div className='portonoviBannerMain'>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className='portonoviBannerFirst'>
                            <div className='portonoviBannerImg'>
                                <img src={portonoviFirst} alt='banner' />
                            </div>
                            <div className='portonoviSliderText animate__animated animate__fadeInRight wow'>
                                <h1>One&Only Portonovi Luxury Resort</h1>
                                <p>Where the open waters of the Adriatic meet Montenegro’s Black M ountains, the sheltered haven of Boka Bay provides an idyllic setting for One&Only Portonovi.</p>
                            </div>
                        </div>
                        <div className='portonoviBannerFirst'>
                            <div className='portonoviBannerImg'>
                                <img src={portonoviSecond} alt='banner' />
                            </div>
                            <div className='portonoviSliderText animate__animated animate__fadeInRight wow'>
                                <h1>OnePioneering wellness</h1>
                                <p>Embark on a Chenot Espace wellness programme or simply enjoy the beautiful spa facilities.</p>
                                <button className='btn'>explore</button>
                            </div>
                        </div>
                        <div className='portonoviBannerFirst'>
                            <div className='portonoviBannerImg'>
                                <img src={portonoviThird} alt='banner' />
                            </div>
                            <div className='portonoviSliderText animate__animated animate__fadeInRight wow'>
                                <h1>Signature cuisine</h1>
                                <p>A curated collection of local and international flavours.</p>
                                <button className='btn'>explore</button>
                            </div>
                        </div>
                        <div className='portonoviBannerFirst'>
                            <div className='portonoviBannerImg'>
                                <img src={portonoviForth} alt='banner' />
                            </div>
                            <div className='portonoviSliderText animate__animated animate__fadeInRight wow'>
                                <h1>One&Only Portonovi Private Homes</h1>
                                <p>Explore our exceptional collection of One&Only Portonovi Private Homes, available to purchase or stay.</p>
                                <button className='btn'>explore</button>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='hotelAvailablity'>
                <HotelAvailablity />
            </div>
        </div>
    )
}
