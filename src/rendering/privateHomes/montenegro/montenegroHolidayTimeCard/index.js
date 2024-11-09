import React from 'react'
import './rent.scss'
import grater from '../../../../assets/icon/icons8-greater-than-10.png';
import bath from '../../../../assets/image/montenegrohotelbath.webp';
import dine from '../../../../assets/image/montenegrohoteldine.webp';
import roomFirst from '../../../../assets/image/montenegro3bedroom.webp';
import roomSecond from '../../../../assets/image/montenegro4bedroom.webp';
export default function MontenegroHolidayTime() {
    return (
        <div>
            <div className='container3'>
                <div className='montenegroSec'>
                    <a>One&Only Resorts</a>
                    <a><img src={grater} alt='grater' /></a>
                    <a>Private Homes</a>
                    <a><img src={grater} alt='grater' /></a>
                    <a className='stays'>Stays</a>
                </div>

                <div className='montenegroDisc'>
                    <div className='montenegroHead'>
                        <h2>Your Holiday Home in Montenegro</h2>
                    </div>
                    <div className='montenegroPara'>
                        <p>Reconnect with family and friends on the shores of Boka Bay, with a collection of private residences available to book. Offering three or four bedrooms, each villa combines the elevated comforts of home with the exceptional One&Only Portonovi resort amenities on your doorstep.</p>
                    </div>
                    <div className='montenegroBtn'>
                        <button>Book Your Stay</button>
                    </div>
                </div>
            </div>
            <div className='montenegroCardMain'>
                <div className='container5'>
                    <div className='montenegroCard'>
                        <div className='montenegroCardLeft'>
                            <div className='whaleImg'>
                                <img src={dine} alt='img' />
                            </div>
                        </div>
                        <div className='montenegroCardRight'>
                            <div className='restArea'>
                                <img src={bath} alt='img' />
                            </div>
                            <div className='montenegroCardDisc'>
                                <div className='montenegroCardHead'>
                                    <strong>ONE&ONLY PRIVATE HOME STAYS</strong>
                                </div>
                                <div className='montenegroCardPara'>
                                    <p>Designed to maximise the idyllic Montenegrin setting, each villa offers an abundance of alfresco living spaces, including a private pool, sandy beach and outdoor dining terrace, perfect for laid-back dining under the Adriatic sun.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='roomMain'>
                    <div className='roomCard'>
                        <div className='roomImg'>
                            <img src={roomFirst} alt='image' />
                        </div>
                        <div className='roomText'>
                            <div className='roomHeading'>
                                <h4>3-Bedroom Private Homes</h4>
                            </div>
                            <div className='roomPara'>
                                <p>Embrace an elevated riviera lifestyle with our collection of chic three-bedroom private homes available to stay in, each featuring a private pool, sandy beach and jetty.</p>
                            </div>
                            <div className='roomLink'>
                                <a href='#'>Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className='roomCard'>
                        <div className='roomImg'>
                            <img src={roomSecond} alt='image' />
                        </div>
                        <div className='roomText'>
                            <div className='roomHeading'>
                                <h4>4-Bedroom Private Homes</h4>
                            </div>
                            <div className='roomPara'>
                                <p>With an abundance of space for family and friends, the largest of our private homes feature four en-suite bedrooms and exceptional outdoor living.</p>
                            </div>
                            <div className='roomLink'>
                                <a href='#'>Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
