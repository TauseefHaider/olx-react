import React from "react";
import logo from "../assets/icon/logo.svg";
import property from "../assets/icon/property.svg";
import motors from "../assets/icon/motors.svg";
import blacklogo from "../assets/icon/logoblack.svg";
import sellbtn from "../assets/icon/sellbtn.svg";
import ad1 from "../assets/images/ad1.jpg";

function Header() {
  return (
    <>
      <header className="bg-[#f7f8f8] sticky top-0">
        <div className="flex flex-col  gap-2 w-full md:max-w-[1280px] md:mx-auto py-3">
          <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-10 mx-2">
            <img className="cursor-pointer" src={logo} alt="Logo" />
            <button className="group">
              <img src={motors} className="hover:fill-[#3a77ff]" alt="" />
            </button>
            <button>
              <img src={property} alt="" />
            </button>
          </div>
          <div className="md:flex items-center gap-5 hidden">
            <img
              className="h-[2.235rem] mr-2 cursor-pointer"
              src={blacklogo}
              alt=""
            />
            <div className="lg:flex hidden items-center border-2 border-[#002f34] rounded-[4px] gap-2 bg-white p-2">
              <span className="material-symbols-outlined"> search </span>
              <input
                className="outline-none border-0 text-lg"
                type="text"
                placeholder="Search city, area or Locality"
                value="Pakistan"
              />
              <span className="material-symbols-outlined"> expand_more </span>
            </div>
            <div className="flex items-center border-2 border-[#002f34] rounded-[4px] bg-white md:flex-1">
              <input
                className="outline-none border-0 text-lg p-2 md:flex-1"
                type="text"
                placeholder="Find cars, mobile phones, and more..."
                value=""
              />
              <button className="bg-[#002f34] h-full p-[10px] flex items-center justify-center">
                <span className="material-symbols-outlined text-white">
                  {" "}
                  search{" "}
                </span>
              </button>
            </div>
            <button className="text-xl font-bold border-b-2 border-black">
              Login
            </button>

            <button className="flex relative justify-center items-center">
              <img className="" src={sellbtn} alt="" />

              <div className="absolute flex items-center justify-center font-bold">
                <span className="material-symbols-outlined"> add </span>
                <span> SELL </span>
              </div>
            </button>
          </div>
        </div>
      </header>
      {/* Manu */}
      <menu className="py-2 border-b-2 shadow-md hidden md:block">
        <div className="flex max-w-[1280px] mx-auto gap-5">
          <div className="flex justify-center items-center gap-2 font-bold cursor-pointer">
            <span>All categories</span>
            <span className="material-symbols-outlined"> expand_more </span>
          </div>
          <div className="flex justify-center gap-3">
            <span className="cursor-pointer hover:text-[#00a49f]">
              Moblie Phones
            </span>
            <span className="cursor-pointer hover:text-[#00a49f]">Cars</span>
            <span className="cursor-pointer hover:text-[#00a49f]">
              Motorcycles
            </span>
            <span className="cursor-pointer hover:text-[#00a49f]">Houses</span>
            <span className="cursor-pointer hover:text-[#00a49f]">
              Video-Audios
            </span>
            <span className="cursor-pointer hover:text-[#00a49f]">Tablets</span>
            <span className="cursor-pointer hover:text-[#00a49f]">
              Land & Plots
            </span>
          </div>
        </div>
      </menu>
      <div className="max-w-[1280px] mx-auto">
        <img className="py-3" src={ad1} alt="" />
      </div>
    </>
  );
}

export default Header;
