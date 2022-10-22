import React, { useRef } from 'react'
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
  const ref = useRef(null);

  const scrollLeft = (scrollOffset) => {
    console.log( ref.current.scrollLeft)
    console.log( ref.current.children[1].offsetWidth)
    console.log(ref.current.offsetWidth)
    ref.current.scrollLeft -= ref.current.children[0].offsetWidth;
  };
  const scrollRight = (scrollOffset) => {
    console.log( ref.current.scrollLeft)
    console.log( ref.current.children.length)
    console.log( ref.current.scrollLeft/ref.current.children[0].offsetWidth)
    console.log( ref.current.children[1].offsetWidth)
    console.log( ref.current.children[0].offsetWidth)
    console.log(ref.current.offsetWidth)
    ref.current.scrollLeft += ref.current.offsetWidth;
  };
  return (
    <div className="hero">
      <div className="container">
        <h3 className="headerText">Explore, collect, and sell NFTs</h3>
        
        
        <div className="slider">
          <div className="slidercontainer">
            <div className="slide-track" ref={ref}>
              {
                image.map((url,index) =>(
                  <div className="slides">
                    <Image url={url} />
                  </div>
                ))
              }
               
            </div>
            <div className="pre" onClick={scrollLeft}>&lt;</div>
            <div className="next" onClick={scrollRight}> &gt;</div>
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