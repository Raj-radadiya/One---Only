import React from 'react'
import './herobanner.scss'
import wellness from '../../../../assets/image/wellnessHerobanner.webp';
export default function WellnessHerobanner() {
    return (
        <div>
            <div className='wellnessHeroMain'>
                <div className='wellnessImg'>
                    <img src={wellness} alt='image' />
                </div>
                <div className='wellnessText'>
                    <div className='wellnessBannerHead'>
                        <h1>Reset with One&Only</h1>
                    </div>
                    <div className='wellnessBannerPara'>
                        <p>Embark on a journey of transformation and rejuvenation with One&Only's elevated wellness rituals.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
