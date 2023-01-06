import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

function Card(props) {
    return(
        <div className="service__card">
          <div>
            <Link className="card__title" to={props.link}>{props.title}</Link>
          </div>
          <div className="card__bg">
            <img src={props.img} alt="service" />
          </div>
        </div>
      )
}

export default Card