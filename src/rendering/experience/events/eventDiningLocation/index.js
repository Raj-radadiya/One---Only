import React from 'react'
import './dininglocation.scss'
import Slider from "react-slick";
import seaAttachnment from '../../../../assets/image/diningAttachnment.webp';
import privatediningImg from '../../../../assets/image/privatedining.webp';
import dineLocation1 from '../../../../assets/image/dininglocation1.webp';
import dineLocation2 from '../../../../assets/image/dininglocation2.webp';
import dineLocation3 from '../../../../assets/image/dinethird.webp';
export default function DiningLocation() {
    const grid = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    const grid2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className='dining'>
                <div className='diningMain'>
                    <div className='diningAttachnment'>
                        <img src={seaAttachnment} alt='sparrow' />
                    </div>
                    <div className='diningCardMain'>
                        <div className='diningLeft'>
                            <img src={privatediningImg} alt='img' />
                        </div>
                        <div className='diningRight'>
                            <div className='diningDisc'>
                                <div className='diningCardHead'>
                                    <h2>Private dining</h2>
                                </div>
                                <div className='diningCardPara'>
                                    <p>For an intimate celebration with those who matter most, discover One&Only’s exceptional private dining experiences around the world. From dinner for two on a secluded sandbar to a lavish al fresco affair on the Adriatic Riviera, let our world-renowned chefs share their culinary masterpieces in an extraordinary location, tailored just for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container4'>
                    <div className='diningSliderMain'>
                        <div className='diningSlider'>
                            <div className="slider-container">
                                <Slider {...grid}>
                                    <div className='diningSliderCard'>
                                        <div className='diningImg'>
                                            <img src={dineLocation1} alt='first' />
                                        </div>
                                        <div className='diningSliderDisc'>
                                            <div className='diningSliderHead'>
                                                <h4>Adriatic artistry</h4>
                                            </div>
                                            <div className='diningSliderPara'>
                                                <p>Framed by majestic views of Montenegro’s Boka Bay, One&Only Portonovi’s private villas become a blank canvas for your ultimate event, perfect for intimate celebrations with family and friends.</p>
                                            </div>
                                            <div className='diningSliderLink'>
                                                <a href='#'>Discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='diningSliderCard'>
                                        <div className='diningImg'>
                                            <img src={dineLocation2} alt='first' />
                                        </div>
                                        <div className='diningSliderDisc'>
                                            <div className='diningSliderHead'>
                                                <h4>Starlit celebrations</h4>
                                            </div>
                                            <div className='diningSliderPara'>
                                                <p>Dine amid twinkling lanterns overlooking shimmering waves at One&Only Le Saint Géran in Mauritius, as you savour an elevated island-inspired menu, crafted exclusively for you.</p>
                                            </div>
                                            <div className='diningSliderLink'>
                                                <a href='#'>Discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='diningSliderCard'>
                                        <div className='diningImg'>
                                            <img src={dineLocation3} alt='first' />
                                        </div>
                                        <div className='diningSliderDisc'>
                                            <div className='diningSliderHead'>
                                                <h4>Coastal glamour</h4>
                                            </div>
                                            <div className='diningSliderPara'>
                                                <p>Let your beachfront retreat become the stage for an effortlessly chic gathering at One&Only The Palm in Dubai, with Michelin-starred menus from Yannick Alléno served in the comfort of your villa.</p>
                                            </div>
                                            <div className='diningSliderLink'>
                                                <a href='#'>Discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="slider-container2">
                                <Slider {...grid2}>
                                    <div className='diningSliderCard'>
                                        <div className='diningImg'>
                                            <img src={dineLocation1} alt='first' />
                                        </div>
                                        <div className='diningSliderDisc'>
                                            <div className='diningSliderHead'>
                                                <h4>Adriatic artistry</h4>
                                            </div>
                                            <div className='diningSliderPara'>
                                                <p>Framed by majestic views of Montenegro’s Boka Bay, One&Only Portonovi’s private villas become a blank canvas for your ultimate event, perfect for intimate celebrations with family and friends.</p>
                                            </div>
                                            <div className='diningSliderLink'>
                                                <a href='#'>Discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='diningSliderCard'>
                                        <div className='diningImg'>
                                            <img src={dineLocation2} alt='first' />
                                        </div>
                                        <div className='diningSliderDisc'>
                                            <div className='diningSliderHead'>
                                                <h4>Starlit celebrations</h4>
                                            </div>
                                            <div className='diningSliderPara'>
                                                <p>Dine amid twinkling lanterns overlooking shimmering waves at One&Only Le Saint Géran in Mauritius, as you savour an elevated island-inspired menu, crafted exclusively for you.</p>
                                            </div>
                                            <div className='diningSliderLink'>
                                                <a href='#'>Discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='diningSliderCard'>
                                        <div className='diningImg'>
                                            <img src={dineLocation3} alt='first' />
                                        </div>
                                        <div className='diningSliderDisc'>
                                            <div className='diningSliderHead'>
                                                <h4>Coastal glamour</h4>
                                            </div>
                                            <div className='diningSliderPara'>
                                                <p>Let your beachfront retreat become the stage for an effortlessly chic gathering at One&Only The Palm in Dubai, with Michelin-starred menus from Yannick Alléno served in the comfort of your villa.</p>
                                            </div>
                                            <div className='diningSliderLink'>
                                                <a href='#'>Discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}