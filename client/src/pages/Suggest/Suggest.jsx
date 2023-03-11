import React from "react";
import "./Suggest.css";
import Header from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";
import garden from "../../assets/13.png";
import dog from "../../assets/11.png";
import maison from "../../assets/14.png";
import mai from "../../assets/15.png";
import { Card, Button } from "react-bootstrap";

export default function Suggest() {
  return (
    <>
      <Header title="مقترحات" description="" />
      <div className="content">
        <div className="content__container">
          <Cards
            title="مقترح العناية بالحدائق "
            text="45 شخص متفق مع هذا الاقتراح "
            img={garden}
          />

          <ImageCard
            title="البديل لقتل الكلاب السائبة"
            text="30شخص مساند
اقرأ  المزيد"
            time="11min "
            img={dog}
          />
        </div>

        <div className="content__container">
          <ImageCard
            title="مواطنون يقترحون دهان موحد "
            text="30شخص مساند
            اقرأ  المزيد"
            time="11min "
            img={maison}
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
const Cards = (props) => {
  return (
    <Card style={{ width: "60%" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">اقرا المزيد </Button>
      </Card.Body>
    </Card>
  );
};
const ImageCard = (props) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">اقرا المزيد </Button>
      </Card.Body>
    </Card>
  );
};
