import React from 'react'
import './exploresea.scss'
import grater from '../../../../assets/icon/icons8-greater-than-10.png';
import boat from '../../../../assets/image/boatonwater.webp';
import art from '../../../../assets/image/artposter.webp';
import farry from '../../../../assets/video/farryloadvideo.webp';
import pause from '../../../../assets/icon/play.svg';
import disction from '../../../../assets/video/teamdisctionvideo.webp';
import detailsBook from '../../../../assets/image/detailsBook.webp';
export default function ExploreSea() {
    return (
        <div>
            <div className='container5'>
                <div className='exploreBtnSec'>
                    <a>One&Only Kéa Island</a>
                    <a><img src={grater} alt='grater' /></a>
                    <a>Experiences</a>
                    <a><img src={grater} alt='grater' /></a>
                    <a className='secrets'>Secrets of Kéa</a>
                </div>

                <div className='exploreBtnDisc'>
                    <div className='exploreBtnHead'>
                        <h2>Untold Wonders</h2>
                    </div>
                    <div className='exploreBtnPara'>
                        <p>A land of rugged natural beauty and cultural rituals, Kéa feels like a closely guarded secret. Who better to reveal its hidden wonders than the people who call this enigmatic island home?</p>
                    </div>
                </div>

                <div className='exploreSeaDetails'>
                    <div className='exploreSea'>
                        <div className='exploreSeaMain'>
                            <div className='exploreSeaImg'>
                                <img src={boat} alt='img' />
                            </div>
                            <div className='exploreSeaDisc'>
                                <div className='exploreSeaText'>
                                    <div className='exploreSeaHead'>
                                        <h2>The Deep Blue</h2>
                                    </div>
                                    <div className='exploreSeaPara'>
                                        <p>Dive master Yannis Tzavelakos takes us deep beneath the Aegean Sea, revealing the historic shipwrecks and flourishing marine parks that lie just below the surface of Kéa’s sapphire waters.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='farryLoadMain'>
                <div className='farryLoadVideo'>
                    <img src={farry} alt='img' />
                </div>
                <div className='playIcon'>
                    <img src={pause} alt='img' />
                </div>
            </div>


            <div className='container3'>
                <div className='artPosterMain'>
                    <div className='artPosterImg'>
                        <img src={art} alt='image' />
                    </div>
                    <div className='artPosterText'>
                        <h4>Aegean Art & Culture</h4>
                        <p>Explore the island’s captivating art and culture scene as you follow archaeologist Sotiria Antonopoulou of Keos Culture through the storied streets of the colourful hillside town of Ioulida.</p>
                    </div>
                </div>
            </div>

            <div className='container5'>
                <div className='teamDisctionMain'>
                    <div className='teamDisctuionLeft'>
                        <div className='disctionImg'>
                            <img src={disction} alt='img' />
                        </div>
                        <div className='playIcon'>
                            <img src={pause} alt='img' />
                        </div>
                    </div>

                    <div className='teamDisctionRight'>
                        <img src={detailsBook} alt='book' />
                    </div>
                </div>
            </div>
        </div>
    )
}
