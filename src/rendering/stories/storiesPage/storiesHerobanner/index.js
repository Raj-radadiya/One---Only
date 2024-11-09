import React from 'react'
import './herobanner.scss'
import stories from '../../../../assets/image/storiesHerobannerImg.webp';
import grater from '../../../../assets/icon/icons8-greater-than-10.png';
import island from '../../../../assets/image/islandWater.jpg';
export default function StoriesHerobanner() {
  return (
    <div>
      <div className='storiesHerobannerMain'>
        <div className='stoiesHerobannerImg'>
          <img src={stories} alt='img' />
        </div>
        <div className='storiesBannerText'>
          <div className='storiesBannerHead'>
            <h1>ONE&ONLY Stories</h1>
          </div>
          <div className='storiesBannerPara'>
            <p>Inspiration to bring a little One&Only magic into your own space.</p>
          </div>
        </div>
      </div>

      <div className='container5'>
        <div className='storiesSec'>
          <a>One&Only Resorts</a>
          <a><img src={grater} alt='grater' /></a>
          <a className='stories'>stories</a>
        </div>
      </div>
      <div className='islandAdventureMain'>
        <div className='container5'>
          <div className='islandCardMain'>
            <div className='islandLeft'>
              <div className='islandDisc'>
                <div className='islandCardHead'>
                  <h2>Secrets of Kéa Island</h2>
                </div>
                <div className='islandCardPara'>
                  <p>Who better to reveal the secrets of Kéa Island than the passionate people who call her home. Discover why this fabled island at the gateway to the Cyclades is a magnet for deep-sea divers, as Yannis Tzavelakos takes you below the waves, where storied shipwrecks and kaleidoscopic marine parks are waiting to be explored.</p>
                </div>
                <div className='islandBtn'>
                  <button>explore</button>
                </div>
              </div>
            </div>
            <div className='islandRight'>
              <img src={island} alt='img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
