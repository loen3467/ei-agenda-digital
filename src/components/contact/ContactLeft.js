import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">
          Engineering Innovation
        </h3>
        <p className="text-lg font-normal text-gray-400">
          Empresa de desarrollo de agendas
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Somos un equipo de expertos en desarrollo de sistemas y software de
          alta calidad. Contamos con experiencia desarrollando soluciones para
          empresas en América Latina, Norte América, Asia, África y Europa.
          Nuestra mejor carta de presentación son nuestros propios clientes y
          los invitamos a ver sus testimonios que avalan nuestra experiencia y
          efectividad.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Telefono: <span className="text-lightText">+591 62346740</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">
            engeniirenginnovation12@gmail.com
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Búscanos</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.facebook.com/profile.php?id=61558151315691&mibextid=ZbWKwL">
              <FaFacebookF />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
