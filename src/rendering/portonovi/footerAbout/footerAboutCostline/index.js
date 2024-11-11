import React from 'react'
import './costline.scss'
import grater from '../../../../assets/icon/icons8-greater-than-10.png';
import Exclusively from '../../../../assets/image/footeraboutlocationmain.webp';
import lens from '../../../../assets/image/lensMain.webp';
import designingRoom from '../../../../assets/image/designingroom.webp';
import nature from '../../../../assets/image/natureIslandImg.webp';
export default function Costline() {
    return (
        <div>
            <div className='container5'>
                <div className='costLineSec'>
                    <a>One&Only Portonovi</a>
                    <a><img src={grater} alt='grater' /></a>
                    <a className='family'>About</a>
                </div>

                <div className='costLineDisc'>
                    <div className='costLineHead'>
                        <h2>A stately new addition to the striking coastline</h2>
                    </div>
                    <div className='smallLine'></div>
                    <div className='costLinePara'>
                        <p>Jagged mountain peaks, tousled forests and lucid Adriatic waters await.</p>
                    </div>
                </div>

                <div className='portonoviLocationMain'>
                    <div className='portonoviLocationDisc'>
                        <div className='portonoviLocationText'>
                            <div className='portonoviLocationHead'>
                                <h2>DISCOVER THE LOCATION</h2>
                            </div>
                            <div className='portonoviLocationPara'>
                                <p>Positioned just off the open Adriatic coastline, at the elegant entrance to Boka Bay in Herceg Novi, <strong> One&Only Portonovi </strong> is the jewel of Montenegro's flourishing new riviera. Rejoice in pristine beaches, sun-soaked sailing, and forest hiking. Wander the cobbled streets and fresco-filled churches of neighbouring Medieval towns like Perast and Kotor. Where culture meets natural beauty, glamour, and adventure, you can experience the most unique <strong>things to do </strong> in Montenegro.</p>
                            </div>
                            <div className='portonoviLocationBtn'>
                                <button>view location</button>
                            </div>
                        </div>
                    </div>
                    <div className='portonoviLocationImg'>
                        <img src={Exclusively} alt='img' />
                    </div>
                </div>
            </div>




            <div className='designingRoomCardMain'>
                <div className='container5'>
                    <div className='designingRoomMain'>
                        <div className='designingRoomLeft'>
                            <div className='designingRoomImg'>
                                <img src={designingRoom} alt='img' />
                            </div>
                        </div>
                        <div className='designingRoomRight'>
                            <div className='designingRoomDisc'>
                                <div className='designingRoomCardHead'>
                                    <h2>Designing an icon</h2>
                                </div>
                                <div className='designingRoomCardPara'>
                                    <p>Discover the inspiration behind the stunning architecture and design of One&Only Portonovi, our palace on the edge of Boka Bay. Year-round allure comes courtesy of local arts, roaring fireplaces and a soothing colour palette that echoes our natural surrounds.</p>
                                </div>
                                <div className='designingRoomBtn'>
                                    <button>explore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container5'>
                <div className='lensMain'>
                    <div className='lensDisc'>
                        <div className='lensText'>
                            <div className='lensHead'>
                                <h2>Life through a lens</h2>
                            </div>
                            <div className='lensPara'>
                                <p>Talented New York travel photographer Alice Gao shares inspiring images from her stay at One&Only Portonovi, where she fell for the relaxed coastal vibe, striking architecture, delicious food and natural wonders. The resort proved the perfect spot to unwind.</p>
                            </div>
                            <div className='lensBtn'>
                                <button>view location</button>
                            </div>
                        </div>
                    </div>
                    <div className='lensImg'>
                        <img src={lens} alt='img' />
                    </div>
                </div>
            </div>
            <div className='natureIslandMain'>
                <div className='natureIslandHead'>
                    <h2>NATURE IN FULL GLORY</h2>
                </div>
                <div className='natureIslandImg'>
                    <img src={nature} alt='img' />
                </div>

                <div className='natureIslandDisc'>
                    <div className='natureIslandPara'>
                        <p>“At the birth of our planet, the most beautiful encounter between the land and the sea must have happened at the coast of Montenegro. When the pearls of nature were sown, handfuls of them were cast on this soil.” - Lord Byron</p>
                    </div>
                    <div className='natureIslandBtn'>
                        <button>Download Brochure</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
