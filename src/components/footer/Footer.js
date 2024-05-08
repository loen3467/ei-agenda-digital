import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { logo } from "../../assets/index";
import Media from "../banner/Media";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-2 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <Media />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 address-info-row text-xl text-darkText">
        <div className="flex items-center address-info">
          <span className="btn bg-sky-200 p-2 rounded-full">
            <IoLocationSharp />
          </span>
          <p className="ml-4">
            Av. Beni, Barrio Fleig
            <br />
            Calle Bibosi #22
            <br />
            <a href="tel:+59169041598" className="text-blue-500">
              <i className="fas fa-phone-alt"></i> +591 69041598
            </a>
            <br />
            <strong>La Paz - Bolivia</strong>
          </p>
        </div>
        <div className="flex items-center address-info">
          <span className="btn bg-sky-200 p-2 rounded-full">
            <IoLocationSharp />
          </span>
          <p className="ml-4">
            C/ J. Mendoza No.1450, Ed. Equus, P. 5, Of. 502, San Miguel
            <br />
            <a href="tel:+59177775993" className="text-blue-500">
              <i className="fas fa-phone-alt"></i> +591 777 75 993
            </a>
            <br />
            <strong>La Paz - Bolivia</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
