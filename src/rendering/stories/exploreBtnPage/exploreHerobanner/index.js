import React from 'react'
import './herobanner.scss'
import explore from '../../../../assets/image/EXPLOREBTNHEROBANNER.webp';
import HotelAvailablity from '../../../../layout/hotelAvailablity';
export default function ExploreHerobanner() {
    return (
        <div>
            <div className='exploreBtnMain'>
                <div className='exploreBtnHerobannerMain'>
                    <div className='exploreBtnHerobannerImg'>
                        <img src={explore} alt='image' />
                    </div>
                    <div className='exploreBtnHerobannerText'>
                        <div className='exploreBtnBannerHead'>
                            <h1>Secrets of Kéa</h1>
                        </div>
                        <div className='exploreBtnBannerPara'>
                            <p>Let us reveal the wonders of this fabled island as locals share untold stories, exceptional experiences and cultural charms of Kéa.</p>
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
