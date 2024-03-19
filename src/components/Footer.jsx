import React from "react";
import f1 from "../assets/images/footer1.webp";
import as from "../assets/icon/apstore.svg";
import gs from "../assets/icon/googlestore.svg";
import ag from "../assets/icon/apgallery.svg";
import tw from "../assets/icon/tw.svg";
import fb from "../assets/icon/fb.svg";
import mu from "../assets/icon/mu.svg";
import ins from "../assets/icon/in.svg";

function Footer() {
  return (
    <>
      {/* first div */}
      <div className="mt-4 text-[#002f34] bg-[#f8faf9] md:flex gap-10 pl-28 pr-16 border-b-2 border-[#c6cfd1] hidden ">
        <img src={f1} alt="" />
        <div className="py-6   w-[410px]">
          <div className="gap-4 flex flex-col border-r-2 border-[#c6cfd1]">
            <h1 className="text-3xl  font-bold py-2">TRY THE OLX APP</h1>
            <p className="text-xl">
              Buy, sell and find just about anything using the app on you
              mobile.
            </p>
          </div>
        </div>
        <div className="px-4 py-12">
          <p className="font-bold text-sm">GET YOUR APP TODAY</p>
          <div className="flex gap-2 pt-4">
            <img className="w-[120px] cursor-pointer" src={as} alt="" />
            <img className="w-[120px] cursor-pointer" src={gs} alt="" />
            <img className="w-[120px] cursor-pointer" src={ag} alt="" />
          </div>
        </div>
      </div>
      {/* second div */}
      <div className="bg-[#ebeeef] text-sm  ">
        <div className="max-w-[1280px] items-center py-6 flex flex-col md:flex-row gap-16 pb-10">
          <div className="flex flex-col items-center gap-1">
            <p className="font-bold mb-1">POPULAR CATEGORIES</p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              Cars
            </p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              Flats for rent
            </p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              Mobile Phones
            </p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              Jobs
            </p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-bold mb-1">TRENDING SEARCHES</p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              Bikes
            </p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              Watches
            </p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              Books
            </p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              Dogs
            </p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-bold mb-1">ABOUT US</p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              About Dubizzie Group
            </p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              OLX Blog
            </p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              Contact Us
            </p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              OLX for Businesses
            </p>
          </div>
          <div className="flex flex-col item-center gap-1">
            <p className="font-bold mb-1">OLX</p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              Help
            </p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              Sitemap
            </p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              Terms of use
            </p>
            <p className="text-[#616768] text-[12px] cursor-pointer hover:text-[#002f34]">
              Privacy Policy
            </p>
          </div>
          <div className="pt-2 md:pl-32 flex flex-col items-center">
            <p className="font-bold ml-1 mb-1">FOLLOW US</p>
            <div className="flex gap-1">
              <img className="w-[25px] cursor-pointer" src={tw} alt="" />
              <img className="w-[25px] cursor-pointer" src={fb} alt="" />
              <img className="w-[25px] cursor-pointer" src={mu} alt="" />
              <img className="w-[25px] cursor-pointer" src={ins} alt="" />
            </div>
            <div className="flex gap-2 mt-8">
              <img className="w-[80px] cursor-pointer" src={as} alt="" />
              <img className="w-[80px] cursor-pointer" src={gs} alt="" />
              <img className="w-[80px] cursor-pointer" src={ag} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* third div */}
      <div className="bg-[#002f34] text-white">
        <div className="flex md:justify-end justify-center items-center md:pr-40 py-4">
          <p className="font-bold text-center text-[10px]">
            Free Classifieds in Pakistan
          </p>
          <p className="ml-2 text-center text-[10px]"> . © 2006-2024 OLX</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
