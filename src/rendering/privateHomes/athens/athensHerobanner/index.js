import React from 'react'
import './herobanner.scss'
import athens from '../../../../assets/image/athesherobanner.webp';
import HotelAvailablity from '../../../../layout/hotelAvailablity';
export default function AthensHerobanner() {
    return (
        <div>
            <div className='athensMain'>
                <div className='athensHerobannerMain'>
                    <div className='athensHerobannerImg'>
                        <img src={athens} alt='image' />
                    </div>
                    <div className='athensHerobannerText'>
                        <div className='athensBannerHead'>
                            <h1>One&Only Aesthesis Private Home Stays</h1>
                        </div>
                        <div className='athensBannerPara'>
                            <p>Situated between our protected pine grove and the sea, explore an exclusive selection of private homes available to book at One&Only Aesthesis.</p>
                        </div>
                    </div>
                </div>
                <div className='hotelAvailablity'>
                    <HotelAvailablity/>
                </div>
            </div>
        </div>
    )
}
