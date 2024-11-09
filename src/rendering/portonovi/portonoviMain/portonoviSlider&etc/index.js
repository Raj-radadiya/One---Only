import React from 'react'
import './slider.scss'
import Slider from "react-slick";
import portonovi1 from '../../../../assets/image/portonovislider1.webp';
import portonovi2 from '../../../../assets/image/portonovislider2.webp';
import portonovi3 from '../../../../assets/image/portonovislider3.webp';
import portonovi4 from '../../../../assets/image/portonovislider4.webp';
import portonovi5 from '../../../../assets/image/portonovislider5.webp';
import right from '../../../../assets/icon/icons8-right-20.png';
import left from '../../../../assets/icon/icons8-left-25.png';
import islandImg from '../../../../assets/image/islandhouse.webp';
import full from '../../../../assets/image/islandfullImg.webp';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='portonoviSliderLeftArrow'
      onClick={onClick}
    >
      <img src={left} alt='img' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='portonoviSliderRightArrow'
      onClick={onClick}
    >
      <img src={right} alt='img' />
    </div>
  );
}
export default function PortonoviSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  var settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    initialSlide: 0,
  }
  var settings3 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.15,
    slidesToScroll: 1,
    initialSlide: 0,
  }
  return (
    <div>
      <div className='portonoviDisc'>
        <div className='portonoviHead'>
          <h2>The jewel of the Adriatic</h2>
        </div>
        <div className='portonoviPara'>
          <p>At the entrance of Boka Bay, a fjord-like idyll on Montenegro’s Adriatic Sea, One&Only Portonovi is the jewel of Europe’s most fashionable new riviera, all year round. A glamorous nautical playground offering fresh-air adventures through sapphire waters, dramatic forest, and medieval towns, this exceptional one-off resort on the Adriatic Riviera promises chic relaxation, world-class dining, and pioneering wellness by Chenot.</p>
        </div>
      </div>

      <div className='container2'>
        <div className='portonoviSlider'>
          <div className="slider-container">
            <Slider {...settings}>

              <div className='portonoviCard'>
                <div className='portonoviImg'>
                  <img src={portonovi1} alt='img' />
                </div>
                <div className='portonoviDetails'>
                  <div className='portonoviName'>
                    <h4>Sparkling celebrations</h4>
                  </div>
                  <div className='portonoviExperience'>
                    <p>This festive season, reconnect with loved ones surrounded by spectacular illuminations at One&Only Portonovi. Exceptional dining and spirited celebrations promise an unforgettable family escape as our Montenegrin winter palace lights up with holiday magic.</p>
                  </div>
                  <div className='portonoviLink'>
                    <a href='#'>Explore</a>
                  </div>
                </div>
              </div>
              <div className='portonoviCard'>
                <div className='portonoviImg'>
                  <img src={portonovi2} alt='img' />
                </div>
                <div className='portonoviDetails'>
                  <div className='portonoviName'>
                    <h4>Revolutionary wellness</h4>
                  </div>
                  <div className='portonoviExperience'>
                    <p>Indulge in a transformative journey of detoxing and resetting the body based on the renowned Chenot Method®, with tailored 1 to 7 day programmes and pioneering treatments scientifically designed to enhance vitality and optimum health.</p>
                  </div>
                  <div className='portonoviLink'>
                    <a href='#'>Explore</a>
                  </div>
                </div>
              </div>
              <div className='portonoviCard'>
                <div className='portonoviImg'>
                  <img src={portonovi3} alt='img' />
                </div>
                <div className='portonoviDetails'>
                  <div className='portonoviName'>
                    <h4>Exceptional dining</h4>
                  </div>
                  <div className='portonoviExperience'>
                    <p>Enjoy internationally acclaimed cuisine at One&Only Portonovi’s bars and restaurants, with curated events on the calendar throughout the season. Savour authentic local recipes, modern Asian fusion and Southern Italian dishes.</p>
                  </div>
                  <div className='portonoviLink'>
                    <a href='#'>explore</a>
                  </div>
                </div>
              </div>
              <div className='portonoviCard'>
                <div className='portonoviImg'>
                  <img src={portonovi4} alt='img' />
                </div>
                <div className='portonoviDetails'>
                  <div className='portonoviName'>
                    <h4>One&Only Experiences</h4>
                  </div>
                  <div className='portonoviExperience'>
                    <p>Unlock the wonders of this incredible region with one-of-a-kind experiences across land and sea. From nautical adventures to boat trips to the Blue Cave, countryside discoveries and private culinary classes, there is something for all seasons.</p>
                  </div>
                  <div className='portonoviLink'>
                    <a href='#'>explore</a>
                  </div>
                </div>
              </div>
              <div className='portonoviCard'>
                <div className='portonoviImg'>
                  <img src={portonovi5} alt='img' />
                </div>
                <div className='portonoviDetails'>
                  <div className='portonoviName'>
                    <h4>Beauty of all seasons</h4>
                  </div>
                  <div className='portonoviExperience'>
                    <p>Explore Montenegro’s magical seasons and changing colours of nature. Let the fairy-tale vistas of Boka Bay awaken a dreamer in you. Reconnect with yourself and surrender to relaxation amid the sparkling beauty of the Adriatic, all year round.</p>
                  </div>
                  <div className='portonoviLink'>
                    <a href='#'>explore</a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="slider-container2">
            <Slider {...settings2}>

              <div className='portonoviCard'>
                <div className='portonoviImg'>
                  <img src={portonovi1} alt='img' />
                </div>
                <div className='portonoviDetails'>
                  <div className='portonoviName'>
                    <h4>Sparkling celebrations</h4>
                  </div>
                  <div className='portonoviExperience'>
                    <p>This festive season, reconnect with loved ones surrounded by spectacular illuminations at One&Only Portonovi. Exceptional dining and spirited celebrations promise an unforgettable family escape as our Montenegrin winter palace lights up with holiday magic.</p>
                  </div>
                  <div className='portonoviLink'>
                    <a href='#'>Explore</a>
                  </div>
                </div>
              </div>
              <div className='portonoviCard'>
                <div className='portonoviImg'>
                  <img src={portonovi2} alt='img' />
                </div>
                <div className='portonoviDetails'>
                  <div className='portonoviName'>
                    <h4>Revolutionary wellness</h4>
                  </div>
                  <div className='portonoviExperience'>
                    <p>Indulge in a transformative journey of detoxing and resetting the body based on the renowned Chenot Method®, with tailored 1 to 7 day programmes and pioneering treatments scientifically designed to enhance vitality and optimum health.</p>
                  </div>
                  <div className='portonoviLink'>
                    <a href='#'>Explore</a>
                  </div>
                </div>
              </div>
              <div className='portonoviCard'>
                <div className='portonoviImg'>
                  <img src={portonovi3} alt='img' />
                </div>
                <div className='portonoviDetails'>
                  <div className='portonoviName'>
                    <h4>Exceptional dining</h4>
                  </div>
                  <div className='portonoviExperience'>
                    <p>Enjoy internationally acclaimed cuisine at One&Only Portonovi’s bars and restaurants, with curated events on the calendar throughout the season. Savour authentic local recipes, modern Asian fusion and Southern Italian dishes.</p>
                  </div>
                  <div className='portonoviLink'>
                    <a href='#'>explore</a>
                  </div>
                </div>
              </div>
              <div className='portonoviCard'>
                <div className='portonoviImg'>
                  <img src={portonovi4} alt='img' />
                </div>
                <div className='portonoviDetails'>
                  <div className='portonoviName'>
                    <h4>One&Only Experiences</h4>
                  </div>
                  <div className='portonoviExperience'>
                    <p>Unlock the wonders of this incredible region with one-of-a-kind experiences across land and sea. From nautical adventures to boat trips to the Blue Cave, countryside discoveries and private culinary classes, there is something for all seasons.</p>
                  </div>
                  <div className='portonoviLink'>
                    <a href='#'>explore</a>
                  </div>
                </div>
              </div>
              <div className='portonoviCard'>
                <div className='portonoviImg'>
                  <img src={portonovi5} alt='img' />
                </div>
                <div className='portonoviDetails'>
                  <div className='portonoviName'>
                    <h4>Beauty of all seasons</h4>
                  </div>
                  <div className='portonoviExperience'>
                    <p>Explore Montenegro’s magical seasons and changing colours of nature. Let the fairy-tale vistas of Boka Bay awaken a dreamer in you. Reconnect with yourself and surrender to relaxation amid the sparkling beauty of the Adriatic, all year round.</p>
                  </div>
                  <div className='portonoviLink'>
                    <a href='#'>explore</a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="slider-container3">
            <Slider {...settings3}>

              <div className='portonoviCard'>
                <div className='portonoviImg'>
                  <img src={portonovi1} alt='img' />
                </div>
                <div className='portonoviDetails'>
                  <div className='portonoviName'>
                    <h4>Sparkling celebrations</h4>
                  </div>
                  <div className='portonoviExperience'>
                    <p>This festive season, reconnect with loved ones surrounded by spectacular illuminations at One&Only Portonovi. Exceptional dining and spirited celebrations promise an unforgettable family escape as our Montenegrin winter palace lights up with holiday magic.</p>
                  </div>
                  <div className='portonoviLink'>
                    <a href='#'>Explore</a>
                  </div>
                </div>
              </div>
              <div className='portonoviCard'>
                <div className='portonoviImg'>
                  <img src={portonovi2} alt='img' />
                </div>
                <div className='portonoviDetails'>
                  <div className='portonoviName'>
                    <h4>Revolutionary wellness</h4>
                  </div>
                  <div className='portonoviExperience'>
                    <p>Indulge in a transformative journey of detoxing and resetting the body based on the renowned Chenot Method®, with tailored 1 to 7 day programmes and pioneering treatments scientifically designed to enhance vitality and optimum health.</p>
                  </div>
                  <div className='portonoviLink'>
                    <a href='#'>Explore</a>
                  </div>
                </div>
              </div>
              <div className='portonoviCard'>
                <div className='portonoviImg'>
                  <img src={portonovi3} alt='img' />
                </div>
                <div className='portonoviDetails'>
                  <div className='portonoviName'>
                    <h4>Exceptional dining</h4>
                  </div>
                  <div className='portonoviExperience'>
                    <p>Enjoy internationally acclaimed cuisine at One&Only Portonovi’s bars and restaurants, with curated events on the calendar throughout the season. Savour authentic local recipes, modern Asian fusion and Southern Italian dishes.</p>
                  </div>
                  <div className='portonoviLink'>
                    <a href='#'>explore</a>
                  </div>
                </div>
              </div>
              <div className='portonoviCard'>
                <div className='portonoviImg'>
                  <img src={portonovi4} alt='img' />
                </div>
                <div className='portonoviDetails'>
                  <div className='portonoviName'>
                    <h4>One&Only Experiences</h4>
                  </div>
                  <div className='portonoviExperience'>
                    <p>Unlock the wonders of this incredible region with one-of-a-kind experiences across land and sea. From nautical adventures to boat trips to the Blue Cave, countryside discoveries and private culinary classes, there is something for all seasons.</p>
                  </div>
                  <div className='portonoviLink'>
                    <a href='#'>explore</a>
                  </div>
                </div>
              </div>
              <div className='portonoviCard'>
                <div className='portonoviImg'>
                  <img src={portonovi5} alt='img' />
                </div>
                <div className='portonoviDetails'>
                  <div className='portonoviName'>
                    <h4>Beauty of all seasons</h4>
                  </div>
                  <div className='portonoviExperience'>
                    <p>Explore Montenegro’s magical seasons and changing colours of nature. Let the fairy-tale vistas of Boka Bay awaken a dreamer in you. Reconnect with yourself and surrender to relaxation amid the sparkling beauty of the Adriatic, all year round.</p>
                  </div>
                  <div className='portonoviLink'>
                    <a href='#'>explore</a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className='islandHomeDetails'>
          <div className='islandHome'>
            <div className='islandHomeMain'>
              <div className='islandHomeImg'>
                <img src={islandImg} alt='img' />
              </div>
              <div className='islandHomeDisc'>
                <div className='islandHomeText'>
                  <div className='islandHomeHead'>
                    <h2>One-of-a-kind location</h2>
                  </div>
                  <div className='islandHomePara'>
                    <p>Nestled in the southeast of Europe, neighbouring the established hotspots of tourism Croatia, Greece and Italy - Montenegro is a safe, undiscovered destination of stunning beauty, that should be part of any European circuit.</p>
                  </div>
                  <div className='homeBookBtn'>
                    <button>find out more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container3'>
        <div className='islandfullImg'>
          <img src={full} alt='img' />
        </div>
      </div>


    </div>
  )
}
