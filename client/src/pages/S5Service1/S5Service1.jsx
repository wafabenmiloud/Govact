import React from 'react'
import './S5Service1.css'
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function S5Service1() {
  return (
    <div className='body2'>
     <Link to="/" className="icon">
        <AiFillHome />
      </Link>
      <div className="wrapper">
        <div className="caard">
          <h1>  متابعة رخصة البناء</h1>
          <form action="">
            <div className="element">
              <input required type="number" name="cin" placeholder="رقم بطاقة التعريف"    dir="rtl"/>
            </div>
            <div className="element">
              <input required type="number" name="phone" placeholder="رقم الرخصة"   dir="rtl" />
            </div>
            <button>
              <h4>متابعة</h4>
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
