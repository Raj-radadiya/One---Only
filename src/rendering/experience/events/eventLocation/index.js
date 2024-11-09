import React from 'react'
import './location.scss'
import Slider from "react-slick";
import event1 from '../../../../assets/image/eventlocation1.webp';
import event2 from '../../../../assets/image/eventlocation2.webp';
import event3 from '../../../../assets/image/eventlocation3.webp';
import event4 from '../../../../assets/image/eventlocation4.webp';

export default function EventLocation() {
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
                <div className='eventSliderMain'>
                    <div className='container2'>
                        <div className='eventsSlider'>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className='eventSliderCard'>
                                        <div className='eventSliderImg'>
                                            <img src={event1} alt='img' />
                                        </div>
                                        <div className='eventSliderDetails'>
                                            <div className='eventSliderLocationName'>
                                                <h4>Mandarina romance</h4>
                                            </div>
                                            <div className='eventSliderLocationDetails'>
                                                <p>For your bespoke ceremony at One&Only Mandarina in Mexico’s Riviera Nayarit, choose between clifftop views, a coastal rainforest setting, or a golden hour gathering on the ocean’s edge.</p>
                                            </div>
                                            <div className='eventSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='eventSliderCard'>
                                        <div className='eventSliderImg'>
                                            <img src={event2} alt='img' />
                                        </div>
                                        <div className='eventSliderDetails'>
                                            <div className='eventSliderLocationName'>
                                                <h4>Arabian magic</h4>
                                            </div>
                                            <div className='eventSliderLocationDetails'>
                                                <p>Within one of Dubai’s most romantic retreats, host an exceptional wedding in elegant Arabesque surrounds, where Moorish details, fountains and lanterns create an enchanting backdrop to say ‘I do’.</p>
                                            </div>
                                            <div className='eventSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='eventSliderCard'>
                                        <div className='eventSliderImg'>
                                            <img src={event3} alt='img' />
                                        </div>
                                        <div className='eventSliderDetails'>
                                            <div className='eventSliderLocationName'>
                                                <h4>Los Cabos seduction</h4>
                                            </div>
                                            <div className='eventSliderLocationDetails'>
                                                <p>Exchange vows amid the coastal charms of Los Cabos at One&Only Palmilla, where elegant ballrooms, lush lawns, al fresco terraces, and a fragrant herb garden provide the ideal setting for your beachside soiree.</p>
                                            </div>
                                            <div className='eventSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='eventSliderCard'>
                                        <div className='eventSliderImg'>
                                            <img src={event4} alt='img' />
                                        </div>
                                        <div className='eventSliderDetails'>
                                            <div className='eventSliderLocationName'>
                                                <h4>Island dreaming</h4>
                                            </div>
                                            <div className='eventSliderLocationDetails'>
                                                <p>Bring barefoot luxury to your big day with a toes-in-the-sand wedding at One&Only Reethi Rah in the Maldives. Celebrate your new life together in a postcard-perfect position overlooking the Indian Ocean.</p>
                                            </div>
                                            <div className='eventSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="slider-container2">
                                <Slider {...settings2}>
                                    <div className='eventSliderCard'>
                                        <div className='eventSliderImg'>
                                            <img src={event1} alt='img' />
                                        </div>
                                        <div className='eventSliderDetails'>
                                            <div className='eventSliderLocationName'>
                                                <h4>Mandarina romance</h4>
                                            </div>
                                            <div className='eventSliderLocationDetails'>
                                                <p>For your bespoke ceremony at One&Only Mandarina in Mexico’s Riviera Nayarit, choose between clifftop views, a coastal rainforest setting, or a golden hour gathering on the ocean’s edge.</p>
                                            </div>
                                            <div className='eventSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='eventSliderCard'>
                                        <div className='eventSliderImg'>
                                            <img src={event2} alt='img' />
                                        </div>
                                        <div className='eventSliderDetails'>
                                            <div className='eventSliderLocationName'>
                                                <h4>Arabian magic</h4>
                                            </div>
                                            <div className='eventSliderLocationDetails'>
                                                <p>Within one of Dubai’s most romantic retreats, host an exceptional wedding in elegant Arabesque surrounds, where Moorish details, fountains and lanterns create an enchanting backdrop to say ‘I do’.</p>
                                            </div>
                                            <div className='eventSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='eventSliderCard'>
                                        <div className='eventSliderImg'>
                                            <img src={event3} alt='img' />
                                        </div>
                                        <div className='eventSliderDetails'>
                                            <div className='eventSliderLocationName'>
                                                <h4>Los Cabos seduction</h4>
                                            </div>
                                            <div className='eventSliderLocationDetails'>
                                                <p>Exchange vows amid the coastal charms of Los Cabos at One&Only Palmilla, where elegant ballrooms, lush lawns, al fresco terraces, and a fragrant herb garden provide the ideal setting for your beachside soiree.</p>
                                            </div>
                                            <div className='eventSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='eventSliderCard'>
                                        <div className='eventSliderImg'>
                                            <img src={event4} alt='img' />
                                        </div>
                                        <div className='eventSliderDetails'>
                                            <div className='eventSliderLocationName'>
                                                <h4>Island dreaming</h4>
                                            </div>
                                            <div className='eventSliderLocationDetails'>
                                                <p>Bring barefoot luxury to your big day with a toes-in-the-sand wedding at One&Only Reethi Rah in the Maldives. Celebrate your new life together in a postcard-perfect position overlooking the Indian Ocean.</p>
                                            </div>
                                            <div className='eventSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                            </div>
                            <div className="slider-container3">
                                <Slider {...settings3}>
                                    <div className='eventSliderCard'>
                                        <div className='eventSliderImg'>
                                            <img src={event1} alt='img' />
                                        </div>
                                        <div className='eventSliderDetails'>
                                            <div className='eventSliderLocationName'>
                                                <h4>Mandarina romance</h4>
                                            </div>
                                            <div className='eventSliderLocationDetails'>
                                                <p>For your bespoke ceremony at One&Only Mandarina in Mexico’s Riviera Nayarit, choose between clifftop views, a coastal rainforest setting, or a golden hour gathering on the ocean’s edge.</p>
                                            </div>
                                            <div className='eventSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='eventSliderCard'>
                                        <div className='eventSliderImg'>
                                            <img src={event2} alt='img' />
                                        </div>
                                        <div className='eventSliderDetails'>
                                            <div className='eventSliderLocationName'>
                                                <h4>Arabian magic</h4>
                                            </div>
                                            <div className='eventSliderLocationDetails'>
                                                <p>Within one of Dubai’s most romantic retreats, host an exceptional wedding in elegant Arabesque surrounds, where Moorish details, fountains and lanterns create an enchanting backdrop to say ‘I do’.</p>
                                            </div>
                                            <div className='eventSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='eventSliderCard'>
                                        <div className='eventSliderImg'>
                                            <img src={event3} alt='img' />
                                        </div>
                                        <div className='eventSliderDetails'>
                                            <div className='eventSliderLocationName'>
                                                <h4>Los Cabos seduction</h4>
                                            </div>
                                            <div className='eventSliderLocationDetails'>
                                                <p>Exchange vows amid the coastal charms of Los Cabos at One&Only Palmilla, where elegant ballrooms, lush lawns, al fresco terraces, and a fragrant herb garden provide the ideal setting for your beachside soiree.</p>
                                            </div>
                                            <div className='eventSliderLocationLink'>
                                                <a href='#'>Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='eventSliderCard'>
                                        <div className='eventSliderImg'>
                                            <img src={event4} alt='img' />
                                        </div>
                                        <div className='eventSliderDetails'>
                                            <div className='eventSliderLocationName'>
                                                <h4>Island dreaming</h4>
                                            </div>
                                            <div className='eventSliderLocationDetails'>
                                                <p>Bring barefoot luxury to your big day with a toes-in-the-sand wedding at One&Only Reethi Rah in the Maldives. Celebrate your new life together in a postcard-perfect position overlooking the Indian Ocean.</p>
                                            </div>
                                            <div className='eventSliderLocationLink'>
                                                <a href='#'>Discover More</a>
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