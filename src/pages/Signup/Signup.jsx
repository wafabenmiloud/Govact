import React, { useContext, useState } from "react";
import "./Signup.css";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import llogo from "../../assets/signinleft.svg";
import rlogo from "../../assets/signinright.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function Signup() {
  const { getLoggedIn } = useContext(AuthContext);
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:2000/register";
      await axios.post(url, data);
      await getLoggedIn();
      navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

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
          <h1> تسجيل الدخول</h1>
          <form onSubmit={handleSubmit}>
            <div className="form__element">
              <h4>الاسم و اللقب</h4>
              <input
                required
                type="text"
                name="fullname"
                onChange={handleChange}
                value={data.fullname}
                placeholder="الاسم و اللقب"
                dir="rtl"
              />
            </div>
            <div className="form__element">
              <h4>البريد الالكتروني</h4>
              <input
                required
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
                placeholder="البريد الالكتروني"
                dir="rtl"
              />
            </div>
            <div className="form__element">
              <h4>كلمة السر</h4>
              <input
                required
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                placeholder="كلمة السر"
                dir="rtl"
              />
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit">
              <h4>تسجيل</h4>
            </button>
            <Link className="link" to="/SignIn">
              {" "}
              تملك حساب؟
            </Link>
          </form>
        </div>
        <div className="rlogo">
          <img src={rlogo} alt="rlogo" />
        </div>
      </div>
    </div>
  );
}
