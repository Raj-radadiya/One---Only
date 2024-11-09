import React from 'react'
import './herobanner.scss'
import maxico from '../../../../assets/image/maxicoHerobanner.webp';
export default function MaxicoHerobanner() {
    return (
        <div>
            <div className='maxicoHerobannerMain'>
                <div className='maxicoHerobannerImg'>
                    <img src={maxico} alt='image' />
                </div>
                <div className='maxicoHerobannerText'>
                    <div className='maxicoBannerHead'>
                        <h1>ONE&ONLY MANDARINA PRIVATE HOME STAYS</h1>
                    </div>
                    <div className='maxicoBannerPara'>
                        <p>The ultimate escape for friends and families, our collection of private homes is ready to stay in. Explore Mexico from the comfort of a home base.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
