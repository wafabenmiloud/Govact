import React from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import header from "../../assets/headersvg.svg";
import Header from "../../components/Header/Header";
export default function Home() {
  return (
    <>
      <Header
        title="             بلدية حمام الانف  "
        description=" منصة البلدية الرقمية هي منصة الكترونية أسست من أجل تسهيل التواصل
              الرقمي بين البلدية و المواطنين عبر مجموعة من الخدمات الإدارية و
              التشاركية"
        img={header}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
