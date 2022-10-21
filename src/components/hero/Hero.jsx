import React from 'react'
import './hero.scss'

let image =[
  'https://i.seadn.io/gcs/static/promocards/LofiLofts.png?auto=format&w=828',
  'https://i.seadn.io/gcs/static/promocards/Math%20Art%20Herbert%20W%20Franke.png?auto=format&w=828',
  '	https://i.seadn.io/gcs/files/6b26e80ca71ea9c7127bcc31149931d6.jpg?auto=format&w=828',
  '	https://i.seadn.io/gcs/static/promocards/Diplo.png?auto=format&w=828',
  '	https://i.seadn.io/gcs/static/promocards/Streets.png?auto=format&w=828',
  '	https://i.seadn.io/gcs/static/promocards/Ometti.png?auto=format&w=828',
  'https://i.seadn.io/gcs/static/promocards/E4CRangers.png?auto=format&w=828',
  '	https://i.seadn.io/gcs/static/promocards/Math%20Art%20Herbert%20W%20Franke.png?auto=format&w=828'
]

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <h3 className="headerText">Explore, collect, and sell NFTs</h3>
        
        
        <div className="slider">
          <div className="slidercontainer">
            <div className="slide-track">
              {
                image.map((url,index) =>(
                  <div className="slides">
                    <Image url={url} />
                  </div>
                ))
              }
               
            </div>
            <div className="pre">&lt;</div>
            <div className="next"> &gt;</div>
          </div>
        </div>

      </div>
    </div>
  )
}

function Image({url}){
  return(
    <>
      <div className="imageWrapper">
        <img src={url} alt="" />
      </div>
    </>
  )
}

export default Hero