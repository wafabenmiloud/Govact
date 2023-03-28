import React, { useContext, useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {AiFillLock} from "react-icons/ai"

export default function Admin() {
	const navigate = useNavigate();

  const [data, setData] = useState({pass:""});
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://govact-server.onrender.com/admin";
			await axios.post(url, data);
      
      
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
    <div className="admin">
      
      <div className="wrapper">
        <div className="card">
        <AiFillLock size={30} color="palevioletred"/>

          <form onSubmit={handleSubmit}>
            
          <div className="form__element">
              <h4> الرمز</h4>
              <input
                required
                type="password"
                name="pass"
                onChange={handleChange}
                value={data.pass}
                dir="rtl"
              />
            </div>
            {/* <div className="form__element">
              <h4>البريد الالكتروني</h4>
              <input
                required
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
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
                dir="rtl"
              />
            </div> */}
            {error && <div className="error">{error}</div>}

						<button type="submit">
              <h4>دخول</h4>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
