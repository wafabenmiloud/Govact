import React from 'react'
import './Khadamet.css'
import Footer from "../../components/Footer/Footer";
import img from "../../assets/header.svg"
import Header from "../../components/Header/Header";
import img1 from "../../assets/k1.svg"
import img2 from "../../assets/k2.svg"
import img3 from "../../assets/k3.svg"
import img4 from "../../assets/k4.svg"
import img5 from "../../assets/k5.svg"
import Card from "../../components/Card/Card"

export default function Khadamet() {
  return (
    <>
    <Header title="دليل الخدمات" description="" img={img}/>
    <div className="grid">
      <Card title="الحالة المدنية" img={img1} link="/Service1"/>
      <Card title="الخدمات الادارية" img={img2} link="/Service2"/>
      <Card title="الجباية المحلية" img={img3} link="/Service3"/>
      <Card title="الشؤون الاقتصادية" img={img4} link="/Service4"/>
      <Card title="خدمات على الخط" img={img5} link="/Service5"/>
    </div>
      <Footer />
  </>
    )
}