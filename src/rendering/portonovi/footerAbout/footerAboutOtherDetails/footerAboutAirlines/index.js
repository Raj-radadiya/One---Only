import React from 'react'
import Slider from "react-slick";
import './airlines.scss'
import airlines from '../../../../../assets/image/airlines.webp';
import aminitiesfirst from '../../../../../assets/image/aminitiesSliderImg1.webp';
import aminitiesSecond from '../../../../../assets/image/aminitiesSliderImg2.webp';
import aminitiesThird from '../../../../../assets/image/aminitiesSliderImg3.webp';
import aminitiesForth from '../../../../../assets/image/aminitiesSliderImg4.webp';
import aminitiesFifth from '../../../../../assets/image/aminitiesSliderImg5.webp';
import aminitiessixth from '../../../../../assets/image/aminitiesSliderImg6.webp';
import left from '../../../../../assets/icon/icons8-left-25.png';
import right from '../../../../../assets/icon/icons8-right-20.png';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='aminitiesLefAarrow'
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
            className='aminitiesRightAarrow'
            onClick={onClick}
        >
            <img src={right} alt='right' />
        </div>
    );
}
export default function Airlines() {
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
            <div className='container5'>
                <div className='ariportCardMain'>
                    <div className='ariportMain'>

                        <div className='ariportLeft'>
                            <div className='ariportDisc'>
                                <div className='ariportCardHead'>
                                    <h2>Airport transfers</h2>
                                </div>
                                <div className='ariportCardPara'>
                                    <p>Arrive at One&Only Portonovi in comfort and style. A luxury transfer can be arranged from all five surrounding airports.</p>
                                </div>
                                <div className='ariportBtn'>
                                    <button>explore</button>
                                </div>
                            </div>
                        </div>
                        <div className='ariportRight'>
                            <div className='ariportImg'>
                                <img src={airlines} alt='img' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='historyMain'>
                    <div className='historyHead'>
                        <div className='historyTitle'>
                            <h2>History and Culture</h2>
                        </div>
                        <div className='historyPara'>
                            <p>Behold one of Europe's hidden gems, preserving history and unspoilt nature.</p>
                        </div>
                    </div>
                    <div className='historyDisc'>
                        <div className='historyLeft'>
                            <p>One&Only Portonovi is positioned at the graceful entrance to Boka Bay, a UNESCO World Heritage Site known for its exquisite natural beauty, rich local culture, and historically important Venetian architecture, some of which dates back to the 9th century.</p>
                            <p>Inhabited since antiquity, Boka Bay harbours captivating sights including hidden monasteries within caves, mythical citadels, and jaw-dropping sea and mountain views from each and every angle.</p>
                        </div>
                        <div className='historyRight'>
                            <p>Its well-preserved Medieval towns of Kotor, Risan, Tivat, Perast, Prčanj, and Herceg Novi host an attractive cultural mix due to the frequent political changes under the Venetian, French, Austro-Hungarian and Ottoman rule throughout its dramatic history.</p>
                            <p>Here, One&Only Portonovi crafts signature experiences to celebrate the destination and offer you a unique insight into this fascinating region and culture.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='aminitiesHead'>
                        <div className='aminitiesTitle'>
                            <h2>Amenities</h2>
                        </div>
                        <div className='aminitiesPara'>
                            <p>One&Only Portonovi offers a world of inspiration, so each day is a new adventure.</p>
                        </div>
                    </div>
                    <div className='aminitiesMain'>
                        <div className="slider-container">
                            <Slider {...settings}>

                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiesfirst} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>Private sandy beach</h4>
                                        </div>
                                        <p>Feel the world melt away as you unwind on One&Only Portonovi's secluded beach.</p>
                                    </div>
                                </div>
                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiesSecond} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>Pools</h4>
                                        </div>
                                        <p>Allow your mood to dictate which of the sparkling pools you’d prefer to take a dip in. The resort offers six distinct guest pools and five private pools for suites and villas.</p>
                                    </div>
                                </div>
                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiesThird} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>Chenot Espace</h4>
                                        </div>
                                        <p>For relaxation with an emphasis on health and wellbeing, the pioneering Chenot Espace takes a 360-degree approach to your pampering and purification needs.</p>
                                    </div>
                                </div>
                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiesForth} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>Savour</h4>
                                        </div>
                                        <p>Serving only the freshest, finest bounty from land and sea, our restaurants' revered chefs create food to delight and nourish the soul.</p>
                                    </div>
                                </div>
                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiesFifth} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>Private Jetty and Portonovi Marina</h4>
                                        </div>
                                        <p>The 238-berth Portonovi Marina makes One&Only Portonovi the perfect launch pad to explore Montenegro's stunning 300-kilometre coastline, as well as the Adriatic.</p>
                                    </div>
                                </div>
                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiessixth} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>One&Only Private Homes</h4>
                                        </div>
                                        <p>Enjoy legendary service in your own exclusive surrounds when you own one of the resort's One&Only Private Homes. With individual pools and direct access to your own beach and jetty, you can experience the best of resort life and truly feel at home.</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="slider-container2">
                            <Slider {...settings2}>

                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiesfirst} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>Private sandy beach</h4>
                                        </div>
                                        <p>Feel the world melt away as you unwind on One&Only Portonovi's secluded beach.</p>
                                    </div>
                                </div>
                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiesSecond} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>Pools</h4>
                                        </div>
                                        <p>Allow your mood to dictate which of the sparkling pools you’d prefer to take a dip in. The resort offers six distinct guest pools and five private pools for suites and villas.</p>
                                    </div>
                                </div>
                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiesThird} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>Chenot Espace</h4>
                                        </div>
                                        <p>For relaxation with an emphasis on health and wellbeing, the pioneering Chenot Espace takes a 360-degree approach to your pampering and purification needs.</p>
                                    </div>
                                </div>
                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiesForth} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>Savour</h4>
                                        </div>
                                        <p>Serving only the freshest, finest bounty from land and sea, our restaurants' revered chefs create food to delight and nourish the soul.</p>
                                    </div>
                                </div>
                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiesFifth} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>Private Jetty and Portonovi Marina</h4>
                                        </div>
                                        <p>The 238-berth Portonovi Marina makes One&Only Portonovi the perfect launch pad to explore Montenegro's stunning 300-kilometre coastline, as well as the Adriatic.</p>
                                    </div>
                                </div>
                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiessixth} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>One&Only Private Homes</h4>
                                        </div>
                                        <p>Enjoy legendary service in your own exclusive surrounds when you own one of the resort's One&Only Private Homes. With individual pools and direct access to your own beach and jetty, you can experience the best of resort life and truly feel at home.</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="slider-container3">
                            <Slider {...settings3}>

                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiesfirst} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>Private sandy beach</h4>
                                        </div>
                                        <p>Feel the world melt away as you unwind on One&Only Portonovi's secluded beach.</p>
                                    </div>
                                </div>
                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiesSecond} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>Pools</h4>
                                        </div>
                                        <p>Allow your mood to dictate which of the sparkling pools you’d prefer to take a dip in. The resort offers six distinct guest pools and five private pools for suites and villas.</p>
                                    </div>
                                </div>
                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiesThird} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>Chenot Espace</h4>
                                        </div>
                                        <p>For relaxation with an emphasis on health and wellbeing, the pioneering Chenot Espace takes a 360-degree approach to your pampering and purification needs.</p>
                                    </div>
                                </div>
                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiesForth} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>Savour</h4>
                                        </div>
                                        <p>Serving only the freshest, finest bounty from land and sea, our restaurants' revered chefs create food to delight and nourish the soul.</p>
                                    </div>
                                </div>
                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiesFifth} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>Private Jetty and Portonovi Marina</h4>
                                        </div>
                                        <p>The 238-berth Portonovi Marina makes One&Only Portonovi the perfect launch pad to explore Montenegro's stunning 300-kilometre coastline, as well as the Adriatic.</p>
                                    </div>
                                </div>
                                <div className='aminitiesSlider'>
                                    <div className='aminitiesSliderImage'>
                                        <img src={aminitiessixth} alt='img' />
                                    </div>
                                    <div className='aminitiesCardDetails'>
                                        <div className='aminitiesdetails'>
                                            <h4>One&Only Private Homes</h4>
                                        </div>
                                        <p>Enjoy legendary service in your own exclusive surrounds when you own one of the resort's One&Only Private Homes. With individual pools and direct access to your own beach and jetty, you can experience the best of resort life and truly feel at home.</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

            <div className='usefuldetailsMain'>
                <div className='usefuldetailsTitle'>
                    <div className='usefulDetailsHead'>
                        <h2>Useful details</h2>
                    </div>
                    <div className='useFulDetailsPara'>
                        <p>Everything you need to know before you travel to One&Only Portonovi.</p>
                    </div>
                </div>

                <div className='useFulDetailsDiscMain'>
                    <div className='container5'>
                        <div className='useFulDetailsDisc'>
                            <div className='useFulDetailsCard'>
                                <div className='useFulDetailstHead'>
                                    <strong>Transfers</strong>
                                </div>
                                <div className='useFulDetailsPara'>
                                    <p>One&Only Portonovi is an easy drive from Tivat (50 minutes), Dubrovnik (one hour), Podgorica (two and a half hours), Split (four hours and ten minutes) and Tirana (four and a half hours) airports, all of which are served by a variety of airlines, and well equipped to handle private jets. For more information on transfers and bookings, please visit:</p>
                                </div>
                                <div className='useFulDetailsLink'>
                                    <a href='#'>https://www.oneandonlyresorts.com/portonovi/transfers</a>
                                </div>
                            </div>
                            <div className='useFulDetailsCard'>
                                <div className='useFulDetailstHead'>
                                    <strong>Passports and Visas</strong>
                                </div>
                                <div className='useFulDetailsPara'>
                                    <p>All visitors to Montenegro must present a passport valid for at least 6 months from date of travel. Visa requirements for entering Montenegro vary significantly from country to country.<a href='#'> Click here for more information.</a></p>
                                </div>
                            </div>
                            <div className='useFulDetailsCard'>
                                <div className='useFulDetailstHead'>
                                    <strong>Languages</strong>
                                </div>
                                <div className='useFulDetailsPara'>
                                    <p>The official language of Montenegro is Montenegrin, although Bosnian, Serbian, Croatian and Albanian are also languages in official use. The resort team members speak English for our guests.</p>
                                </div>
                            </div>
                            <div className='useFulDetailsCard'>
                                <div className='useFulDetailstHead'>
                                    <strong>Weather</strong>
                                </div>
                                <div className='useFulDetailsPara'>
                                    <p>Montenegro has a Mediterranean climate on the coast, with alpine conditions in the mountains. The average summer temperature is 27°C (81°F) and the sea is warm enough to swim from May to October.</p>
                                </div>
                            </div>
                            <div className='useFulDetailsCard'>
                                <div className='useFulDetailstHead'>
                                    <strong>Internet</strong>
                                </div>
                                <div className='useFulDetailsPara'>
                                    <p>Complimentary high-speed WiFi service is available throughout the resort.</p>
                                </div>
                            </div>
                            <div className='useFulDetailsCard'>
                                <div className='useFulDetailstHead'>
                                    <strong>Currency</strong>
                                </div>
                                <div className='useFulDetailsPara'>
                                    <p>The Euro is the official currency of Montenegro.</p>
                                </div>
                            </div>
                            <div className='useFulDetailsCard'>
                                <div className='useFulDetailstHead'>
                                    <strong>GDS Codes</strong>
                                </div>
                                <div className='useFulDetailsPara'>
                                    <p>Amadeus OOTIVOOP <br />
                                        Sabre OO327982<br />
                                        Galileo OOF5633<br />
                                        Worldspan OOTIVOP<br />
                                        Pegasus OO9373</p>
                                </div>
                            </div>
                            <div className='useFulDetailsCard'>
                                <div className='useFulDetailstHead'>
                                    <strong>Accepted Credit Cards</strong>
                                </div>
                                <div className='useFulDetailsPara'>
                                    <p>Visa<br />
                                        Visa Electron<br />
                                        MasterCard<br />
                                        Maestro<br />
                                        American Express</p>
                                </div>
                            </div>
                            <div className='useFulDetailsCard'>
                                <div className='useFulDetailstHead'>
                                    <strong>Time Zone</strong>
                                </div>
                                <div className='useFulDetailsPara'>
                                    <p>Montenegro is GMT/UTC +1h during Standard Time, and GMT/UTC + 2h during Daylight Saving Time.</p>
                                </div>
                            </div>
                            <div className='useFulDetailsCard'>
                                <div className='useFulDetailstHead'>
                                    <strong>Electricity</strong>
                                </div>
                                <div className='useFulDetailsPara'>
                                    <p>Electricity is supplied at 220 volts. Power outlet is Type F (Schuko). There are USB sockets located on the desk and near the bed.</p>
                                </div>
                            </div>
                            <div className='useFulDetailsCard'>
                                <div className='useFulDetailstHead'>
                                    <strong>Check-in and check-out</strong>
                                </div>
                                <div className='useFulDetailsPara'>
                                    <p>Check in is at 3pm local time and check out is at 12pm local time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='container5'>
                <div className='mapMain'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23557.17267121955!2d18.596862!3d42.435257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c3bade0848e5f%3A0x226f3408e868b9f!2sOne%26Only%20Portonovi!5e0!3m2!1sen!2sae!4v1731311705128!5m2!1sen!2sae"></iframe>
                </div>
            </div>
        </div>
    )
}
