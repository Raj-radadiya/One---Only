import React from 'react'
import './specification.scss'
import roomBookingImg from '../../../../assets/image/roombookingImg.webp';
export default function HostelSpecification() {
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
                        <p>1 roundtrip airport transfer provided up to booked villa occupancy. *additional transportation is available at an extra cost</p>
                        <p>Dedicated host </p>
                        <p>Dedicated buggy service </p>
                        <p>Daily breakfast in the resort’s designated restaurant or in-home breakfast, available by prior request </p>
                        <p>Pre-dinner cocktails for all villa guests once per stay</p>
                        <p>1 complimentary in-villa yoga session</p>
                        <p>Pre-arrival planning and personalization of activities and amenities </p>
                        <p>KidsOnly children’s activities and programs at the resort. A full program is available at KidsOnly Club (additional costs for some activities).</p>
                        <p>Laundry, groceries, and transportation services – available upon request (chargeable) </p>
                        <p>Complimentary In-villa chef and waiter daily for either lunch or dinner during normal operating hours (additional cost for food) </p>
                        <p>Private Home wine and bar list includes:</p>
                        <p>- Four complimentary bottles of spirits</p>
                        <p>- Complimentary bottles of red wine, white wine, and rosé (2 bottles of each)</p>
                        <p>- Full wine and spirits list available to choose from at an additional cost</p>
                    </div>
                </div>
            </div>

            <div className='roomBookDetails'>
                <div className='roomBooking'>
                    <div className='roomBookingMain'>
                        <div className='roomBookingImg'>
                            <img src={roomBookingImg} alt='img' />
                        </div>
                        <div className='roomBookingDisc'>
                            <div className='roomBookingText'>
                                <div className='roomBookingHead'>
                                    <h2>OWN A HOME</h2>
                                </div>
                                <div className='roomBookingPara'>
                                    <p>One&Only Mandarina Private Homes are also available to purchase. To contact our Sales Office directly:</p>
                                </div>
                                <div className='roomBookinkContact'>
                                    <p>Tel: <a href='#'> +52 322 216 9992</a></p>
                                    <p>USA Toll Free: <a href='#'>+1 888 997 7732</a></p>
                                    <p>Email: <a href='#'>info@discovermandarina.com</a></p>
                                </div>
                                <div className='anotherPara'>
                                    <p>Sales tours by appointment only</p>
                                </div>
                                <div className='RoomBookBtn'>
                                    <button>Enquire Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
