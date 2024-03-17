import React from "react";
import f1 from "../assets/images/footer1.webp";

function Footer() {
  return (
    <>
      <div className="mt-4 bg-[#f8faf9] flex gap-4 px-20">
        <img src={f1} alt="" />
        <div>
          <h1>TRY THE OLX APP</h1>
          <p>
            Buy, sell and find just about anything using the app on you mobile.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
