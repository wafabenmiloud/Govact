import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./S5S2Service.css";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function S5S2Service() {
  const [data, setData] = useState({
    doc:"",
    cin: "",
    phone:""
    
  });
  const [sending, setSending] = useState(false);

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://govact-server.onrender.com/addinfo";
      const response = await axios.post(url, data);
      setSending(true);
            toast.success("لقد تم ارسال طلبك");

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
  useEffect(() => {
    if (sending) {
      setTimeout(() => {
        navigate("/");
      }, 6000);
    }
  }, [sending]);
  return (
    <div className="body1">
      <Link to="/" className="navbar_home">
        <AiFillHome />
      </Link>
      <div className="card__wrapper">
        <div className="card">
          <h1>طلب النفاذ للمعلومة</h1>
          <form onSubmit={handleSubmit}>
     
            <div className="form__element">
              <input
                required
                type="number"
                name="cin"
                value={data.cin}
                onChange={handleChange}
                placeholder="رقم بطاقة التعريف"
                dir="rtl"
              />
            </div>
            <div className="form__element">
              <input
                required
                type="number"
                name="phone"
                value={data.phone}

                onChange={handleChange}
                placeholder="الهاتف"
                dir="rtl"
              />
            </div>

            <div className="form__element">
              <input
                required
                type="text"
                name="doc"
                value={data.doc}

                placeholder=" إسم الوثيقة"
                dir="rtl"
                onChange={handleChange}
              />
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit">
              <h4>تسجيل</h4>
            </button>
<ToastContainer/>
          </form>
        </div>
      </div>
    </div>
  );
}
