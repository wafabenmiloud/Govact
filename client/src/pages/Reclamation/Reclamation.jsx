import React from "react";
import "./Reclamation.css";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import img from "../../assets/rec.jpg";

export default function Reclamation() {
  return (
    <div id="body3">
      <Link to="/" className="home__icon">
        <AiFillHome />
      </Link>
      <div className="wrapper">
        <div className="card">
          <form action="">
          <h1>شكوى</h1>
            <div className="form__element">
              <h4>الاسم و اللقب</h4>
              <input
                required
                type="text"
                name="name"
                placeholder="الاسم و اللقب"
                dir="rtl"
              />
            </div>
            <div className="form__element">
            <h4>  ملف يدعم الشكوى  </h4>

              <input
                type="file"
                name="file"
                dir="rtl"
              />
            </div>
            <div className="form__element">
              <h4> الشكوى</h4>
              <textarea dir="rtl" name="rec" cols="30" rows="10"></textarea>{" "}
            </div>
            <button>
              <h4>ارسال</h4>
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
