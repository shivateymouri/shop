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

export default function Page() {
  const categories = [
    { img: c1, label: "تخصصی آقایان" },
    { img: c2, label: "مراقبت مو" },
    { img: c3, label: "آرایش لب" },
    { img: c4, label: "آرایش چشم" },
    { img: c5, label: "ضد آفتاب" },
    { img: c6, label: "مراقبت پوستی" },
  ];

  const promos = [mah1, mah2];
  const products = [p1, p2, p3, p4];

  return (
    <section
      dir="rtl"
      className="w-full bg-white flex flex-col items-center p-4 gap-8"
    >
      <div className="w-full max-w-6xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {categories.map((cat, i) => (
          <div key={i} className="flex flex-col items-center cursor-pointer">
            <Image
              src={cat.img}
              alt={cat.label}
              className="w-14 h-14 object-contain"
            />
            <figcaption className="text-black text-sm text-center">
              {cat.label}
            </figcaption>
          </div>
        ))}
      </div>

      <div className="w-full max-w-6xl flex flex-col gap-4">
        {promos.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`promo-${i}`}
            className="w-full h-auto rounded-md object-cover"
          />
        ))}
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`product-${i}`}
            className="w-full h-auto rounded-md object-cover"
          />
        ))}
      </div>
    </section>
  );
}
