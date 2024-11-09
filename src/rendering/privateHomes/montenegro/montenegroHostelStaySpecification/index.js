import React from 'react'
import './specification.scss'
import homeRentImg from '../../../../assets/image/homerent.webp';
import roomviewFirst from '../../../../assets/image/roomview1.webp';
import roomviewSecond from '../../../../assets/image/roomview2.webp';
export default function MontenegroHostelSpecification() {
    return (
        <div>
            <div className='hostelSpecificationMain'>
                <div className='specificationLeft'>
                    <div className='specificationHeading'>
                        <h2>SPECIAL INCLUSIONS</h2>
                    </div>
                </div>
                <div className='specificationRight'>
                    <div className='specificationDetails'>
                        <p>Access to One&Only resort amenities and services – reservations recommended</p>
                        <p>Dedicated host</p>
                        <p>Dedicated buggy service</p>
                        <p>Daily breakfast in the resort's designated restaurant or in-home continental breakfast, available by prior request</p>
                        <p>Fully-equipped kitchens</p>
                        <p>Access to Resort Spa, Fitness Centre and pool facilities upon reservation via your dedicated host</p>
                        <p>Pre-arrival planning and personalisation of activities and amenities</p>
                        <p>sOnly children's activities and programmes at the resort, available by prior reservation</p>
                        <p>One&Only robes, bathroom amenities and signature touchpoints</p>
                        <p>Twice-daily housekeeping and turn-down service</p>
                        <p>Laundry, grocery, and transportation services – available upon request (chargeable)</p>
                        <p>In-villa breakfast and Private Chef – available upon request (chargeable)</p>
                        <p>In-villa dining and catering – available upon request (chargeable)</p>
                    </div>
                </div>
            </div>

            <div className='homeBookDetails'>
                <div className='homeBooking'>
                    <div className='homeBookingMain'>
                        <div className='homeBookingImg'>
                            <img src={homeRentImg} alt='img' />
                        </div>
                        <div className='homeBookingDisc'>
                            <div className='homeBookingText'>
                                <div className='homeBookingHead'>
                                    <h2>Would You Like to Own a Home?</h2>
                                </div>
                                <div className='homeBookingPara'>
                                    <p>One&Only Portonovi Private Homes are also available to purchase. To contact our Sales Office directly:</p>
                                </div>
                                <div className='homeBookinkContact'>
                                    <p>Email: <a href='#'> enquiries@portonovi.com</a></p>
                                </div>
                                <div className='anotherPara'>
                                    <p>Sales tours by appointment only</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='roomviewHead'>
                    <h2>You may also like</h2>
                </div>
                <div className='roomviewCardMain'>
                    <div className='roomviewCard'>
                        <div className='roomviewImg'>
                            <img src={roomviewFirst} alt='image' />
                        </div>
                        <div className='roomviewText'>
                            <div className='roomviewHeading'>
                                <h4>Villa One at One&Only Portonovi</h4>
                            </div>
                            <div className='roomviewPara'>
                                <p>The crown jewel of One&Only Portonovi resort, soak up the unrivalled seclusion and untold luxury of this exceptional one-off villa, home to three bedrooms, a private hydrotherapy pool, and alfresco living on the edge of Boka Bay.
                                </p>
                            </div>
                            <div className='roomviewLink'>
                                <a href='#'>Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className='roomviewCard'>
                        <div className='roomviewImg'>
                            <img src={roomviewSecond} alt='image' />
                        </div>
                        <div className='roomviewText'>
                            <div className='roomviewHeading'>
                                <h4>Villa Two at One&Only Portonovi</h4>
                            </div>
                            <div className='roomviewPara'>
                                <p>Perfectly positioned to frame spectacular views of the surrounding marina, bay, and mountains, this two-bedroom pool villa is the ideal retreats for friends and families seeking flexible space for all.</p>
                            </div>
                            <div className='roomviewLink'>
                                <a href='#'>Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
