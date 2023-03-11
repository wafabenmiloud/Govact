import React, { useContext, useState } from "react";
import "./Signup.css";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import llogo from "../../assets/signinleft.svg";
import rlogo from "../../assets/signinright.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";


export default function Signin() {
  const { getLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:2000/login";
			await axios.post(url, data);
			await getLoggedIn();
			navigate('/');
			
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
          <h1> الدخول</h1>
          <form onSubmit={handleSubmit}>
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
              <h4>دخول</h4>
            </button>
            <Link className="link" to="/SignUp">
              {" "}
              لا تملك حساب؟ إشترك الآن
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
