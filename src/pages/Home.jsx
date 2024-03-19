import React from "react";
import { Link } from "react-router-dom";
import mob from "../assets/images/mob.png";
import vihecal from "../assets/images/vihecal.png";
import home from "../assets/images/home.png";
import key from "../assets/images/key.png";
import camera from "../assets/images/camera.png";
import bike from "../assets/images/bike.png";
import trackter from "../assets/images/trakter.png";
import services from "../assets/images/services.png";
import jobs from "../assets/images/jobs.png";
import animals from "../assets/images/animals.png";
import furniture from "../assets/images/furniture.png";
import fashion from "../assets/images/fashion.png";
import books from "../assets/images/books.png";
import m1 from "../assets/images/m1.jpg";
import kids from "../assets/images/kids.png";
import m2 from "../assets/images/m2.jpg";
import m3 from "../assets/images/m3.jpg";
import m4 from "../assets/images/m4.jpg";
import c4 from "../assets/images/c4.jpg";
import c3 from "../assets/images/c3.jpg";
import c2 from "../assets/images/c2.jpg";
import c1 from "../assets/images/c1.jpg";
import b1 from "../assets/images/b1.jpg";
import b2 from "../assets/images/b2.jpg";
import b3 from "../assets/images/b3.jpg";
import b4 from "../assets/images/b4.jpg";
import h4 from "../assets/images/h4.jpg";
import h3 from "../assets/images/h3.jpg";
import h2 from "../assets/images/h2.jpg";
import h1 from "../assets/images/h1.jpg";
import t1 from "../assets/images/t1.jpg";
import t2 from "../assets/images/t2.jpg";
import t3 from "../assets/images/t3.jpg";
import t4 from "../assets/images/t4.jpg";
import Card from "../components/Card";

function Home() {
  // mobarray
  const mobileArray = [
    {
      img: m1,
      price: "55500",
      name: "IPhone XR 128GB",
      address: "Gulshan-e-Ravi, Lahore",
    },
    {
      img: m2,
      price: "108,999",
      name: "IPhone 13 128GB JV",
      address: "Saddar, Karachi",
    },
    {
      img: m3,
      price: "19,000",
      name: "Infinix hot 11 play 6000 mah battery",
      address: "Awan Town, Lahore",
    },
    {
      img: m4,
      price: "69,999",
      name: "IPhone XS Max 64GB NOT PTA",
      address: "Gulberg 3, Lahore",
    },
  ];
  // carArraay
  const carArray = [
    {
      img: c1,
      price: "2,900,000",
      name: "Suzuki Every Wagon 2016",
      address: "DHA Phase 1, Lahore",
    },
    {
      img: c2,
      price: "7,500,000",
      name: "Honda Vezel Hybrid Z Honda Sensing 2018",
      address: "Saddar, Karachi",
    },
    {
      img: c3,
      price: "2,495,000",
      name: "Cultus VXR in Excellent Condition",
      address: "Awan Town, Lahore",
    },
    {
      img: c4,
      price: "2,030,000",
      name: "Suzuki Swift",
      address: "Gulberg 3, Lahore",
    },
  ];
  // BikeArray
  const bikeArray = [
    {
      img: b1,
      price: "48,000",
      name: "SUTLEJ DA 70 CDI 2019 Model",
      address: "Jillani Colony, Bahawalpur",
    },
    {
      img: b2,
      price: "56,000",
      name: "I am selling Road Prince 70CC 2022 Model",
      address: "Saddar, Karachi",
    },
    {
      img: b3,
      price: "157,000",
      name: "Honda CD 70 / 2024 New",
      address: "Askari, Lahore",
    },
    {
      img: b4,
      price: "187,000",
      name: "Honda 125 Model 2023",
      address: "Narwala Road, Faisalabad",
    },
  ];
  // HouseArray
  const houseArray = [
    {
      img: h1,
      price: "110,000,000",
      name: "Brand New,Proper Corner, 40x80 House for Sale with 6 Bedrooms...",
      address: "DHA Phase 1, Lahore",
    },
    {
      img: h2,
      price: "78,500,000",
      name: "For Sale",
      address: "Saddar, Karachi",
    },
    {
      img: h3,
      price: "115,000,000",
      name: "Get Touch Now To Buy A Prime Location Home",
      address: "Awan Town, Lahore",
    },
    {
      img: h4,
      price: "70,030,000",
      name: "House for Sale",
      address: "Gulberg 3, Lahore",
    },
  ];
  // TabletsArray
  const tabletArray = [
    {
      img: t1,
      price: "27,999",
      name: "Apple IPad Mini 4 128GB in Wholesale",
      address: "DHA Phase 1, Lahore",
    },
    {
      img: t2,
      price: "6,499",
      name: "Tabs Best variety Tablets For Kids",
      address: "Saddar, Karachi",
    },
    {
      img: t3,
      price: "235,000",
      name: "IPad Pro 12.9 Inch 4th Gen 256GB",
      address: "Awan Town, Lahore",
    },
    {
      img: t4,
      price: "8,000",
      name: "New Tab/ Gaming Tab/ Kids Tab",
      address: "Gulberg 3, Lahore",
    },
  ];
  return (
    <>
      <section className=" md:max-w-[1280px] md:mx-auto">
        {/* <!-- all categories --> */}
        <div className="pb-11 py-3 px-2">
          <h1 className="md:text-2xl text-lg font-bold py-2">All categories</h1>
          <div className="flex font-bold gap-y-20 gap-x-10 flex-wrap justify-center md:justify-start py-5">
            <div className="w-[106px] h-[116px]">
              <img src={mob} alt="" />
              <div className="text-center py-3">Mobiles</div>
            </div>
            <div className="w-[106px] h-[116px]">
              <img src={vihecal} alt="" />
              <div className="text-center py-3">Vehicles</div>
            </div>
            <div className="w-[106px] h-[116px]">
              <img src={home} alt="" />
              <div className="text-center py-3">Property For Sale</div>
            </div>
            <div className="w-[106px] h-[116px]">
              <img className="w-full h-auto" src={key} alt="" />
              <div className="text-center py-3">Property For Rent</div>
            </div>
            <div className="w-[106px] h-[116px]">
              <img className="w-full h-auto" src={camera} alt="" />
              <div className="text-center py-3">
                Electronics & Home Appliances
              </div>
            </div>
            <div className="w-[106px] h-[116px]">
              <img src={bike} alt="" />
              <div className="text-center py-3">Bikes</div>
            </div>
            <div className="w-[106px] h-[116px]">
              <img src={trackter} alt="" />
              <div className="text-center py-3">
                Business, Industrial & Agriculture
              </div>
            </div>
            <div className="w-[106px] h-[116px]">
              <img src={services} alt="" />
              <div className="text-center py-3">Services</div>
            </div>
            <div className="w-[106px] h-[116px]">
              <img src={jobs} alt="" />
              <div className="text-center py-3">Jobs</div>
            </div>
            <div className="w-[106px] h-[116px]">
              <img src={animals} alt="" />
              <div className="text-center py-3">Animals</div>
            </div>
            <div className="w-[106px] h-[116px]">
              <img src={furniture} alt="" />
              <div className="text-center py-3">Furniture & Home Decor</div>
            </div>
            <div className="w-[106px] h-[116px]">
              <img src={fashion} alt="" />
              <div className="text-center py-3">Fashion & Beauty</div>
            </div>
            <div className="w-[106px] h-[116px]">
              <img src={books} alt="" />
              <div className="text-center py-3">Books, Sports & Hobbies</div>
            </div>
            <div className="w-[106px] h-[116px]">
              <img src={kids} alt="" />
              <div className="text-center py-3">Kids</div>
            </div>
          </div>
        </div>
        {/* <!-- moblie phones --> */}
        <div className="py-4 ">
          <div className="flex justify-between items-center px-2 py-3">
            <h1 className="md:text-2xl text-lg font-bold">Mobile Phones</h1>
            <Link
              to={"mobiles"}
              className="flex items-center  justify-center gap-1 font-bold text-[#00a49f]"
            >
              View more
              <span className="material-symbols-outlined">
                {" "}
                arrow_forward_ios{" "}
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-3 md:flex-row gap-x-8 justify-center lg:justify-start">
            {mobileArray.map((product, i) => {
              return <Card product={product} key={product.img} />;
            })}
          </div>
        </div>
        {/* <!-- Cars --> */}
        <div className="py-4 ">
          <div className="flex justify-between items-center px-2 py-3">
            <h1 className="md:text-2xl text-lg font-bold">Cars</h1>
            <Link
              to={"cars"}
              className="flex items-center justify-center gap-1 font-bold text-[#00a49f]"
            >
              View more
              <span className="material-symbols-outlined">
                {" "}
                arrow_forward_ios{" "}
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-3 md:flex-row gap-x-8">
            {carArray.map((product, i) => {
              return <Card product={product} key={product.img} />;
            })}
          </div>
        </div>
        {/* <!-- Bikes --> */}
        <div className="py-4  ">
          <div className="flex justify-between items-center px-2 py-3">
            <h1 className="md:text-2xl text-lg font-bold">
              Bikes & Motorcycles
            </h1>
            <Link
              to={"bikes"}
              className="flex items-center justify-center gap-1 font-bold text-[#00a49f]"
            >
              View more
              <span className="material-symbols-outlined">
                {" "}
                arrow_forward_ios{" "}
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-3 md:flex-row justify-center lg:justify-start gap-x-8">
            {bikeArray.map((product, i) => {
              return <Card product={product} key={product.img} />;
            })}
          </div>
        </div>
        {/* <!-- Houses --> */}
        <div className="py-4 ">
          <div className="flex justify-between items-center px-2 py-3">
            <h1 className="md:text-2xl text-lg font-bold">Houses</h1>
            <Link
              to={"houses"}
              className="flex items-center justify-center gap-1 font-bold text-[#00a49f]"
            >
              View more
              <span className="material-symbols-outlined">
                {" "}
                arrow_forward_ios{" "}
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-3 md:lex-row justify-center lg:justify-start gap-x-8">
            {houseArray.map((product, i) => {
              return <Card product={product} key={product.img} />;
            })}
          </div>
        </div>
        {/* <!-- Tablets --> */}
        <div className="py-4 ">
          <div className="flex justify-between items-center px-2 py-3">
            <h1 className="md:text-2xl text-lg font-bold">Tablets</h1>
            <Link
              to={"tablets"}
              className="flex items-center justify-center gap-1 font-bold text-[#00a49f]"
            >
              View more
              <span className="material-symbols-outlined">
                {" "}
                arrow_forward_ios{" "}
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-3 md:flex-row justify-center lg:justify-start gap-x-8">
            {tabletArray.map((product, i) => {
              return <Card product={product} key={product.img} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
