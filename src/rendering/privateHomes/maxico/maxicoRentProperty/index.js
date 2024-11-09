import React from 'react'
import './rent.scss'
import Slider from "react-slick";
import grater from '../../../../assets/icon/icons8-greater-than-10.png';
import hostelBedroom1 from '../../../../assets/image/hostelroom1.webp';
import hostelBedroom2 from '../../../../assets/image/hostelroom2.webp';
import hostelBedroom3 from '../../../../assets/image/hostelroom3.webp';
import hostelBedroom4 from '../../../../assets/image/hostelroom5.webp';
import hostelBedroom5 from '../../../../assets/image/hostelroom6.webp';
import hostelBedroom6 from '../../../../assets/image/hostelroom6.webp';
export default function MaxicoRent() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
    }
    var settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.25,
        slidesToScroll: 1,
        initialSlide: 0,
    }
    var settings3 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.08,
        slidesToScroll: 1,
        initialSlide: 0,
    }
    return (
        <div>
            <div className='container3'>
                <div className='familyTimeSec'>
                    <a>One&Only Resorts</a>
                    <a><img src={grater} alt='grater' /></a>
                    <a>Experiences</a>
                    <a><img src={grater} alt='grater' /></a>
                    <a className='family'>Family</a>
                </div>

                <div className='familyTimeDisc'>
                    <div className='familyTimeHead'>
                        <h2>Rent a Vacation Home in Mexico</h2>
                    </div>
                    <div className='familyTimePara'>
                        <p>Nestled within the One&Only Mandarina Private Homes community, discover a coveted collection of villas for stays in Riviera Nayarit. With a choice of four to 10 bedrooms, a dedicated host, and access to One&Only Mandarina resort, these spectacular holiday homes in Mexico promise the perfect escape for groups big or small.</p>
                    </div>
                    <div className='familyTimeBtn'>
                        <button>Book Your Stay</button>
                    </div>
                </div>
            </div>
            <div className='container4'>
                <div className='hostelStaysSliderMain'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom1} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>4-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Immersed in untamed nature, explore a collection of four-bedroom villas designed for effortless al fresco living.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom2} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>5-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Unwind in our exceptional five-bedroom villas, crafted for group getaways and family vacations.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom3} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>6-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Soak up the tranquility of Riviera Nayarit in a spectacular six-bedroom villa surrounded by lush landscapes.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom1} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>4-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Immersed in untamed nature, explore a collection of four-bedroom villas designed for effortless al fresco living.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom2} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>5-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Unwind in our exceptional five-bedroom villas, crafted for group getaways and family vacations.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom3} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>6-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Soak up the tranquility of Riviera Nayarit in a spectacular six-bedroom villa surrounded by lush landscapes.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container2">
                        <Slider {...settings2}>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom1} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>4-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Immersed in untamed nature, explore a collection of four-bedroom villas designed for effortless al fresco living.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom2} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>5-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Unwind in our exceptional five-bedroom villas, crafted for group getaways and family vacations.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom3} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>6-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Soak up the tranquility of Riviera Nayarit in a spectacular six-bedroom villa surrounded by lush landscapes.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container2">
                        <Slider {...settings2}>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom1} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>4-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Immersed in untamed nature, explore a collection of four-bedroom villas designed for effortless al fresco living.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom2} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>5-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Unwind in our exceptional five-bedroom villas, crafted for group getaways and family vacations.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom3} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>6-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Soak up the tranquility of Riviera Nayarit in a spectacular six-bedroom villa surrounded by lush landscapes.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container3">
                        <Slider {...settings3}>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom1} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>4-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Immersed in untamed nature, explore a collection of four-bedroom villas designed for effortless al fresco living.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom2} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>5-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Unwind in our exceptional five-bedroom villas, crafted for group getaways and family vacations.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom3} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>6-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Soak up the tranquility of Riviera Nayarit in a spectacular six-bedroom villa surrounded by lush landscapes.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container3">
                        <Slider {...settings3}>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom4} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>4-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Immersed in untamed nature, explore a collection of four-bedroom villas designed for effortless al fresco living.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom5} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>5-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Unwind in our exceptional five-bedroom villas, crafted for group getaways and family vacations.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='hostelStaysSlider'>
                                <div className='hostelStaysSliderImage'>
                                    <img src={hostelBedroom6} alt='img' />
                                </div>
                                <div className='hostelStaysCardDetails'>
                                    <div className='hostelStaystitleCardhead'>
                                        <h4>6-BEDROOM PRIVATE HOMES</h4>
                                    </div>
                                    <p>Soak up the tranquility of Riviera Nayarit in a spectacular six-bedroom villa surrounded by lush landscapes.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
