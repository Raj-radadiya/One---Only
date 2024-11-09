import React from 'react'
import './hotel.scss'
import down from '../../assets/icon/icons8-down-15.png';
import minus from '../../assets/icon/icons8-minus-10.png';
import plus from '../../assets/icon/icons8-plus-10.png';
export default function HotelAvailablity() {
    return (
        <div>
            <div className='hotelBookSection'>
                <div className='dateSection'>
                    <div className='dateTitle'>
                        <p>Check-in/Check-out</p>
                    </div>
                    <div className='datesDropdown'>
                        <div className='dates'>
                            <p>select dates</p>
                        </div>
                        <div className='dropdownArrow'>
                            <img src={down} alt='down' />
                        </div>
                    </div>
                </div>
                <div className='adultSection'>
                    <div className='guestHead'>
                        <p>adults</p>
                    </div>
                    <div className='guestCount'>
                        <div className='guestDicriment'>
                            <img src={minus} alt='img' />
                        </div>
                        <div className='person'>
                            <p>2</p>
                        </div>
                        <div className='guestIncriment'>
                            <img src={plus} alt='img' />
                        </div>
                    </div>
                </div>
                <div className='childSection'>
                    <div className='childrenHead'>
                        <p>children</p>
                    </div>
                    <div className='childrenCount'>
                        <div className='childrenDicriment'>
                            <img src={minus} alt='img' />
                        </div>
                        <div className='children'>
                            <p>2</p>
                        </div>
                        <div className='childrenIncriment'>
                            <img src={plus} alt='img' />
                        </div>
                    </div>
                </div>
                <div className='checkAvailableSection'>
                    <button>check  availablity</button>
                </div>
            </div>
        </div>
    )
}
