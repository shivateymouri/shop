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

export default function Header() {
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

  const totalCount = products.reduce((count, item) => count + item.count, 0);

  return (
    <div dir="rtl" className="w-full relative z-50">
      <header className="w-full p-6 flex justify-between items-center bg-white text-black shadow-md">
        <div className="flex gap-3 items-center">
          <span
            className="xl:hidden flex cursor-pointer"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            <IoMenuSharp size={24} />
          </span>

          <img
            src="https://assets.khanoumi.com/4.91.0.0/_toad/images/brand/logo.svg?v=1.1"
            alt="logo"
            className="object-contain md:flex hidden w-32"
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
            aria-label="Search"
          />
        </div>
        <img
          className="flex md:hidden"
          src="https://assets.khanoumi.com/4.91.0.0/_toad/images/brand/logo.svg?v=1.1"
          alt=""
        />

        <div className="flex gap-6 items-center">
          <button
            className="border border-red-600 flex justify-center rounded-md gap-3 text-[18px] text-red-600 items-center px-8 py-2 cursor-pointer hover:bg-red-50 transition"
            aria-label="Login"
          >
            <IoEnterOutline size={20} />
            ورود
          </button>

          <Link
            href="/Basket"
            className="relative cursor-pointer"
            aria-label="Shopping Basket"
          >
            {totalCount >= 0 && (
              <span className="absolute -top-4 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalCount}
              </span>
            )}
            <SlBasket size={20} />
          </Link>
        </div>
      </header>

      {mobileMenu && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setMobileMenu(false)}
            aria-label="Close menu backdrop"
          ></div>

          <aside
            className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out"
            style={{
              transform: mobileMenu ? "translateX(0)" : "translateX(100%)",
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <img
                src="https://assets.khanoumi.com/4.91.0.0/_toad/images/brand/logo.svg?v=1.1"
                alt=""
              />
              <button
                onClick={() => setMobileMenu(false)}
                aria-label="Close menu"
                className="text-gray-700 hover:text-red-600 transition"
              >
                ✕
              </button>
            </div>

            <div className="p-4 overflow-y-auto h-[calc(100%-56px)]">
              <ul className="flex flex-col gap-3">
                {categories.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex justify-between items-center w-full px-3 py-2 rounded-md hover:bg-red-50 transition-colors text-gray-900 font-medium"
                    >
                      <span>{item.name}</span>
                      {item.sub && (
                        <FiChevronDown
                          className={`transition-transform duration-300 ${
                            openDropdown === index ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      )}
                    </button>

                    {item.sub && openDropdown === index && (
                      <ul className="mt-1 flex flex-col gap-2 mr-4 border-r border-gray-300 pr-2">
                        {item.sub.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="cursor-pointer rounded-md px-4 py-1 text-gray-700 hover:bg-red-100 transition"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </>
      )}

      {/* منوی دسکتاپ - فقط در xl به بالا */}
      <nav className="hidden xl:flex flex-col w-full bg-white text-black relative z-50 border-b border-gray-300">
        <ul className="flex gap-4 p-4 items-center justify-start">
          {categories.map((item, index) => (
            <li
              key={index}
              className="relative text-[18px] flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-md hover:text-pink-500 select-none"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              tabIndex={0}
              onFocus={() => handleMouseEnter(index)}
              onBlur={handleMouseLeave}
            >
              {item.name}
              {item.sub && <FiChevronDown className="inline ml-2" />}
              {item.sub &&
                hovered === index &&
                index !== categories.length - 1 && (
                  <div
                    className="absolute right-0 top-full mt-3 w-48 bg-white text-black shadow-lg border border-gray-300 rounded-md py-2 z-50 transition-all duration-300 ease-in-out"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.sub.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className={`py-2 text-center ${
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
