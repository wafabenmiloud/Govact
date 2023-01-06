import React from "react";
import "./Avis.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import img from "../../assets/avis.svg";

export default function Avis() {
  return (
    <>
      <Header title="استطلاعات الرأي" description="" img={img} />
      <form className="question__wrapper">
        <Question question="    هل انت راض عن مستوى خدمة اصدار التراخيص؟" />
        <Question question="    هل تساند حملة مع قنص الكلاب السائبة ؟ " />
        <Question question="    هل انت راض عن مستوى خدمة البلدية  ؟" /><br/>
        <input className="button" type="button" value="ارسال" />
      </form>
      <Footer />
    </>
  );
}
const Question = (props) => {
  return (
    <>
        <h3>{props.question}</h3>
        <input type="radio" id="yes" name="qt" value="" />
        <label for="yes">نعم</label>
        <input type="radio" id="no" name="qt" value="" />
        <label for="no">لا</label>
        <input type="radio" id="idk" name="qt" value="" />
        <label for="idk">محايد</label>
    </>
  );
};
