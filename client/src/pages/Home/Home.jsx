import React from "react";
import "./Home.css";
import "../Suggest/Suggest.css";
import Footer from "../../components/Footer/Footer";
import header from "../../assets/headersvg.svg";
import Header from "../../components/Header/Header";
import garden from "../../assets/13.png";
import act1 from "../../assets/6.jpg";
import act3 from "../../assets/8.jpg";
import mai from "../../assets/15.png";
import Cards from "../../components/Card/Cards"
import ImageCard from "../../components/Card/ImageCard"
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
      <div className="content">
        <div className="content__container">
          <Cards
            title="مقترح العناية بالحدائق "
            text="45 شخص متفق مع هذا الاقتراح "
            img={garden}
          />

          <ImageCard
            title=" سفارة دولة فلسطين بتونس            "
            text="بمناسبة الذكرى 58 لانطلاقة الثورة الفلسطينية المعاصرة..."
            time="11min "
            img={act1}
          />
        </div>

        <div className="content__container">
          <ImageCard
            title="الجمعة 16 ديسمبر 2022            "
            text="في إطار تفعيل لجنة متابعة مآل تنفيذ القرارات البلدية ..."
                        time="11min "
            img={act3}
          />
          <Cards
            title="مقترح ترميم المنازل الأيلة للسقوط "
            text="45 شخص متفق مع هذا الاقتراح "
            img={mai}
          />
        </div>
        </div>
      <Footer />
    </>
  );
}
