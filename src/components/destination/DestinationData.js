import './Destination.css'
import React from 'react'

function DestinationData(props) {
  return (
    <div className="first-des">
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>
           {props.text}
          </p>
          <div className="image">
          <img src={props.img1} alt="" />
          <img src={props.img2} alt="" />
          </div>
        </div>
      </div>
  )
}

export default DestinationData