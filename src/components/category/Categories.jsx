import React from 'react'
import './Categories.scss'
import categories from '../../mock/categories.json'
console.log(categories)

function Categories() {
  return (
    <div>
        <div className="container">
            <h3>Browse by category</h3>
            <div className="categoryWrapper">
                {
                    categories.data.map((item,index) =>(
                        <div className="item" key={index}>
                            <Category cate={item} />
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

function Category({cate}){
    return(
        <>
        <div className="category">
            <div className="card">
                <div className="image">
                    <img src={cate.image} alt="" />
                </div>
                <div className="head">

                <span>
                    {cate.name}
                </span>
                </div>

            </div>
        </div>
        </>
    )
}

export default Categories