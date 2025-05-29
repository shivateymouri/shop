import React from "react";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import HeadSlider from "../components/HeadSlide/page";
import Brands from "../components/Brands/page";
import Container from "../components/Container/page";
import Product from "../components/Products/page";
export default function page() {
  return (
    <div>
      <Header />
      <HeadSlider />
      <Container />
      <Product />
      <Brands />
      <Footer />
    </div>
  );
}
////https://67a477bf31d0d3a6b7867504.mockapi.io/pro/channel////