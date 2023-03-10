import React, { useContext  } from "react";
import './Service5.css'
import Footer from "../../components/Footer/Footer";
import img from "../../assets/k5.svg"
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card"
import img3 from "../../assets/ka3.svg"
import img2 from "../../assets/ka2.svg"
import img1 from "../../assets/ka1.svg"
import AuthContext from "../../context/AuthContext";


export default function Service5() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <>
    <Header title="    خدمات على الخط" description="" img={img}/>
    <div id="grid">
      {loggedIn && (
        <>
        <Card title="متابعة رخصة البناء " img={img1} link="/S5Service1"/>
      <Card title=" النفاذ إلى المعلومة" img={img2} link="/S5Service2"/>
        </>
      )}
      

      <Card title="مثال التهيئة العمرانية" img={img3} link="/S5Service3"/>
    </div>
          <Footer />
        </>  )
}
