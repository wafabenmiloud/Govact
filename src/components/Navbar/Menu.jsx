import React, { useRef, useState  } from "react";
import "./Nav.css";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import {BiDownArrow, BiUpArrow} from "react-icons/bi";

export default function Menu() {
  const navRef = useRef();
  const [dropdown1, setDropdown1] = useState(false);
  const handleDropdown1 = event => {
    setDropdown1(current => !current);
    setDropdown3(false);
  };
  const [dropdown2, setDropdown2] = useState(false);
  const handleDropdown2 = event => {
    setDropdown2(current => !current);
  };
  const [dropdown3, setDropdown3] = useState(false);
  const handleDropdown3 = event => {
    setDropdown3(current => !current);
  };
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
    <nav ref={navRef}>
        <ul className="navbar__menu">
          <Link to="/" className="home">
            <AiFillHome />
          </Link>
          <li>
            <Link className="navbar__link" to="/Baladiya">
              البلدية
            </Link>
          </li>
          <li className="menu__item" onMouseEnter={handleDropdown1} onMouseLeave={handleDropdown1}>
            <Link className="navbar__link" to="/Khadamet">
              الخدمات
              {
                dropdown1 ? <BiDownArrow className="dropdown__icon"/>:<BiUpArrow className="dropdown__icon"/>
              }
            </Link>
            {
              dropdown1 && (
                <ul className="submenu">
              <li>
                <Link className="navbar__link" to="/Service1">
                  {" "}
                  الحالة المدنية
                </Link>
              </li>
              <li>
                <Link className="navbar__link" to="/Service2">
                  {" "}
                  الخدمات الادارية
                </Link>
              </li>
              <li>
                <Link className="navbar__link" to="/Service3">
                  {" "}
                  الجباية المحلية
                </Link>
              </li>
              <li>
                <Link className="navbar__link" to="/Service4">
                  {" "}
                  الشؤون الاقتصادية
                </Link>
              </li>
              <li onMouseEnter={handleDropdown3} onMouseLeave={handleDropdown3}>
                <Link className="navbar__link" to="/Service5" >
                  {" "}
                  خدمات على الخط
                  {
                dropdown3 ? <BiDownArrow className="dropdown__icon"/>:<BiUpArrow className="dropdown__icon"/>
              }

                </Link>
                {
                  dropdown3 && (
                    <ul className="submenu2">
                  <li>
                    <Link className="navbar__link" to="/S5Service1">
                      متابعة رخص البناء
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar__link" to="/S5Service2">
                      النفاذ إلى المعلومة
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar__link" to="/S5Service3">
                      مثال التهيئة العمرانية
                    </Link>
                  </li>
                </ul>
                  )
                }
              </li>
            </ul>
              )
            }
          </li>
          <li className="menu__item" onMouseEnter={handleDropdown2} onMouseLeave={handleDropdown2}>
            <Link className="navbar__link" to="/Actualite">
              المستجدات
              {
                dropdown2 ? <BiDownArrow className="dropdown__icon"/>:<BiUpArrow className="dropdown__icon"/>
              }
            </Link>
          {
            dropdown2 && (
              <ul className="submenu">
              <li>
                <Link className="navbar__link" to="/Avis">
                  {" "}
                  استطلاعات الرأي
                </Link>
              </li>
              <li>
                <Link className="navbar__link" to="/Suggest">
                  مقترحات
                </Link>
              </li>
            </ul>
            )
          }
          </li>
          <li>
            <Link className="navbar__link" to="/Reclamation">
              شكاوي
            </Link>
          </li>

          <div className="cta">
            <Link to="/SignIn" className="btn">
              الدخول
            </Link>
            <Link to="/SignUp" className="btn">
              تسجيل الدخول
            </Link>
          </div>
          <button className="navbar__btn close" onClick={showNavbar}>
            <FaTimes />
          </button>
        </ul>
      </nav>
      <button className="navbar__btn open " onClick={showNavbar}>
        <AiOutlineMenu />
      </button>
   </>
  );
}
