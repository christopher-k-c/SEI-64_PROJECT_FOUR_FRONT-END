import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './home.css'
// import ReactAudioPlayer from 'react-audio-player';



import img1 from "./assets/kirk.jpg";
import img2 from "./assets/truth-alt.jpg";
import img3 from "./assets/floral.jpg"

// import track1 from "./assets/30_Seconds_of_Bowling_Sounds.mp3"
// import track1 from "./assets/30_Seconds_of_Bowling_Sounds.mp3"


const options = {
  showArrows: false,
  showStatus: false,
  showIndicators: false,
  showThumbs: false,
  autoPlay: true,
  infiniteLoop: true,
  stopOnHover: false,
  swipeable: false,
  animationHandler: 'fade',
};


export default function Home(props) {
  return (
    <>
      <Carousel className="main-slide">
        <div>
          <div className="type">KIRK VAN HOUTEN</div>
          <img alt="" src={img1} />
          
        </div>
        <div >
        <div className="type">FROM THE MAN WHO STOLE THE WORLD</div>
          <img alt="" src={img2}/>
        </div>
        <div>
        <div className="type">FLORAL</div>
          <img alt="" src={img3} />
        </div>
      </Carousel>

      {/* <ReactAudioPlayer
        src={track1}
        controlsList
        loop
        controls
      /> */}


    </>
  )
}
