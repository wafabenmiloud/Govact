import React from "react";
import "./Reclamation.css";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import img from "../../assets/rec.jpg";
import { ImFilePicture } from "react-icons/im";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Reclamation() {
  const [sending, setSending] = useState(false);

  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(ev) {
    const data = new FormData();
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    await axios
      .post("https://govact-server.onrender.com/addrec", data)
      .then((response) => {
        if (response.status === 200) {
          setSending(true);
          toast.success("لقد تم ارسال الشكوى");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }
  useEffect(() => {
    if (sending) {
      setTimeout(() => {
        navigate("/");
      }, 6000);
    }
  }, [sending]);
  return (
    <div id="body3">
      <Link to="/" className="home__icon">
        <AiFillHome />
      </Link>
      <div className="wrapper">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <h1>شكوى</h1>
            <div className="form__element">
              <h4> ملخص </h4>
              <input
                required
                type="text"
                name="summary"
                placeholder="ملخص "
                dir="rtl"
                value={summary}
                onChange={(ev) => setSummary(ev.target.value)}
              />
            </div>
            <div className="form__element">
              <h4> ملف يدعم الشكوى </h4>
              <label htmlFor="fileInput">
                <ImFilePicture
                  style={{
                    fontSize: "1.5rem",
                    margin: "1rem",
                    cursor: "pointer",
                  }}
                />
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(ev) => setFiles(ev.target.files)}
              />
            </div>
            <div className="form__element">
              <h4> الشكوى</h4>
              <textarea
                dir="rtl"
                value={content}
                onChange={(ev) => setContent(ev.target.value)}
                name="rec"
                cols="30"
                rows="10"
              ></textarea>{" "}
            </div>
            <button>
              <h4>ارسال</h4>
            </button>
            <ToastContainer/>
          </form>
        </div>
      </div>
    </div>
  );
}
