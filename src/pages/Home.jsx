import React from "react";
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

function Home() {
  return (
    <>
      <section class=" md:max-w-[1280px] md:mx-auto">
        {/* <!-- all categories --> */}
        <div class="pb-11 py-3 px-2">
          <h1 class="md:text-2xl text-lg font-bold py-2">All categories</h1>
          <div class="flex font-bold gap-y-20 gap-x-10 flex-wrap py-5">
            <div class="w-[106px] h-[116px]">
              <img src={mob} alt="" />
              <div class="text-center py-3">Mobiles</div>
            </div>
            <div class="w-[106px] h-[116px]">
              <img src={vihecal} alt="" />
              <div class="text-center py-3">Vehicles</div>
            </div>
            <div class="w-[106px] h-[116px]">
              <img src={home} alt="" />
              <div class="text-center py-3">Property For Sale</div>
            </div>
            <div class="w-[106px] h-[116px]">
              <img class="w-full h-auto" src={key} alt="" />
              <div class="text-center py-3">Property For Rent</div>
            </div>
            <div class="w-[106px] h-[116px]">
              <img class="w-full h-auto" src={camera} alt="" />
              <div class="text-center py-3">Electronics & Home Appliances</div>
            </div>
            <div class="w-[106px] h-[116px]">
              <img src={bike} alt="" />
              <div class="text-center py-3">Bikes</div>
            </div>
            <div class="w-[106px] h-[116px]">
              <img src={trackter} alt="" />
              <div class="text-center py-3">
                Business, Industrial & Agriculture
              </div>
            </div>
            <div class="w-[106px] h-[116px]">
              <img src={services} alt="" />
              <div class="text-center py-3">Services</div>
            </div>
            <div class="w-[106px] h-[116px]">
              <img src={jobs} alt="" />
              <div class="text-center py-3">Jobs</div>
            </div>
            <div class="w-[106px] h-[116px]">
              <img src={animals} alt="" />
              <div class="text-center py-3">Animals</div>
            </div>
            <div class="w-[106px] h-[116px]">
              <img src={furniture} alt="" />
              <div class="text-center py-3">Furniture & Home Decor</div>
            </div>
            <div class="w-[106px] h-[116px]">
              <img src={fashion} alt="" />
              <div class="text-center py-3">Fashion & Beauty</div>
            </div>
            <div class="w-[106px] h-[116px]">
              <img src={books} alt="" />
              <div class="text-center py-3">Books, Sports & Hobbies</div>
            </div>
            <div class="w-[106px] h-[116px]">
              <img src={kids} alt="" />
              <div class="text-center py-3">Kids</div>
            </div>
          </div>
        </div>
        {/* <!-- moblie phones --> */}
        <div class="py-4 ">
          <div class="flex justify-between items-center px-2 py-3">
            <h1 class="md:text-2xl text-lg font-bold">Mobile Phones</h1>
            <button class="flex items-center  justify-center gap-1 font-bold text-[#00a49f]">
              View more
              <span class="material-symbols-outlined"> arrow_forward_ios </span>
            </button>
          </div>
          <div class="flex flex-wrap gap-3 md:flex-row gap-x-8 px-3">
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={m1}
                alt=""
              />
              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 55,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">IPhone XR 128GB</p>
                <p class="text-xs">Gulshan-e-Ravi, Lahore</p>
              </div>
            </div>
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={m2}
                alt=""
              />
              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 108,999</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">IPhone 13 128GB JV</p>
                <p class="text-xs">Saddar, Karachi</p>
              </div>
            </div>
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={m3}
                alt=""
              />
              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 19,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">Infinix hot 11 play 6000 mah battery</p>
                <span>Awan Town, Lahore</span>
              </div>
            </div>
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={m4}
                alt=""
              />

              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 69,999</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">IPhone XS Max 64GB NOT PTA</p>
                <p class="text-xs">Gulberg 3, Lahore</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Cars --> */}
        <div class="py-4 ">
          <div class="flex justify-between items-center py-3">
            <h1 class="md:text-2xl text-lg font-bold">Cars</h1>
            <button class="flex items-center justify-center gap-1 font-bold text-[#00a49f]">
              View more
              <span class="material-symbols-outlined"> arrow_forward_ios </span>
            </button>
          </div>
          <div class="flex flex-wrap px-3 gap-3 md:flex-row gap-x-8">
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={c1}
                alt=""
              />
              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 2,900,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">Suzuki Every Wagon 2016</p>
                <p class="text-xs">DHA Phase 1, Lahore</p>
              </div>
            </div>
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={c2}
                alt=""
              />
              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 7,500,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">Honda Vezel Hybrid Z Honda Sensing 2018</p>
                <p class="text-xs">Saddar, Karachi</p>
              </div>
            </div>
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={c3}
                alt=""
              />
              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 2,495,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">Cultus VXR in Excellent Condition</p>
                <p class="text-xs">Awan Town, Lahore</p>
              </div>
            </div>
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={c4}
                alt=""
              />

              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 2,030,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">Suzuki Swift</p>
                <p class="text-xs">Gulberg 3, Lahore</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Bikes --> */}
        <div class="py-4  ">
          <div class="flex justify-between items-center py-3">
            <h1 class="md:text-2xl text-lg font-bold">Bikes & Motorcycles</h1>
            <button class="flex items-center justify-center gap-1 font-bold text-[#00a49f]">
              View more
              <span class="material-symbols-outlined"> arrow_forward_ios </span>
            </button>
          </div>
          <div class="flex flex-wrap gap-3 md:flex-row px-3 gap-x-8">
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={b1}
                alt=""
              />
              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 48,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">SUTLEJ DA 70 CDI 2019 Model</p>
                <p class="text-xs">Jillani Colony, Bahawalpur</p>
              </div>
            </div>
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={b2}
                alt=""
              />
              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 56,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">I am selling Road Prince 70CC 2022 Model</p>
                <p class="text-xs">Saddar, Lahore</p>
              </div>
            </div>
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={b3}
                alt=""
              />
              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 157,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">Honda CD 70 / 2024 New</p>
                <p class="text-xs">Askari, Lahore</p>
              </div>
            </div>
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={b4}
                alt=""
              />

              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 187,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">Honda 125 Model 2023</p>
                <p class="text-xs">Narwala Road, Faisalabad</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Houses --> */}
        <div class="py-4 ">
          <div class="flex justify-between items-center py-3">
            <h1 class="md:text-2xl text-lg font-bold">Houses</h1>
            <button class="flex items-center justify-center gap-1 font-bold text-[#00a49f]">
              View more
              <span class="material-symbols-outlined"> arrow_forward_ios </span>
            </button>
          </div>
          <div class="flex flex-wrap gap-3 md:lex-row px-3 gap-x-8">
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={h1}
                alt=""
              />
              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 110,000,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">
                  Brand New,Proper Corner, 40x80 House for Sale with 6
                  Bedrooms...
                </p>
                <p class="text-xs">DHA Phase 1, Lahore</p>
              </div>
            </div>
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={h2}
                alt=""
              />
              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 78,500,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">For Sale</p>
                <p class="text-xs">Saddar, Karachi</p>
              </div>
            </div>
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={h3}
                alt=""
              />
              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 115,000,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">Get Touch Now To Buy A Prime Location Home</p>
                <p class="text-xs">Awan Town, Lahore</p>
              </div>
            </div>
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={h4}
                alt=""
              />

              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 70,030,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">House for Sale</p>
                <p class="text-xs">Gulberg 3, Lahore</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Tablets --> */}
        <div class="py-4 ">
          <div class="flex justify-between items-center py-3">
            <h1 class="md:text-2xl text-lg font-bold">Tablets</h1>
            <button class="flex items-center justify-center gap-1 font-bold text-[#00a49f]">
              View more
              <span class="material-symbols-outlined"> arrow_forward_ios </span>
            </button>
          </div>
          <div class="flex flex-wrap gap-3 md:flex-row px-3 gap-x-8">
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={t1}
                alt=""
              />
              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 27,999</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">Apple IPad Mini 4 128GB in Wholesale</p>
                <p class="text-xs">DHA Phase 1, Lahore</p>
              </div>
            </div>
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={t2}
                alt=""
              />
              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 6,499</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">Tabs Best variety Tablets For Kids</p>
                <p class="text-xs">Saddar, Karachi</p>
              </div>
            </div>
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={t3}
                alt=""
              />
              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 235,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">IPad Pro 12.9 Inch 4th Gen 256GB</p>
                <p class="text-xs">Awan Town, Lahore</p>
              </div>
            </div>
            <div class="flex-col rounded-lg border-2 shadow-md w-[300px] h-[350px]">
              <img
                class="object-cover rounded-lg h-[200px]"
                width="300px"
                src={t4}
                alt=""
              />

              <div class="p-3">
                <div class="flex justify-between py-2">
                  <span>RS 8,000</span>
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <p class="py-3">New Tab/ Gaming Tab/ Kids Tab</p>
                <p class="text-xs">Gulberg 3, Lahore</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
