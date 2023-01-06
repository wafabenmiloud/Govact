import "./Actualite.css";
import Nav from "../../components/Navbar/Menu";
import Footer from "../../components/Footer/Footer";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

import act1 from "../../assets/6.jpg";
import act2 from "../../assets/7.jpg";
import act3 from "../../assets/8.jpg";
import act4 from "../../assets/9.jpg";

import Carousel from "../../components/Slider/Slider";

export default function Actualite() {
  return (
    <>
      <Nav />
      <Carousel>
        <div className="carousel-item">
          <img src={img1} alt="slide1" />
        </div>
        <div className="carousel-item">
          <img src={img2} alt="slide2" />
        </div>
        <div className="carousel-item">
          <img src={img3} alt="slide3" />
        </div>
      </Carousel>
      <div className="acts">
        <Act
          img={act1}
          title=" سفارة دولة فلسطين بتونس"
          details="بمناسبة الذكرى 58 لانطلاقة الثورة الفلسطينية المعاصرة تم صباح اليوم الاحد الموافق 1 جانفي 2023 وضع اكليل من الزهور بمقبرة الشهداء بحمام الأنف وكذلك بالنصب التذكاري بحمام الشط وذلك بحضور سفير دولة فلسطين لدى الجمهورية التونسية الشقيقة والسيد معتمد حمام الانف ورئيس البلدية ورئيس منطقة الأمن الوطني بحمام الأنف ومعتمد حمام الشط وطاقم السفارة وإقليم حركة فتح والجالية الفلسطينية وكوادر منظمة التحرير بالساحة التونسية🇹🇳🇵🇸"
        />
        <Act
          img={act2}
          title="الخميس 22 ديسمبر 2022"
          details="تدخل #البلدية 👷🧹🚧🚜 لتقليم الاشجار 🌳🌳🌳 بنهج فرحان حشاد."
        />
        <Act
          img={act3}
          title="الجمعة 16 ديسمبر 2022."
          details="في إطار تفعيل لجنة متابعة مآل تنفيذ القرارات البلدية الصادرة في مجال مخالفة التراتيب العمرانية والاعتداء على الفضاءات العمومية بالانتصاب الفوضوي وباكتساح الرصيف والممرات ، عقدت جلسة عمل في الغرض بتاريخ 16 ديسمبر 2022 لتذليل الصعوبات الموجودة وإيجاد الحلول والبدائل اللازمة لتنفيذ القرارات.
وقد حضر الجلسة كل من رئيس #البلدية و رئيس الفرقة الجهوية للشرطة البلدية و رئيس مركز الشرطة البلدية بحمام الأنف و و إطارات من الادارة البلدية"
        />
        <Act img={act4} title="الثلاثاء 13 ديسمبر 2022" details="متابعة #البلدية لاشغال جهر مجاري مياه الامطار 🌧️ و الاودية 🏞️ من طرف الادارة العامة للمياه العمرانية  👷🧹🚧🚜 " />
      </div>

      <Footer />
    </>
  );
}

const Act = (props) => {
  return (
    <div className="containr">
      <div className="containr__img">
        <img src={props.img} alt="act" />
      </div>
      <div className="containr__title">
        <h3>{props.title}</h3>
      </div>
      <div className="containr__details">
        <p>{props.details}</p>
      </div>
    </div>
  );
};
