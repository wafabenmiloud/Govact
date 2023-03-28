import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./S5Service1.css";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function S5Service1() {
  const [data, setData] = useState({
    cin: "",
    permis: "",
  });
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://govact-server.onrender.com/check";
      const response = await axios.post(url, data);

      if (response.data === true){
        toast.success('رخصة البناء جاهزة',
        );
      }
      else{
        toast.success('رخصة البناء غير جاهزة',
        );
  
      }
      setSending(true);


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
    <div className="body2">
      <Link to="/" className="icon">
        <AiFillHome />
      </Link>
      <div className="wrapper">
        <div className="caard">
          <h1> متابعة رخصة البناء</h1>
          <form onSubmit={handleSubmit}>
            <div className="element">
              <input
                required
                type="number"
                name="cin"
                placeholder="رقم بطاقة التعريف"
                dir="rtl"
                value={data.cin}
                onChange={handleChange}
              />
            </div>
            <div className="element">
              <input
                required
                type="number"
                name="permis"
                placeholder="رقم الرخصة"
                dir="rtl"
                value={data.permis}
                onChange={handleChange}
              />
            </div>
            {error && <div className="error">{error}</div>}
               <button type="submit">
              <h4>متابعة</h4>
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}
