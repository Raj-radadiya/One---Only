import React from 'react'
import './experience.scss'
import Slider from "react-slick";
import grater from '../../../../assets/icon/icons8-greater-than-10.png';
import wellness from '../../../../assets/image/wellnessCardImg.webp';
import wellnessFirst from '../../../../assets/image/wellnessSliderImg1.webp';
import wellnessSecond from '../../../../assets/image/wellnessSliderImg2.webp';
import wellnessThird from '../../../../assets/image/wellnessSliderImg3.webp';
import island from '../../../../assets/image/island.webp';
export default function WellnessExperience() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
        slidesToShow: 1.1,
        slidesToScroll: 1,
        initialSlide: 0,
    }
    return (
        <div>
            <div className='container2'>
                <div className='wellnessExperiencesMain'>
                    <div className='wellnessExperiencesSec'>
                        <a>One&Only Resorts</a>
                        <a><img src={grater} alt='grater' /></a>
                        <a>Experiences</a>
                        <a><img src={grater} alt='grater' /></a>
                        <a className='wellness'>Wellness</a>
                    </div>

                    <div className='wellnessExperiencesDisc'>
                        <div className='wellnessExperiencesHead'>
                            <h2>Curated wellness experiences</h2>
                        </div>
                        <div className='wellnessExperiencesPara'>
                            <p>One&Only partners with the world's most exclusive beauty and wellness brands to create exceptional holistic experiences grounded in each location. From ancient healing rituals to pioneering scientific advancements, find the time and the place to press reset on your health and wellbeing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container3'>
                <div className='wellnessCardMain'>
                    <div className='wellnessCardImg'>
                        <img src={wellness} alt='image' />
                    </div>
                    <div className='wellnessCardText'>
                        <h4>RIVIERA NAYARIT RITUALS</h4>
                        <p>A destination wellness retreat in Mexico’s Riviera Nayarit, One&Only Mandarina’s trio of four-day wellness journeys combine mindfulness, massage and native healing rituals.</p>
                        <button>explore</button>
                    </div>
                </div>
            </div>


            <div className='container3'>
                <div className='wellnessSliderMain'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='wellnessSlider'>
                                <div className='wellnessSliderImage'>
                                    <img src={wellnessFirst} alt='img' />
                                </div>
                                <div className='wellnessCardDetails'>
                                    <div className='wellnesstitleCardhead'>
                                        <h4>Transformative wellness</h4>
                                    </div>
                                    <p>Embark on a transformative wellness journey in Montenegro at One&Only Portonovi, with Chenot Espace’s immersive programmes. Grounded in science, each tailored programme is designed to optimise health and vitality from within.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='wellnessSlider'>
                                <div className='wellnessSliderImage'>
                                    <img src={wellnessSecond} alt='img' />
                                </div>
                                <div className='wellnessCardDetails'>
                                    <div className='wellnesstitleCardhead'>
                                        <h4>Transformative wellness</h4>
                                    </div>
                                    <p>Embark on a transformative wellness journey in Montenegro at One&Only Portonovi, with Chenot Espace’s immersive programmes. Grounded in science, each tailored programme is designed to optimise health and vitality from within.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='wellnessSlider'>
                                <div className='wellnessSliderImage'>
                                    <img src={wellnessThird} alt='img' />
                                </div>
                                <div className='wellnessCardDetails'>
                                    <div className='wellnesstitleCardhead'>
                                        <h4>Transformative wellness</h4>
                                    </div>
                                    <p>Embark on a transformative wellness journey in Montenegro at One&Only Portonovi, with Chenot Espace’s immersive programmes. Grounded in science, each tailored programme is designed to optimise health and vitality from within.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container2">
                        <Slider {...settings2}>
                            <div className='wellnessSlider'>
                                <div className='wellnessSliderImage'>
                                    <img src={wellnessFirst} alt='img' />
                                </div>
                                <div className='wellnessCardDetails'>
                                    <div className='wellnesstitleCardhead'>
                                        <h4>Transformative wellness</h4>
                                    </div>
                                    <p>Embark on a transformative wellness journey in Montenegro at One&Only Portonovi, with Chenot Espace’s immersive programmes. Grounded in science, each tailored programme is designed to optimise health and vitality from within.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='wellnessSlider'>
                                <div className='wellnessSliderImage'>
                                    <img src={wellnessSecond} alt='img' />
                                </div>
                                <div className='wellnessCardDetails'>
                                    <div className='wellnesstitleCardhead'>
                                        <h4>Transformative wellness</h4>
                                    </div>
                                    <p>Embark on a transformative wellness journey in Montenegro at One&Only Portonovi, with Chenot Espace’s immersive programmes. Grounded in science, each tailored programme is designed to optimise health and vitality from within.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='wellnessSlider'>
                                <div className='wellnessSliderImage'>
                                    <img src={wellnessThird} alt='img' />
                                </div>
                                <div className='wellnessCardDetails'>
                                    <div className='wellnesstitleCardhead'>
                                        <h4>Transformative wellness</h4>
                                    </div>
                                    <p>Embark on a transformative wellness journey in Montenegro at One&Only Portonovi, with Chenot Espace’s immersive programmes. Grounded in science, each tailored programme is designed to optimise health and vitality from within.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container3">
                        <Slider {...settings3}>
                            <div className='wellnessSlider'>
                                <div className='wellnessSliderImage'>
                                    <img src={wellnessFirst} alt='img' />
                                </div>
                                <div className='wellnessCardDetails'>
                                    <div className='wellnesstitleCardhead'>
                                        <h4>Transformative wellness</h4>
                                    </div>
                                    <p>Embark on a transformative wellness journey in Montenegro at One&Only Portonovi, with Chenot Espace’s immersive programmes. Grounded in science, each tailored programme is designed to optimise health and vitality from within.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='wellnessSlider'>
                                <div className='wellnessSliderImage'>
                                    <img src={wellnessSecond} alt='img' />
                                </div>
                                <div className='wellnessCardDetails'>
                                    <div className='wellnesstitleCardhead'>
                                        <h4>Transformative wellness</h4>
                                    </div>
                                    <p>Embark on a transformative wellness journey in Montenegro at One&Only Portonovi, with Chenot Espace’s immersive programmes. Grounded in science, each tailored programme is designed to optimise health and vitality from within.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                            <div className='wellnessSlider'>
                                <div className='wellnessSliderImage'>
                                    <img src={wellnessThird} alt='img' />
                                </div>
                                <div className='wellnessCardDetails'>
                                    <div className='wellnesstitleCardhead'>
                                        <h4>Transformative wellness</h4>
                                    </div>
                                    <p>Embark on a transformative wellness journey in Montenegro at One&Only Portonovi, with Chenot Espace’s immersive programmes. Grounded in science, each tailored programme is designed to optimise health and vitality from within.</p>
                                    <a href='#'>explore</a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>


                <div className='islandMain'>
                    <div className='islandImg'>
                        <img src={island} alt='image' />
                    </div>
                    <div className='islandText'>
                        <h4>ISLAND INDULGENCE</h4>
                        <p>Inspired by nature, our signature Maldivian Journey ritual at One&Only Reethi Rah draws on salt water therapy and fresh native coconut oil for holistic healing.</p>
                        <button>explore</button>
                    </div>
                </div>
            </div>




        </div>
    )
}
