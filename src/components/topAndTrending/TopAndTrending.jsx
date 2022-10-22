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
                  <th  align='left'  >
                  <span className="floorPrice">
                    FLOOR PRICE
                  </span>
                  </th>
                  <th  align='left'>VOLUME</th>
                </tr>
                </thead>
                <tbody>

                {
                  data.trendingCollections.edges.map((item,index) => {
                    if(index<5){

                      return (
                        <tr  style={{margin:'20px 0px'}}>
                        <td>{index+1}</td>
                        <td>
                          <div style={{marginLeft:'20px'}}>
                            <img src={item?.node.logo}  width="70" height="70" style={{borderRadius:'10px'}}/>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p>
                          {item?.node.name}
                            </p>
                          <span className='mobileFloorPrice'>
                            floor :{`${item?.node?.statsV2?.floorPrice?.unit?.slice(0, 4) || item?.node?.statsV2?.oneDayChange?.slice(0, 4)}  ${item?.node.nativePaymentAsset.nativePaymentAsset || item?.node.nativePaymentAsset.symbol}`} 
                          </span>
                          </div>
                           </td>
                        <td >
                        <span className="floorPrice">

                          {`${item?.node?.statsV2?.floorPrice?.unit?.slice(0, 4) || item?.node?.statsV2?.oneDayChange?.slice(0, 4)}  ${item?.node.nativePaymentAsset.nativePaymentAsset || item?.node.nativePaymentAsset.symbol}`} 
                          </span>
                          </td>
                        <td>{`${item?.node.statsV2.oneDaySales}  ${item?.node.nativePaymentAsset.nativePaymentAsset || item?.node.nativePaymentAsset.symbol}`} </td>
                      </tr>
                    )
                  }
                  })
                }
                </tbody>


              </table>
            </div>
            <div className="col-lg-6">
              <table style={{width:'100%'}} >
                <thead>

                <tr>
                  <th colspan="3" align='left'>COLLECTION</th>
                  <th  align='left' ><span className="floorPrice">
                    FLOOR PRICE
                  </span></th>
                  <th  align='left'>VOLUME</th>
                </tr>
                </thead>
                <tbody>

                {
                  data.trendingCollections.edges.map((item,index) => {
                    if(index >= 5 && index <10){

                      return (
                        <tr  style={{margin:'20px 0px'}}>
                        <td>{index+1}</td>
                        <td>
                          <div style={{marginLeft:'20px'}}>
                            <img src={item?.node.logo}  width="70" height="70" style={{borderRadius:'10px'}}/>
                          </div>
                        </td>
                        <td><div>
                            <p>
                          {item?.node.name}
                            </p>
                          <span className='mobileFloorPrice'>
                            floor :{`${item?.node?.statsV2?.floorPrice?.unit|| item?.node?.statsV2?.oneDayChange}  ${item?.node.nativePaymentAsset.nativePaymentAsset || item?.node.nativePaymentAsset.symbol}`} 
                          </span>
                          </div> </td>
                        <td >
                          <span className="floorPrice">

                          {`${item?.node?.statsV2?.floorPrice?.unit || item?.node?.statsV2?.oneDayChange}  ${item?.node.nativePaymentAsset.nativePaymentAsset || item?.node.nativePaymentAsset.symbol}`} 
                          </span>
                          </td>
                        <td>{`${item?.node.statsV2.oneDaySales}  ${item?.node.nativePaymentAsset.nativePaymentAsset || item?.node.nativePaymentAsset.symbol}`} </td>
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