import { Socials } from "../../components/constants";
import Image from "next/image";
import React from 'react'
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-20">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/LenardART.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin responsive-image hidden md:block"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Lenard | Dev
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <div className={'p-1'}>
              <Link href={"/"} className="cursor-pointer">Home</Link>
            </div>
            <div className={'p-1'}>
              <Link href="/Skills" className="cursor-pointer">Skills</Link>
            </div>
            <div className={'p-1'}>
              <Link href={'/Projects'} className="cursor-pointer">Projects</Link>
            </div>
            <div className={'p-1'}>
              <Link href={'/Projects'} className="cursor-pointer">Certificates</Link>
            </div>
            <div className={'p-1'}>
              <Link href={'/Contacts'} className="cursor-pointer">Contacts</Link>
            </div>


          </div>
        </div>

        <div className="group relative transition-transform duration-300 active:scale-95 md:mr-6 w-fit h-auto hidden md:block ">
          <button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
            <span className='block rounded-md bg-slate-950 px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80'>
              <a href="/Contacts">
                Hire Me!
              </a>

            </span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar