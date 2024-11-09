import React from 'react'
import './living.scss'
import roomSea from '../../../../assets/image/roomseaIng.webp';
import bathingWomen from '../../../../assets/image/bathingWomen.webp';
import seatingView from '../../../../assets/image/seatingView.webp';
import island from '../../../../assets/image/IslandFull.webp';
export default function LivingArea() {
    return (
        <div>
            <div className='roomSeaCardMain'>
                <div className='container5'>
                    <div className='roomSeaMain'>
                        <div className='roomSeaLeft'>
                            <div className='roomSeaImg'>
                                <img src={roomSea} alt='img' />
                            </div>
                        </div>
                        <div className='roomSeaRight'>
                            <div className='roomSeaDisc'>
                                <div className='roomSeaCardHead'>
                                    <h2>Chic & palatial living</h2>
                                </div>
                                <div className='roomSeaCardPara'>
                                    <p>Located in the heart of Boka Bay, our 60 acres of sprawling resort overlooks a dramatic coastline of mountain vistas and calm waters, emphasising a sense of privacy and chic palatial living.</p>
                                </div>
                                <div className='roomSeaBtn'>
                                    <button>explore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='seatingViewMain'>
                <div className='container5'>
                    <div className='seatingViewCardMain'>
                        <div className='seatingViewLeft'>
                            <div className='seatingViewDisc'>
                                <div className='seatingViewCardHead'>
                                    <h2>Exceptional Private Homes</h2>
                                </div>
                                <div className='seatingViewCardPara'>
                                    <p>Explore our exclusive collection of one-of-a-kind One&Only Portonovi Private Homes, now available to purchase or to stay in Montenegro. With three or four bedrooms, luxurious resort amenities, and a private pool, beach and jetty, they epitomise chic riviera living.</p>
                                </div>
                                <div className='seatingViewBtn'>
                                    <button>explore</button>
                                </div>
                            </div>
                        </div>
                        <div className='seatingViewRight'>
                            <div className='seatingViewImg'>
                                <img src={seatingView} alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='roomSeaCardMain'>
                <div className='container5'>
                    <div className='roomSeaMain'>
                        <div className='roomSeaLeft'>
                            <div className='roomSeaImg'>
                                <img src={bathingWomen} alt='img' />
                            </div>
                        </div>
                        <div className='roomSeaRight'>
                            <div className='roomSeaDisc'>
                                <div className='roomSeaCardHead'>
                                    <h2>Chenot wellness programmes</h2>
                                </div>
                                <div className='roomSeaCardPara'>
                                    <p>Discover a selection of curated wellness programmes at <strong>Chenot Espace</strong> including a 6-day Detox Programme; 4-day De-Stress & Re-Charge Programme; 3-day Fitness Programme; and a 2-day Weekend Spa programme.</p>
                                </div>
                                <div className='roomSeaBtn'>
                                    <button>explore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='island'>
                <div className='islandFullImg'>
                    <img src={island} alt='img' />
                </div>
                <div className='islandText'>
                    <h2>“Montenegro might be small, but it is wild, spirited and grand in its beauty. Just like a piece of fruit: the smaller it is – the better it tastes.”</h2>
                </div>
            </div>
        </div>
    )
}
