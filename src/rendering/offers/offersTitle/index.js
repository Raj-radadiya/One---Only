import React from 'react'
import './offers.scss'
import Slider from "react-slick";
import offer1 from '../../../assets/image/offercard1.webp';
import offer2 from '../../../assets/image/offercard2.webp';
import offer3 from '../../../assets/image/offercard3.webp';
import offer4 from '../../../assets/image/offercard4.webp';
import offer5 from '../../../assets/image/offercard5.webp';
import offer6 from '../../../assets/image/offercard6.webp';
import offer7 from '../../../assets/image/offercard7.webp';
import offer8 from '../../../assets/image/offercard8.webp';
import offer9 from '../../../assets/image/offercard9.webp';
import offer10 from '../../../assets/image/offercard10.webp';
import offer11 from '../../../assets/image/offercard11.webp';
import offer12 from '../../../assets/image/offercard12.webp';
import offer13 from '../../../assets/image/offercard13.webp';
import offer14 from '../../../assets/image/offercard14.webp';

export default function OffersTitle() {
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
        slidesToShow: 1.6,
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
            <div className='container'>
                <div className='offersTitleMain'>
                    <div className='offersTitle'>
                        <div className='offersHead'>
                            <h2>Curated just for you</h2>
                        </div>
                        <div className='offersPara'>
                            <p>Explore One&Only exclusive offers across the planet’s most inspiring locations. Enjoy a stay in one of our beautifully designed villas, or discover a new destination through the lens of One&Only. Select a journey that suits you.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='offersCardMain'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer1} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Royal Mirage, Dubai</h4>
                                    </div>
                                    <p>Explore our timeless Arabian resort, where a private stretch of beach and three distinct spaces create a place of connection for all ages.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer2} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only The Palm, Dubai</h4>
                                    </div>
                                    <p>Discover an effortlessly chic resort on the Palm’s exclusive ‘riviera’, where coastal tranquillity meets the energy of Dubai’s urban skyline.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer3} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only One Za'abeel</h4>
                                    </div>
                                    <p>Imagine a place that’s the centre of everything. Of culture, of cuisine, of entertainment, of business. Where the fascinating gravitate by day, and circulate by night, and where everything the city offers can be curated, just for you.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer4} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Aesthesis, Athens</h4>
                                    </div>
                                    <p>Our first resort in Greece captures the cosmopolitan glamour of the Athenian Riviera, with mid-century design and elevated al fresco living.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer5} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>SOne&Only Kéa Island, Greece</h4>
                                    </div>
                                    <p>At the gateway to the Cyclades, just 45 minutes by speedboat from Athens, discover an untouched island shaped by time, where the secrets of the Aegean come to life.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer6} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Reethi Rah, Maldives</h4>
                                    </div>
                                    <p>Explore our Indian Ocean hideaway, where 12 palm-fringed beaches, iconic overwater villas, and deserted stretches of sand await.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer7} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Le Saint Géran, Mauritius</h4>
                                    </div>
                                    <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.Discover a tranquil beachfront escape in the Indian Ocean, where authentic Mauritian charm meets timeless coastal glamour.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer8} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Mandarina, Mexico</h4>
                                    </div>
                                    <p>Immersed in the untamed nature of Mexico’s Riviera Nayarit, discover a hidden retreat where the lush rainforest canopy meets the Pacific Ocean.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer9} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Palmilla, Los Cabos</h4>
                                    </div>
                                    <p>Find harmony between the land and the sea at our legendary Los Cabos resort, a glamorous coastal sanctuary imbued with Mexican authenticity.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer10} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Portonovi, Montenegro</h4>
                                    </div>
                                    <p>Embrace a glamorous nautical lifestyle, exploring charming mediaeval towns, dramatic mountain landscapes and rugged Adriatic coastlines.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer11} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Gorilla's Nest, Rwanda</h4>
                                    </div>
                                    <p>Immerse yourself in the untamed wilderness of Rwanda, where bucket-list experiences in nature meet a haven of refined relaxation.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer12} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Nyungwe House, Rwanda</h4>
                                    </div>
                                    <p>Enveloped by vivid rainforest and a verdant tea plantation, discover a back-to-nature sanctuary with wild-at-heart adventures and elevated wellness.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer13} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Cape Town, South Africa</h4>
                                    </div>
                                    <p>Situated on the vibrant V&A waterfront, discover an artistic urban retreat with panoramic views over the marina and Table Mountain.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer14} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Desaru Coast, Malaysia</h4>
                                    </div>
                                    <p>Hidden between the rainforest and the sea in Malaysia’s enchanting southeast, discover a tropical sanctuary within easy reach of Singapore.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>

                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container2">
                        <Slider {...settings2}>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer1} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Royal Mirage, Dubai</h4>
                                    </div>
                                    <p>Explore our timeless Arabian resort, where a private stretch of beach and three distinct spaces create a place of connection for all ages.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer2} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only The Palm, Dubai</h4>
                                    </div>
                                    <p>Discover an effortlessly chic resort on the Palm’s exclusive ‘riviera’, where coastal tranquillity meets the energy of Dubai’s urban skyline.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer3} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only One Za'abeel</h4>
                                    </div>
                                    <p>Imagine a place that’s the centre of everything. Of culture, of cuisine, of entertainment, of business. Where the fascinating gravitate by day, and circulate by night, and where everything the city offers can be curated, just for you.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container2">
                        <Slider {...settings2}>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer4} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Aesthesis, Athens</h4>
                                    </div>
                                    <p>Our first resort in Greece captures the cosmopolitan glamour of the Athenian Riviera, with mid-century design and elevated al fresco living.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer5} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>SOne&Only Kéa Island, Greece</h4>
                                    </div>
                                    <p>At the gateway to the Cyclades, just 45 minutes by speedboat from Athens, discover an untouched island shaped by time, where the secrets of the Aegean come to life.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer6} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Reethi Rah, Maldives</h4>
                                    </div>
                                    <p>Explore our Indian Ocean hideaway, where 12 palm-fringed beaches, iconic overwater villas, and deserted stretches of sand await.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container2">
                        <Slider {...settings2}>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer7} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Le Saint Géran, Mauritius</h4>
                                    </div>
                                    <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.Discover a tranquil beachfront escape in the Indian Ocean, where authentic Mauritian charm meets timeless coastal glamour.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer8} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Mandarina, Mexico</h4>
                                    </div>
                                    <p>Immersed in the untamed nature of Mexico’s Riviera Nayarit, discover a hidden retreat where the lush rainforest canopy meets the Pacific Ocean.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer9} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Palmilla, Los Cabos</h4>
                                    </div>
                                    <p>Find harmony between the land and the sea at our legendary Los Cabos resort, a glamorous coastal sanctuary imbued with Mexican authenticity.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container2">
                        <Slider {...settings2}>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer10} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Portonovi, Montenegro</h4>
                                    </div>
                                    <p>Embrace a glamorous nautical lifestyle, exploring charming mediaeval towns, dramatic mountain landscapes and rugged Adriatic coastlines.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer11} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Gorilla's Nest, Rwanda</h4>
                                    </div>
                                    <p>Immerse yourself in the untamed wilderness of Rwanda, where bucket-list experiences in nature meet a haven of refined relaxation.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer12} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Nyungwe House, Rwanda</h4>
                                    </div>
                                    <p>Enveloped by vivid rainforest and a verdant tea plantation, discover a back-to-nature sanctuary with wild-at-heart adventures and elevated wellness.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container2">
                        <Slider {...settings2}>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer13} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Cape Town, South Africa</h4>
                                    </div>
                                    <p>Situated on the vibrant V&A waterfront, discover an artistic urban retreat with panoramic views over the marina and Table Mountain.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer14} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Desaru Coast, Malaysia</h4>
                                    </div>
                                    <p>Hidden between the rainforest and the sea in Malaysia’s enchanting southeast, discover a tropical sanctuary within easy reach of Singapore.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>

                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container3">
                        <Slider {...settings3}>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer1} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Royal Mirage, Dubai</h4>
                                    </div>
                                    <p>Explore our timeless Arabian resort, where a private stretch of beach and three distinct spaces create a place of connection for all ages.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer2} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only The Palm, Dubai</h4>
                                    </div>
                                    <p>Discover an effortlessly chic resort on the Palm’s exclusive ‘riviera’, where coastal tranquillity meets the energy of Dubai’s urban skyline.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer3} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only One Za'abeel</h4>
                                    </div>
                                    <p>Imagine a place that’s the centre of everything. Of culture, of cuisine, of entertainment, of business. Where the fascinating gravitate by day, and circulate by night, and where everything the city offers can be curated, just for you.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container3">
                        <Slider {...settings3}>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer4} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Aesthesis, Athens</h4>
                                    </div>
                                    <p>Our first resort in Greece captures the cosmopolitan glamour of the Athenian Riviera, with mid-century design and elevated al fresco living.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer5} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>SOne&Only Kéa Island, Greece</h4>
                                    </div>
                                    <p>At the gateway to the Cyclades, just 45 minutes by speedboat from Athens, discover an untouched island shaped by time, where the secrets of the Aegean come to life.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer6} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Reethi Rah, Maldives</h4>
                                    </div>
                                    <p>Explore our Indian Ocean hideaway, where 12 palm-fringed beaches, iconic overwater villas, and deserted stretches of sand await.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container3">
                        <Slider {...settings3}>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer7} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Le Saint Géran, Mauritius</h4>
                                    </div>
                                    <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.Discover a tranquil beachfront escape in the Indian Ocean, where authentic Mauritian charm meets timeless coastal glamour.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer8} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Mandarina, Mexico</h4>
                                    </div>
                                    <p>Immersed in the untamed nature of Mexico’s Riviera Nayarit, discover a hidden retreat where the lush rainforest canopy meets the Pacific Ocean.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer9} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Palmilla, Los Cabos</h4>
                                    </div>
                                    <p>Find harmony between the land and the sea at our legendary Los Cabos resort, a glamorous coastal sanctuary imbued with Mexican authenticity.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container3">
                        <Slider {...settings3}>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer10} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Portonovi, Montenegro</h4>
                                    </div>
                                    <p>Embrace a glamorous nautical lifestyle, exploring charming mediaeval towns, dramatic mountain landscapes and rugged Adriatic coastlines.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer11} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Gorilla's Nest, Rwanda</h4>
                                    </div>
                                    <p>Immerse yourself in the untamed wilderness of Rwanda, where bucket-list experiences in nature meet a haven of refined relaxation.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer12} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Nyungwe House, Rwanda</h4>
                                    </div>
                                    <p>Enveloped by vivid rainforest and a verdant tea plantation, discover a back-to-nature sanctuary with wild-at-heart adventures and elevated wellness.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-container3">
                        <Slider {...settings3}>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer13} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Cape Town, South Africa</h4>
                                    </div>
                                    <p>Situated on the vibrant V&A waterfront, discover an artistic urban retreat with panoramic views over the marina and Table Mountain.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>
                                <div className='offerCardImage'>
                                    <img src={offer14} alt='img' />
                                </div>
                                <div className='offerCardDetails'>
                                    <div className='offerdetails'>
                                        <h4>One&Only Desaru Coast, Malaysia</h4>
                                    </div>
                                    <p>Hidden between the rainforest and the sea in Malaysia’s enchanting southeast, discover a tropical sanctuary within easy reach of Singapore.</p>
                                    <div className='offlinks'>
                                        <a href='#'>explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className='offerCard'>

                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
