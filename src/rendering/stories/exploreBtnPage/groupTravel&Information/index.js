import React from 'react'
import './travel.scss'
import architecture from '../../../../assets/video/oldArchitecture.webp';
import gold from '../../../../assets/video/goldvideo.webp';
import play from '../../../../assets/icon/play.svg';
import couple from '../../../../assets/image/couple.webp';
import bee from '../../../../assets/image/bee.webp';
export default function GroupTravel() {
    return (
        <div>
            <div className='architectureMain'>
                <div className='container5'>
                    <div className='architectureCardMain'>
                        <div className='architectureLeft'>
                            <div className='architectureDisc'>
                                <div className='architectureCardHead'>
                                    <h2>Beneath the Surface</h2>
                                </div>
                                <div className='architectureCardPara'>
                                    <p>Resident archaeologist Petroula Tatsopoulou scratches beneath the surface of this captivating architecture to reveal layers of history and mystery at every turn.</p>
                                </div>
                            </div>
                        </div>
                        <div className='architectureRight'>
                            <div className='ArchitectureImg'>
                                <img src={architecture} alt='img' />
                            </div>
                            <div className='playIcon'>
                                <img src={play} alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='goldMain'>
                <div className='container5'>
                    <div className='goldCardMain'>
                        <div className='goldLeft'>
                            <div className='goldImg'>
                                <img src={gold} alt='img' />
                            </div>
                            <div className='playLeftIcon'>
                                <img src={play} alt='img' />
                            </div>
                        </div>
                        <div className='goldRight'>
                            <div className='goldDisc'>
                                <div className='goldCardHead'>
                                    <h2>Forged in Gold</h2>
                                </div>
                                <div className='goldCardPara'>
                                    <p>Drawing inspiration from Kéa’s natural and nautical wonders, jewellers Alexia and Stalo Karides of Ysso have created covetable pieces for One&Only Kéa Island, hand-crafted in an Athens workshop.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container5'>
                <div className='farmTitleMain'>
                    <div className='farmHead'>
                        <h2>Nature's Bounty</h2>
                    </div>
                    <div className='farmPara'>
                        <p>Discover the unique culinary riches of Kéa Island with third-generation beekeeper Georges Thodos and his wife, Geraldine, who produce wild thyme honey on their idyllic farm.</p>
                    </div>
                </div>
                <div className='farmMain'>
                    <div className='farmLeft'>
                        <img src={bee} alt='book' />
                    </div>
                    <div className='farmRight'>
                        <div className='farmImg'>
                            <img src={couple} alt='img' />
                        </div>
                        <div className='farmIcon'>
                            <img src={play} alt='img' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
