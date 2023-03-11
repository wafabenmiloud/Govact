import React, { useState } from "react";
import "./Service1.css";
import Footer from "../../components/Footer/Footer";
import img from "../../assets/k1.svg";
import Header from "../../components/Header/Header";
import S1 from "../../assets/s1_1.png";
import S2 from "../../assets/s1_2.png";
import S3 from "../../assets/s1_3.png";
import S4 from "../../assets/s1_4.png";
import S5 from "../../assets/s1_5.png";
import S6 from "../../assets/s1_6.png";

export default function Service1() {
  return (
    <>
      <Header title="الحالة المدنية" description="" img={img} />
      <div id="open__wrapper">
        <Open title="  مضمون ولادة" img={S2} />
        <Open title=" ترسيم ولادة" img={S1} />
        <Open title=" إبرام عقد زواج" img={S3} />
        <Open title="مضمون زواج" img={S4} />
        <Open title="  استخراج الدفتر العائلي لأول مرة" img={S5} />
        <Open
          title="استخراج نظیر من الدفتر العائلي (في صورة الضیاع)"
          img={S6}
        />
      </div>
      <br/>
      <Footer />
    </>
  );
}

const Open = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div id="open">
      <p id="titl"> {props.title}</p>
     <button  onClick={()=>{setOpen(!open)}}> <p id="more"  >
        إطلع على المزيد
      </p></button>
      {open && <img src={props.img} alt="img" />}
    </div>
  );
}
