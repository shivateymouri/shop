"use client";
import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import { IoEnterOutline, IoMenuSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import useCart from "@/zustand/useCart";
import Link from "next/link";
const categories = [
  { name: "پیشنهاد ویژه", sub: ["محصولات ویژه", "تخفیف‌ها"] },
  { name: "برندها", sub: ["برند A", "برند B", "برند C"] },
  { name: "آرایشی", sub: ["لوازم آرایشی", "ابزار آرایشی", "میکاپ"] },
  { name: "مراقبت پوست", sub: ["کرم‌ها", "سرم‌ها", "ماسک صورت"] },
  { name: "مراقبت و زیبایی مو", sub: ["شامپو", "ماسک مو", "سرم مو"] },
  { name: "بهداشت شخصی و حمام", sub: ["صابون", "شامپو بدن", "ضد تعریق"] },
  { name: "اسپری و ادکلن", sub: ["ادکلن مردانه", "ادکلن زنانه", "بادی اسپلش"] },
  { name: "لوازم برقی", sub: ["سشوار", "اتو مو", "ماشین اصلاح"] },
  { name: "مکمل غذایی و ورزشی", sub: ["پروتئین", "مولتی ویتامین", "کراتین"] },
  { name: "مجله خانومی" },
];
export default function page() {
  const [hovered, setHovered] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  let timeoutId;

  const { products } = useCart();

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutId);
    setHovered(index);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setHovered(null), 300);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div dir="rtl" className="w-full relative z-50">
      <header className="w-full p-6 flex justify-between items-center bg-white text-black shadow-md">
        <div className="flex gap-3 items-center">
          <span
            className="lg:hidden flex cursor-pointer"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <IoMenuSharp size={24} />
          </span>
          <img
            src="https://assets.khanoumi.com/4.82.0.0/_toad/images/brand/logo.svg?v=1.1"
            alt="logo"
            className="object-cover md:flex hidden"
          />
        </div>
        <div className="hidden md:flex items-center gap-2 text-[18px] rounded-md px-4 w-1/3 py-2 border border-gray-300">
          <span>
            <IoIosSearch />
          </span>
          <input
            type="text"
            className="outline-none bg-white w-full"
            placeholder="جست و جو"
          />
        </div>
        <div className="flex gap-6 items-center">
          <span className="border border-red-600 flex justify-center rounded-md gap-3 text-[18px] text-red-600 items-center px-8 py-2 cursor-pointer">
            <IoEnterOutline size={20} />
            ورود
          </span>
          <Link href="/Basket" className="cursor-pointer">
            {products.reduce((counts, item) => {
              return counts + item.count;
            }, 0)}
            <SlBasket size={20} />
          </Link>
        </div>
      </header>

      {mobileMenu && (
        <div className="lg:hidden w-full bg-white text-black shadow-md border-t border-gray-300 absolute top-full left-0 right-0 z-50">
          <div className="flex justify-center items-center p-4">
            <img
              src="https://assets.khanoumi.com/4.82.0.0/_toad/images/brand/logo.svg?v=1.1"
              alt="logo"
              className="object-cover w-32"
            />
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="flex items-center gap-2 text-[18px] rounded-md px-4 w-full py-2 border border-gray-300">
              <span>
                <IoIosSearch />
              </span>
              <input
                type="text"
                className="outline-none bg-white w-full"
                placeholder="جست و جو"
              />
            </div>
          </div>
          <ul className="flex lg:hidden flex-col p-4">
            {categories.map((item, index) => (
              <li
                key={index}
                className="py-2 px-4 border-b border-gray-200 cursor-pointer "
                onClick={() => toggleDropdown(index)}
              >
                {item.name}
                {item.sub && <FiChevronDown className="inline ml-2" />}
                {item.sub && openDropdown === index && (
                  <div className="mt-2 pl-4">
                    {item.sub.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className={`px-4 py-2 ${
                          subIndex !== item.sub.length - 1
                            ? "border-b border-gray-200"
                            : ""
                        } hover:bg-gray-100 cursor-pointer`}
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <nav className="hidden lg:flex flex-col w-full bg-white text-black relative z-50 border-b border-gray-300">
        <ul className="flex gap-4 p-4 items-center justify-start">
          {categories.map((item, index) => (
            <li
              key={index}
              className="relative text-[18px] py-2 px-4 cursor-pointer hover:bg-gray-100 rounded-md hover:text-pink-500"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
              {item.sub && <FiChevronDown className="inline ml-2" />}
              {item.sub &&
                hovered === index &&
                index !== categories.length - 1 && (
                  <div
                    className="absolute right-0 top-full mt-3 w-full bg-white text-black shadow-lg border border-gray-300 rounded-md py-2 z-50"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.sub.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className={`px-4 py-2 ${
                          subIndex !== item.sub.length - 1
                            ? "border-b border-gray-200"
                            : ""
                        } hover:bg-gray-100 cursor-pointer`}
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
