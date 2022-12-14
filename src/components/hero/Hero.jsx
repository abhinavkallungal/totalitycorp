import React, { useRef } from 'react'
import './hero.scss'

let image =[
  {
    name:'ArtWorkOn',
    floor:'1.5 ETH',
    image:'https://i.seadn.io/gcs/static/promocards/LofiLofts.png?auto=format&w=828',
  },
  {
    name:'  SAN Origin',
    floor:'1.17 ETH',
    image:'https://i.seadn.io/gcs/static/promocards/Math%20Art%20Herbert%20W%20Franke.png?auto=format&w=828',
  },
  {
    name:' Math Art (1980-1995) by Herbert W. Franke',
    floor:'0.3 ETH',
    image:'	https://i.seadn.io/gcs/files/6b26e80ca71ea9c7127bcc31149931d6.jpg?auto=format&w=828',
  },
  {
    name:'Ani Mkhitaryan',
    floor:'2.7 ETH',
    image:'	https://i.seadn.io/gcs/static/promocards/Diplo.png?auto=format&w=828',
  },
  {
    name:' Lumens by Vibes + Logic',
    floor:'2.65 ETH',
    image: '	https://i.seadn.io/gcs/static/promocards/Streets.png?auto=format&w=828',
  },
  
  {
    name:'LofiLofts',
    floor:'1.5 ETH',
    image:'	https://i.seadn.io/gcs/static/promocards/Ometti.png?auto=format&w=828',
  },
  {
    name:'Streets by esraeslen',
    floor:'0.5 ETH',
    image:'https://i.seadn.io/gcs/static/promocards/E4CRangers.png?auto=format&w=828',
  },
  {
    name:"Diplo - Don't Forget My Love",
    floor:'0.05 ETH',
    image: '	https://i.seadn.io/gcs/static/promocards/Math%20Art%20Herbert%20W%20Franke.png?auto=format&w=828'
  }
   
]

function Hero() {
  const ref = useRef(null);

  const scrollLeft = (scrollOffset) => {
    if(Math.round((ref.current.scrollLeft + ref.current.offsetWidth)/ref.current.children[0].offsetWidth) <= ref.current.offsetWidth/ref.current.children[0].offsetWidth){
      ref.current.scrollLeft = ((ref.current.children[0].offsetWidth * ref.current.children.length) - ref.current.offsetWidth) ;
    }else{

      console.log( ref.current.scrollLeft)
      console.log( ref.current.children[1].offsetWidth)
      console.log(ref.current.offsetWidth)
      ref.current.scrollLeft -=ref.current.offsetWidth;
    }
  };
  const scrollRight = (scrollOffset) => {
    if(Math.round((ref.current.scrollLeft + ref.current.offsetWidth)/ref.current.children[0].offsetWidth) >=ref.current.children.length){
      ref.current.scrollLeft =0;
    }else{
      console.log( ref.current.scrollLeft)
      console.log( ref.current.children.length)
      console.log( (ref.current.scrollLeft + ref.current.offsetWidth)/ref.current.children[0].offsetWidth)
      console.log( ref.current.children[0].offsetWidth)
      console.log(ref.current.offsetWidth)
      ref.current.scrollLeft += ref.current.offsetWidth;
    }



  };
  return (
    <div className="hero">
      <div className="container">
        <h3 className="headerText">Explore, collect, and sell NFTs</h3>
        
        
        <div className="slider">
          <div className="slidercontainer">
            <div className="slide-track" ref={ref}>
              {
                image.map((item,index) =>(
                  <div className="slides">
                    <Image item={item} />
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

function Image({item}){
  return(
    <>
    <div className="card">

      <div className="imageWrapper">
        <img src={item.image} alt="" />
      </div>
      <div className="textWrapper">
        <p>{item.name}</p>
        <span> floor  : {item.floor}</span>
      </div>
    </div>
    </>
  )
}

export default Hero