"use client";
import React from "react";
import Image from "next/image";
import mah1 from "../../assets/img/mah1.png";
import mah2 from "../../assets/img/mah2.png";
import p1 from "../../assets/img/p1.jpeg";
import p2 from "../../assets/img/p2.jpeg";
import p3 from "../../assets/img/p3.jpeg";
import p4 from "../../assets/img/p4.jpeg";
import c1 from "../../assets/img/c1.webp";
import c2 from "../../assets/img/c2.webp";
import c3 from "../../assets/img/c3.webp";
import c4 from "../../assets/img/c4.webp";
import c5 from "../../assets/img/c5.webp";
import c6 from "../../assets/img/c6.webp";
export default function page() {
  return (
    <section
      dir="rtl"
      className="w-full bg-white flex justify-center items-center flex-col p-3"
    >
      <div className="w-full md:w-2/3 hidden md:flex justify-between items-center gap-2 flex-wrap p-3 *:cursor-pointer *:w-1/12 *:text-center">
        <div className="flex justify-center items-center gap-3 flex-col">
          <Image src={c1} alt="c1" />
          <figcaption className="text-black">تخصصی آقایان</figcaption>
        </div>
        <div className="flex justify-center items-center gap-3 flex-col">
          <Image src={c2} alt="c2" />
          <figcaption className="text-black">مراقبت مو</figcaption>
        </div>
        <div className="flex justify-center items-center gap-3 flex-col">
          <Image src={c3} alt="c3" />
          <figcaption className="text-black">آرایش لب</figcaption>
        </div>
        <div className="flex justify-center items-center gap-3 flex-col">
          <Image src={c4} alt="c4" />
          <figcaption className="text-black">آرایش چشم</figcaption>
        </div>
        <div className="flex justify-center items-center gap-3 flex-col">
          <Image src={c5} alt="c5" />
          <figcaption className="text-black">ضد آفتاب</figcaption>
        </div>
        <div className="flex justify-center items-center gap-3 flex-col">
          <Image src={c6} alt="c6" />
          <figcaption className="text-black">مراقبت پوستی</figcaption>
        </div>
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-between items-center gap-2 flex-wrap p-3 *:cursor-pointer *:w-full">
        <Image src={mah1} alt="m1" />
        <Image src={mah2} alt="m2" />
      </div>

      <div className="w-full md:w-full flex justify-center items-center gap-2 flex-wrap p-3 *:cursor-pointer *:md:w-1/3 *:w-full">
        <Image src={p1} alt="p1" />
        <Image src={p2} alt="p2" />
        <Image src={p3} alt="p3" />
        <Image src={p4} alt="p4" />
      </div>
    </section>
  );
}
