import React from 'react'
import './rent.scss'
import grater from '../../../../assets/icon/icons8-greater-than-10.png';
import roomFirst from '../../../../assets/image/athens1bedroom.webp';
import roomSecond from '../../../../assets/image/athens2bedroom.webp';
export default function AthensHolidayTime() {
    return (
        <div>
            <div className='container3'>
                <div className='montenegroSec'>
                    <a>One&Only Aesthesis, Athens</a>
                    <a><img src={grater} alt='grater' /></a>
                    <a>Private Homes</a>
                    <a><img src={grater} alt='grater' /></a>
                    <a className='stays'>Stays</a>
                </div>

                <div className='montenegroDisc'>
                    <div className='montenegroHead'>
                        <h2>Your Holiday Home on the Athenian Riviera</h2>
                    </div>
                    <div className='montenegroPara'>
                        <p>Immerse yourself in the glamour of the Athenian Riviera with our exceptional collection of One&Only Aesthesis Private Homes, now available to book for stays. To enquire about combining two villas to create a three- or four-bedroom retreat, email <a href='#'>reservations.aesthesis@oneandonlyresorts.com.</a></p>
                    </div>
                    <div className='montenegroBtn'>
                        <button>Book Your Stay</button>
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
                                <h4>1-Bedroom Private Homes</h4>
                            </div>
                            <div className='roomPara'>
                                <p>An exceptional one-off, discover our one-bedroom Villa Thea at One&Only Aesthesis, with free-flowing indoor-outdoor living and an al fresco jacuzzi.</p>
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
                                <h4>2-Bedroom Private Homes</h4>
                            </div>
                            <div className='roomPara'>
                                <p>Embrace elevated riviera living with a choice of two-bedroom villas, each featuring sea views, expansive outdoor living spaces, a pool and jacuzzi.</p>
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
