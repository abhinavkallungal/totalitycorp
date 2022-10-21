import React from 'react'
import collections from '../../mock/data.json'
import './TopAndTrending.scss'

function TopAndTrending() {
  const { data } = collections
  return (
    <div className="topAndTrending">
      <div className="container">
        <div className="head">
          <div className="item">
            <button className="btn-tr active">Trending</button>
            <button className="btn-tr">Top</button>
          </div>
          <div className="item"><select name="time" id="time">
            <option value="All">All</option>
            <option value="24h">24h</option>
            <option value="7d">7d</option>
            <option value="30d">30d</option>
          </select>
            <button className="btn-outline">View all</button>
          </div>
        </div>
        <div className="body">
          <div className="row">
            <div className="col-lg-6">
              <table style={{width:'100%'}} >
                <thead>

                <tr>
                  <th colspan="3" align='left'>COLLECTION</th>
                  <th>FLOOR PRICE</th>
                  <th>VOLUME</th>
                </tr>
                </thead>
                <tbody>

                {
                  data.trendingCollections.edges.map((item,index) => {
                    if(index<5){

                      return (
                        <tr>
                        <td>{index+1}</td>
                        <td>
                          <div>
                            <img src={item?.node.logo}  width="60" height="60"/>
                          </div>
                        </td>
                        <td>{item?.node.name} </td>
                      </tr>
                    )
                  }
                  })
                }
                </tbody>


              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopAndTrending