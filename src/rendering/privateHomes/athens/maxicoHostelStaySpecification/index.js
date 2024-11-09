import React from 'react'
import './specification.scss'
import bath from '../../../../assets/image/insidewaterbath.webp';
import beach from '../../../../assets/image/roomwithbeach.webp';
import roomviewFirst from '../../../../assets/image/villaview.webp';
import roomviewSecond from '../../../../assets/image/residencesview.webp';
export default function AthensVillaBook() {
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

            <div className='athensCardMain'>
                <div className='container5'>
                    <div className='athensCard'>
                        <div className='athensCardLeft'>
                            <div className='beachImg'>
                                <img src={beach} alt='img' />
                            </div>
                        </div>
                        <div className='athensCardRight'>
                            <div className='inside'>
                                <img src={bath} alt='img' />
                            </div>
                            <div className='athensCardDisc'>
                                <div className='athensCardHead'>
                                    <strong>ONE&ONLY PRIVATE HOME STAYS</strong>
                                </div>
                                <div className='athensCardPara'>
                                    <p>Explore a remarkable collection of One&Only Aesthesis Private Homes, now available to book on the glittering shoreline. Modelled on the iconic beach bungalows of the Athenian Riviera, these exceptional villas maximise indoor-outdoor living and luxurious home comforts.</p>
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
                                <h4>Villas</h4>
                            </div>
                            <div className='roomviewPara'>
                                <p>Delight in the exceptional comfort of our remarkable beachfront villas, where expansive outdoor entertaining spaces capture the spirit of the Athenian Riviera’s heyday.</p>
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
                                <h4>Residences</h4>
                            </div>
                            <div className='roomviewPara'>
                                <p>Make yourselves at home in sun-soaked southern Athens at our irresistible residences, designed for families and groups of friends. It’s time to reconnect.</p>
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
