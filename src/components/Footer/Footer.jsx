import React, { useContext  } from "react";

import "./Footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillGooglePlusSquare,
} from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { GiMailbox } from "react-icons/gi";
import AuthContext from "../../context/AuthContext";

const Footer = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <>
      {/* <div className="modal">
        <div className="modal__icon">
          <GiMailbox />
        </div>
        <h1 className="modal__heading"> اشترك ليصلك كل جديد </h1>
        <div className="email-box">
          <input
            type="email"
            className="email-box__input"
            placeholder="Email Address"
          />
          <button type="button" className="email-box__button">
            <AiOutlineSend />
          </button>
        </div>
      </div> */}
      <footer>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="footer__contact">
          <h4>للتواصل معنا </h4>
          <li> الهاتف الجوال : 007 218 79 </li>
          <li> الهاتف القار : 110 218 79 </li>
          <li> contact@commune-hammamlif.gov.tn</li>
          <li> العنوان : بلدية حمام الأنف شارع الجمهورية</li>
        </div>
        <div className="footer__services">
          <ul className="services__links">
            <li>
              <Link className="service__link" to="/Service1">
                الحالة المدنية
              </Link>
              <BsFillPatchCheckFill className="check" />
            </li>
            <li>
              <Link className="service__link" to="/Service2">
                الخدمات الادارية
              </Link>
              <BsFillPatchCheckFill className="check" />
            </li>
            <li>
              <Link className="service__link" to="/Service3">
                الجباية المحلية
              </Link>
              <BsFillPatchCheckFill className="check" />
            </li>
            <li>
              <Link className="service__link" to="/Service4">
                الشؤون الاقتصادية
              </Link>
              <BsFillPatchCheckFill className="check" />
            </li>
            <li>
              <Link className="service__link" to="/S5Service3">
                مثال التهيئة العمرانية
              </Link>
              <BsFillPatchCheckFill className="check" />
            </li>
          </ul>
        </div>
        <div className="footer__services">
          <h4> خدمات </h4>
          <ul className="services__links">
            <li>
              <Link className="service__link" to="/Baladiya">
                البلدية
              </Link>
              <BsFillPatchCheckFill className="check" />
            </li>
            <li>
              <Link className="service__link" to="/Actualite">
                المستجدات
              </Link>
              <BsFillPatchCheckFill className="check" />
            </li>
            {loggedIn && (
              <>
                <li>
                  <Link className="service__link" to="/S5Service1">
                    متابعة رخص البناء
                  </Link>
                  <BsFillPatchCheckFill className="check" />
                </li>
                <li>
                  <Link className="service__link" to="/S5Service2">
                    النفاذ إلى المعلومة
                  </Link>
                  <BsFillPatchCheckFill className="check" />
                </li>
              </>
            )}
          </ul>
        </div>
      </footer>
      <div className="social__links">
        <li>
          <Link to="#">
            <AiFillFacebook className="social__icon" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <AiFillLinkedin className="social__icon" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <AiOutlineTwitter className="social__icon" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <AiFillGooglePlusSquare className="social__icon" />
          </Link>
        </li>
      </div>
    </>
  );
};

export default Footer;
