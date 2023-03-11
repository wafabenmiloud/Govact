import React, { useState } from "react";
import "./Service4.css";
import Footer from "../../components/Footer/Footer";
import img from "../../assets/k4.svg";
import Header from "../../components/Header/Header";
import { BiDownArrow } from "react-icons/bi";
import S1 from "../../assets/s4_1.png";
import S2 from "../../assets/s4_2.png";
import S3 from "../../assets/s4_3.png";
import S4 from "../../assets/s4_4.png";

export default function Service4() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <>
      <Header title="  الشؤون الاقتصادية" description="" img={img} />
    
     <div className="carrds">
     <div className="carrd"><p>  التراخيص الاقتصادية<BiDownArrow className="iicc" onClick={() => setOpen(!open)}/></p>
     
     </div>
     {open && (<div style={{textAlign:"center"}}>
      <img src={S1} alt="img" />
     </div>)}

   <div className="carrd"><p>  رخصة تنظيم تظاهرة<BiDownArrow className="iicc" onClick={() => setOpen1(!open1)}
     aria-controls="example-collapse-text"
     aria-expanded={open1} /></p>
    
     </div>
    {open1 && ( <div style={{textAlign:"center"}}>
      <img src={S2} alt="img" />
     </div>)}

   <div className="carrd"><p>  رخصة الاشغال الوقتي للملك العمومي <BiDownArrow className="iicc" onClick={() => setOpen2(!open2)}

     /></p>

   
     </div>
    {open2 && ( <div style={{textAlign:"center"}}>
      <img src={S3} alt="img"  />
     </div>)}

   <div className="carrd"><p>  رخصة تركيز علامات اشهارية<BiDownArrow className="iicc" onClick={() => setOpen3(!open3)}

     /></p>
    
     </div>
     {open3 && (<div style={{textAlign:"center"}}>
      <img src={S4} alt="img" />
     </div>)}
     </div>
      <Footer />
    </>
  );
}
