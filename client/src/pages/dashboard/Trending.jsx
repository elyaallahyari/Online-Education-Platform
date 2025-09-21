import React from 'react'
import chart_1 from '../../assets/images/chart_1.svg'
import chart_2 from '../../assets/images/chart_2.svg'
import chart_3 from '../../assets/images/chart_3.svg'
import chart_4 from '../../assets/images/chart_4.svg'
import '../../assets/styles/Trending.css'

const Trending = () => {
  return (
    <>
      <div className="trending">
        <div className="trending__head">
          <img src={chart_1} />
          <img src={chart_2} />
          <img src={chart_3} />
        </div>
        <div className="trending__foot">
          <img src={chart_4} />
        </div>
      </div>
    </>
  )
}

export default Trending
