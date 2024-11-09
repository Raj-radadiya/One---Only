import React from 'react'
import './destination.scss'
import Slider from "react-slick";
import WellnessDestination1 from '../../../../assets/image/wellnessDesination1.webp';
import WellnessDestination2 from '../../../../assets/image/wellnessDesination2.webp';
import WellnessDestination3 from '../../../../assets/image/wellnessDesination3.webp';
import WellnessDestination4 from '../../../../assets/image/wellnessDesination2.webp';
import encient from '../../../../assets/image/encientImg.webp';
export default function WellnessDestination() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
    }
    var settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.2,
        slidesToScroll: 1,
        initialSlide: 0,
    }
    var settings3 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        initialSlide: 0,
    }
    return (
        <div>
            <div className='container3'>
                <div className='wellnessDestinationHead'>
                    <h2>Featured destinations</h2>
                </div>
                <div className='wellnessDestinstionMain'>
                    <div className='container2'>
                        <div className='wellnessDestinstionSlider'>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className='wellnessDestinstionSliderCard'>
                                        <div className='wellnessDestinstionSliderImg'>
                                            <img src={WellnessDestination1} alt='img' />
                                        </div>
                                        <div className='wellnessDestinstionSliderDetails'>
                                            <div className='wellnessDestinstionSliderLocationName'>
                                                <h4>Longevity Hub, Dubai</h4>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationDetails'>
                                                <p>Unlock your full potential at the Longevity Hub by Clinique La Prairie at One&Only One Za'abeel, Dubai, engineered to maximise your health, performance and physical appearance.</p>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='wellnessDestinstionSliderCard'>
                                        <div className='wellnessDestinstionSliderImg'>
                                            <img src={WellnessDestination2} alt='img' />
                                        </div>
                                        <div className='wellnessDestinstionSliderDetails'>
                                            <div className='wellnessDestinstionSliderLocationName'>
                                                <h4>Longevity Hub, Dubai</h4>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationDetails'>
                                                <p>Unlock your full potential at the Longevity Hub by Clinique La Prairie at One&Only One Za'abeel, Dubai, engineered to maximise your health, performance and physical appearance.</p>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='wellnessDestinstionSliderCard'>
                                        <div className='wellnessDestinstionSliderImg'>
                                            <img src={WellnessDestination3} alt='img' />
                                        </div>
                                        <div className='wellnessDestinstionSliderDetails'>
                                            <div className='wellnessDestinstionSliderLocationName'>
                                                <h4>Longevity Hub, Dubai</h4>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationDetails'>
                                                <p>Unlock your full potential at the Longevity Hub by Clinique La Prairie at One&Only One Za'abeel, Dubai, engineered to maximise your health, performance and physical appearance.</p>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='wellnessDestinstionSliderCard'>
                                        <div className='wellnessDestinstionSliderImg'>
                                            <img src={WellnessDestination4} alt='img' />
                                        </div>
                                        <div className='wellnessDestinstionSliderDetails'>
                                            <div className='wellnessDestinstionSliderLocationName'>
                                                <h4>Longevity Hub, Dubai</h4>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationDetails'>
                                                <p>Unlock your full potential at the Longevity Hub by Clinique La Prairie at One&Only One Za'abeel, Dubai, engineered to maximise your health, performance and physical appearance.</p>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="slider-container2">
                                <Slider {...settings2}>
                                    <div className='wellnessDestinstionSliderCard'>
                                        <div className='wellnessDestinstionSliderImg'>
                                            <img src={WellnessDestination1} alt='img' />
                                        </div>
                                        <div className='wellnessDestinstionSliderDetails'>
                                            <div className='wellnessDestinstionSliderLocationName'>
                                                <h4>Longevity Hub, Dubai</h4>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationDetails'>
                                                <p>Unlock your full potential at the Longevity Hub by Clinique La Prairie at One&Only One Za'abeel, Dubai, engineered to maximise your health, performance and physical appearance.</p>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='wellnessDestinstionSliderCard'>
                                        <div className='wellnessDestinstionSliderImg'>
                                            <img src={WellnessDestination2} alt='img' />
                                        </div>
                                        <div className='wellnessDestinstionSliderDetails'>
                                            <div className='wellnessDestinstionSliderLocationName'>
                                                <h4>Longevity Hub, Dubai</h4>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationDetails'>
                                                <p>Unlock your full potential at the Longevity Hub by Clinique La Prairie at One&Only One Za'abeel, Dubai, engineered to maximise your health, performance and physical appearance.</p>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='wellnessDestinstionSliderCard'>
                                        <div className='wellnessDestinstionSliderImg'>
                                            <img src={WellnessDestination3} alt='img' />
                                        </div>
                                        <div className='wellnessDestinstionSliderDetails'>
                                            <div className='wellnessDestinstionSliderLocationName'>
                                                <h4>Longevity Hub, Dubai</h4>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationDetails'>
                                                <p>Unlock your full potential at the Longevity Hub by Clinique La Prairie at One&Only One Za'abeel, Dubai, engineered to maximise your health, performance and physical appearance.</p>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='wellnessDestinstionSliderCard'>
                                        <div className='wellnessDestinstionSliderImg'>
                                            <img src={WellnessDestination4} alt='img' />
                                        </div>
                                        <div className='wellnessDestinstionSliderDetails'>
                                            <div className='wellnessDestinstionSliderLocationName'>
                                                <h4>Longevity Hub, Dubai</h4>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationDetails'>
                                                <p>Unlock your full potential at the Longevity Hub by Clinique La Prairie at One&Only One Za'abeel, Dubai, engineered to maximise your health, performance and physical appearance.</p>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                            </div>
                            <div className="slider-container3">
                                <Slider {...settings3}>
                                    <div className='wellnessDestinstionSliderCard'>
                                        <div className='wellnessDestinstionSliderImg'>
                                            <img src={WellnessDestination1} alt='img' />
                                        </div>
                                        <div className='wellnessDestinstionSliderDetails'>
                                            <div className='wellnessDestinstionSliderLocationName'>
                                                <h4>Longevity Hub, Dubai</h4>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationDetails'>
                                                <p>Unlock your full potential at the Longevity Hub by Clinique La Prairie at One&Only One Za'abeel, Dubai, engineered to maximise your health, performance and physical appearance.</p>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='wellnessDestinstionSliderCard'>
                                        <div className='wellnessDestinstionSliderImg'>
                                            <img src={WellnessDestination2} alt='img' />
                                        </div>
                                        <div className='wellnessDestinstionSliderDetails'>
                                            <div className='wellnessDestinstionSliderLocationName'>
                                                <h4>Longevity Hub, Dubai</h4>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationDetails'>
                                                <p>Unlock your full potential at the Longevity Hub by Clinique La Prairie at One&Only One Za'abeel, Dubai, engineered to maximise your health, performance and physical appearance.</p>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='wellnessDestinstionSliderCard'>
                                        <div className='wellnessDestinstionSliderImg'>
                                            <img src={WellnessDestination3} alt='img' />
                                        </div>
                                        <div className='wellnessDestinstionSliderDetails'>
                                            <div className='wellnessDestinstionSliderLocationName'>
                                                <h4>Longevity Hub, Dubai</h4>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationDetails'>
                                                <p>Unlock your full potential at the Longevity Hub by Clinique La Prairie at One&Only One Za'abeel, Dubai, engineered to maximise your health, performance and physical appearance.</p>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='wellnessDestinstionSliderCard'>
                                        <div className='wellnessDestinstionSliderImg'>
                                            <img src={WellnessDestination4} alt='img' />
                                        </div>
                                        <div className='wellnessDestinstionSliderDetails'>
                                            <div className='wellnessDestinstionSliderLocationName'>
                                                <h4>Longevity Hub, Dubai</h4>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationDetails'>
                                                <p>Unlock your full potential at the Longevity Hub by Clinique La Prairie at One&Only One Za'abeel, Dubai, engineered to maximise your health, performance and physical appearance.</p>
                                            </div>
                                            <div className='wellnessDestinstionSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ancientMain'>
                    <div className='ancientImg'>
                        <img src={encient} alt='image' />
                    </div>
                    <div className='ancientText'>
                        <h4>ANCIENT CEREMONIES</h4>
                        <p>Discover ancestral spiritual traditions at One&Only Pamilla in Los Cabos, where wellbeing rituals are inspired by indigenous Mexican knowledge and the resort’s coastal setting.</p>
                        <button>explore</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
