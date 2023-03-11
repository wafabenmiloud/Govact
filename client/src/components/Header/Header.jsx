import React from 'react'
import "./Header.css";
import Nav from "../../components/Navbar/Menu";


export default function Header(props) {
  return (
    <div className="header">
    <Nav />
    <div className="header__content">
        <p>
        <span>   {props.title} </span> <br/> 
            {props.description}
        </p>
        <img src={props.img} alt="header" />
    </div>
  </div>
    )
}
