import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-primaryColor to-secundaryColor p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">
          Engineering Innovation
        </h3>
        <p className="text-lg font-normal text-gray-100">
          Empresa de desarrollo de Agendas Digitales
        </p>
        <p className="text-base text-gray-100 tracking-wide">
          Engineering Innovation es una empresa especializada en el desarrollo
          de Agendas Digitales. Nos destacamos por nuestro equipo de expertos en
          la creación de sistemas y software de primera calidad.
        </p>
        <p className="text-base text-gray-100 flex items-center gap-2">
          Telefono: <span className="text-lightText">+591 62346740</span>
        </p>
        <p className="text-base text-gray-100 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">
            engeniirenginnovation12@gmail.com
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Búscanos</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=61558151315691&mibextid=ZbWKwL">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
