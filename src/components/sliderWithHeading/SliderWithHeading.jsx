import React, { useRef } from 'react'
import './SliderWithHeading.scss'
import profile from '../../mock/profile.json'

function SliderWithHeading(props) {

    const {data,name}=props
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
    <div className="SliderWithHeading">
    <div className="container">
      <h3 className="headerText">{name}</h3>
      
      
      <div className="slider">
        <div className="slidercontainer">
          <div className="slide-track" ref={ref} >
            {
              data.map((item,index) =>(
                <div className="slides">
                  <Image item={item} />
                </div>
              ))
            }
             
          </div>
          <div className="pre" onClick={scrollLeft} >&lt;</div>
          <div className="next" onClick={scrollRight}> &gt;</div>
        </div>
      </div>

    </div>
  </div>
  )
}

function Image({item}){
    return(
      <><div className="card">

        <div className="imageWrapper" >
          <img src={item.cover} alt="" />
        </div>
        <div className="profile">
            <div className="proimg" >
                <img src={item.profile} style={{width:'80px',height:'80px', borderRadius:'10px',border:'5px solid #FFFFFF',marginLeft:'20px',marginTop:'-20px'}} alt="" />
            </div>
            <div>
                <span>
                    {item.name}
                </span>
            </div>
        </div>
      </div>
      </>
    )
  }

export default SliderWithHeading