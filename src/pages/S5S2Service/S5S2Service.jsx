import React from "react";
import "./S5S2Service.css";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function S5S2Service() {
  return (
    <div className="body1">
      <Link to="/" className="navbar_home">
        <AiFillHome />
      </Link>
      <div className="card__wrapper">
        <div className="card">
          <h1>طلب النفاذ للمعلومة</h1>
          <form action="">
            <div className="form__element">
              <input required
                type="text"
                name="name"
                placeholder="الاسم و اللقب"
                dir="rtl"
              />
            </div>
            <div className="form__element">
              <input required type="number" name="cin" placeholder="رقم بطاقة التعريف"    dir="rtl"/>
            </div>
            <div className="form__element">
              <input required type="number" name="phone" placeholder="الهاتف"   dir="rtl" />
            </div>

            <div className="form__element">
              <input required
                type="text"
                name="file"
                placeholder=" إسم الوثيقة"
                dir="rtl"
              />
            </div>
            <button>
              <h4>تسجيل</h4>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
