import React from "react";
import { FaFacebookF } from "react-icons/fa";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-darkText uppercase font-medium mb-4">
          Búscanos en
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61558151315691&mibextid=ZbWKwL"
            target="_blank"
          >
            <span className="animate-shake animate-infinite animate-duration-[2000ms] animate-ease-linear bannerIcon text-white bg-[#1a7bff]">
              <FaFacebookF />
            </span>
          </a>
        </div>
      </div>
      {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
    </div>
  );
};

export default Media;
