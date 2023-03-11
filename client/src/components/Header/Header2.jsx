import React from 'react'
import "./Header.css";
import Nav from "../../components/Navbar/Menu";


export default function Header2(props) {
  return (
    <div className="header">
    <Nav />
    <div className="header__content">
        <p>
        <span>   {props.title} </span> <br/> 
            {props.description}
        </p>
    </div>
  </div>
    )
}
