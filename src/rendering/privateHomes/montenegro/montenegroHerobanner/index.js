import React from 'react'
import './herobanner.scss'
import montenegro from '../../../../assets/image/montenegroherobanner.webp';
import HotelAvailablity from '../../../../layout/hotelAvailablity';

export default function MontenegroHerobanner() {
    return (
        <div>
            <div className='montenegroMain'>
                <div className='montenegroHerobannerMain'>
                    <div className='montenegroHerobannerImg'>
                        <img src={montenegro} alt='image' />
                    </div>
                    <div className='montenegroHerobannerText'>
                        <div className='montenegroBannerHead'>
                            <h1>One&Only Portonovi Private Home Stays</h1>
                        </div>
                        <div className='montenegroBannerPara'>
                            <p>Plan the ultimate family holiday or group getaway with an exceptional collection of private villas in Montenegro.</p>
                        </div>
                    </div>
                </div>
                <div className='hotelAvailablity'>
                    <HotelAvailablity />
                </div>
            </div>
        </div>
    )
}
