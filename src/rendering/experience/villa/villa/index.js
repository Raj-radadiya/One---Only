import React from 'react'
import './villalocation.scss'
import Slider from "react-slick";
import FamilyActivitiesFirst from '../../../../assets/image/roomlocation1.webp';
import FamilyActivitiesSecond from '../../../../assets/image/roomlocation2.webp';
import FamilyActivitiesThird from '../../../../assets/image/roomlocation3.webp';
import FamilyActivitiesForth from '../../../../assets/image/roomlocation4.webp';
// import villaImgFifth from '../../../../assets/image/roomlocation5.webp'
import left from '../../../../assets/icon/icons8-left-25.png';
import right from '../../../../assets/icon/icons8-right-24.png';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='left_arrow'
            onClick={onClick}
        >
            <img src={left} alt='left' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='right_arrow'
            onClick={onClick}
        >
            <img src={right} alt='right' />
        </div>
    );
}
export default function VillaLocation() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    var settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.65,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    var settings3 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    return (
        <div>

            <div className='container4'>
                <div className='villaLocation'>
                    <h2>Villa One: Our most exclusive address</h2>
                </div>
                <div className='villaSliderMain'>
                    <div className='container2'>
                        <div className="slider-container">
                            <Slider {...settings}>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={FamilyActivitiesFirst} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaCardHead'>
                                            <h4>Malaysian getaway</h4>
                                        </div>
                                        <p>Be enchanted by the wild beauty of Malaysia, with our three-day family itinerary at One&Only Desaru Coast. From guided nature walks to thrilling watersports, our coastal hideaway beckons for blissful days and starlit nights gathered around the bonfire.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={FamilyActivitiesSecond} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaCardHead'>
                                            <h4>Family time in the Maldives</h4>
                                        </div>
                                        <p>This irresistible itinerary delivers four days of liquid thrills, island adventures, delicious dining, plenty of playtime, and magical moments of romance at One&Only Reethi Rah. Gather your tribe for your ultimate Maldives family holiday.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={FamilyActivitiesThird} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaCardHead'>
                                            <h4>Under the Mexican sun</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={FamilyActivitiesForth} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaCardHead'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="slider-container2">
                            <Slider {...settings2}>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={FamilyActivitiesFirst} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaCardHead'>
                                            <h4>Malaysian getaway</h4>
                                        </div>
                                        <p>Be enchanted by the wild beauty of Malaysia, with our three-day family itinerary at One&Only Desaru Coast. From guided nature walks to thrilling watersports, our coastal hideaway beckons for blissful days and starlit nights gathered around the bonfire.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={FamilyActivitiesSecond} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaCardHead'>
                                            <h4>Family time in the Maldives</h4>
                                        </div>
                                        <p>This irresistible itinerary delivers four days of liquid thrills, island adventures, delicious dining, plenty of playtime, and magical moments of romance at One&Only Reethi Rah. Gather your tribe for your ultimate Maldives family holiday.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={FamilyActivitiesThird} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaCardHead'>
                                            <h4>Under the Mexican sun</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={FamilyActivitiesForth} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaCardHead'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="slider-container3">
                            <Slider {...settings3}>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={FamilyActivitiesFirst} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaCardHead'>
                                            <h4>Malaysian getaway</h4>
                                        </div>
                                        <p>Be enchanted by the wild beauty of Malaysia, with our three-day family itinerary at One&Only Desaru Coast. From guided nature walks to thrilling watersports, our coastal hideaway beckons for blissful days and starlit nights gathered around the bonfire.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={FamilyActivitiesSecond} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaCardHead'>
                                            <h4>Family time in the Maldives</h4>
                                        </div>
                                        <p>This irresistible itinerary delivers four days of liquid thrills, island adventures, delicious dining, plenty of playtime, and magical moments of romance at One&Only Reethi Rah. Gather your tribe for your ultimate Maldives family holiday.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={FamilyActivitiesThird} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaCardHead'>
                                            <h4>Under the Mexican sun</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                                <div className='villaSlider'>
                                    <div className='villaSliderImage'>
                                        <img src={FamilyActivitiesForth} alt='img' />
                                    </div>
                                    <div className='villaCardDetails'>
                                        <div className='VillaCardHead'>
                                            <h4>SECRETS OF AESTHESIS</h4>
                                        </div>
                                        <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
