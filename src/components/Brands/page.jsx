import React from 'react'
import Image from 'next/image'
import b1 from '../../assets/img/b1.jpeg'
import b2 from '../../assets/img/b2.png'
import b3 from '../../assets/img/b3.png'
import b4 from '../../assets/img/b4.png'
import b5 from '../../assets/img/b5.png'
import b6 from '../../assets/img/b6.png'
import b7 from '../../assets/img/b7.png'
import b8 from '../../assets/img/b8.png'
import b9 from '../../assets/img/b9.png'
import b10 from '../../assets/img/b10.png'
import m1 from '../../assets/img/m1.png'
import m2 from '../../assets/img/m2.png'
import m3 from '../../assets/img/m3.png'
import m4 from '../../assets/img/m4.png'
import '../../assets/css/master.css'
export default function page() {
  return (
    <section dir='rtl' className='w-full bg-white flex justify-center items-center flex-col p-3 '>
         <div className='w-full md:w-2/3 flex justify-between items-center gap-2 flex-wrap p-3 *:w-1/6 *:cursor-pointer'>
         <Image src={m1} alt="m1"/>
         <Image src={m2} alt="m2"/>
         <Image src={m3} alt="m3"/>
         <Image src={m4} alt="m4"/>
         </div>
        <h2 className='w-full flex flex-start text-black font-bold text-[20px] p-6'>برندهای برتر</h2>
        <div className='w-full md:w-2/3 flex justify-between items-center gap-2 flex-wrap p-3 *:w-1/6 *:cursor-pointer mb-3'>
            <Image src={b1} alt="b1"/>
            <Image src={b2} alt="b2"/>
            <Image src={b3} alt="b3"/>
            <Image src={b4} alt="b4"/>
            <Image src={b5} alt="b5"/>
            <Image src={b6} alt="b6"/>
            <Image src={b7} alt="b7"/>
            <Image src={b8} alt="b8"/>
            <Image src={b9} alt="b9"/>
            <Image src={b10} alt="b10"/>
        </div>
    </section>
  )
}
