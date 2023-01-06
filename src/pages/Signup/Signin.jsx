import React from "react";
import "./Signup.css";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import llogo from "../../assets/signinleft.svg";
import rlogo from "../../assets/signinright.svg";

export default function Signin() {
  return (
    <div className="body">
      <Link to="/" className="navbar_home">
        <AiFillHome />
      </Link>
      <div className="wrapper">
        <div className="llogo">
          <img src={llogo} alt="llogo" />
        </div>
          <div className="card">
            <h1>               الدخول</h1>
            <form action="">
              
              <div className="form__element">
                <h4>البريد الالكتروني</h4>
                <input required type="email" name="email" placeholder="البريد الالكتروني" dir="rtl"/>
              </div>
              <div className="form__element">
                <h4>كلمة السر</h4>
                <input required type="password" name="password" placeholder="كلمة السر" dir="rtl"/>
              </div>
              <button><h4>دخول</h4></button>
              <Link className="link" to='/SignUp'>                 لا تملك حساب؟ إشترك الآن</Link>
            </form>
          </div>
        <div className="rlogo">
          <img src={rlogo} alt="rlogo" />
        </div>
      </div>
    </div>
  );
}
