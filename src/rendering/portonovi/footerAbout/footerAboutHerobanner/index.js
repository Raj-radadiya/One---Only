import React from 'react'
import './about.scss'
import footerAbout from '../../../../assets/image/footerAboutHerobanner.webp';
import HotelAvailablity from '../../../../layout/hotelAvailablity';
export default function FooterHerobanner() {
    return (
        <div>
            <div className='footerAboutHerobannerMain'>
                <div className='footerAboutHerobannerImg'>
                    <img src={footerAbout} alt='image' />
                </div>
                <div className='footerAboutHerobannerText'>
                    <div className='footerAboutBannerHead'>
                        <h1>About One&Only Portonovi Luxury Resort</h1>
                    </div>
                    <div className='footerAboutBannerPara'>
                        <p>Palatial living framed by fjord-like beauty.</p>
                    </div>
                </div>
            </div>
            <div className='hotelAvailablity'>
                <HotelAvailablity />
            </div>
        </div>
    )
}
