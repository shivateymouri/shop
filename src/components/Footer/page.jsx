import React from "react";
import Image from "next/image";
import developer from "../../assets/img/dev.png";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineLinkedin } from "react-icons/ai";
export default function page() {
  return (
    <footer
      dir="rtl"
      className="w-full p-3 gap-3 md:gap-0 bg-black flex flex-col md:flex-row justify-between items-center"
    >
      <div className="w-full md:w-1/3 flex flex-col p-3 justify-center items-center gap-3">
        <Image
          src={developer}
          className="rounded-full w-[180px] h-[180px] object-cover"
          alt="developer"
        />
        <h2 className="text-white text-md font-mono animate-bounce mt-4">
          Developed by Shiva Teymouri
        </h2>
        <div className="w-full flex justify-center items-center gap-3">
          <a href="https://www.instagram.com/shivateymouri.dev?igsh=MXh3NXBhMjhsZ2tiYg==">
            <IoLogoInstagram size={24}/>
          </a>
          <a href="http://www.linkedin.com/in/shiva-teymoori">
          <AiOutlineLinkedin size={24}/>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-3 flex flex-col justify-center items-center gap-3">
      <h2 className="font-bold text-[18px]">شرکت خانومی</h2>
      <h6 className="hover:text-pink-500 cursor-pointer">تماس با ما</h6>
      <h6 className="hover:text-pink-500 cursor-pointer">درباره ما</h6>
      <h6 className="hover:text-pink-500 cursor-pointer">فرصت های شغلی</h6>
      <h6 className="hover:text-pink-500 cursor-pointer">حریم خصوصی</h6>
      <h6 className="hover:text-pink-500 cursor-pointer">مجله خانومی</h6>
      <h6 className="hover:text-pink-500 cursor-pointer">خانومی بیزینس</h6>
      <h6 className="hover:text-pink-500 cursor-pointer">خانومی TV</h6>
      </div>
      <div className="w-full md:w-1/3 p-3 flex flex-col justify-center items-center gap-3">
      <h2 className="font-bold text-[18px]">خدمات مشتریان</h2>
      <h6 className="hover:text-pink-500 cursor-pointer">پرسش های متداول</h6>
      <h6 className="hover:text-pink-500 cursor-pointer">راهنمای خرید و پرداخت</h6>
      <h6 className="hover:text-pink-500 cursor-pointer">رویه های ارسال</h6>
      <h6 className="hover:text-pink-500 cursor-pointer">شرایط مرجوعی</h6>
      <h6 className="hover:text-pink-500 cursor-pointer">خرید کالای شانس</h6>
      <h6 className="hover:text-pink-500 cursor-pointer">ارتباط با پشتیبانی</h6>
      </div>
    </footer>
  );
}
