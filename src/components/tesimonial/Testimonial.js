import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import { quote, ue1, ue2, ue3, ue4, ue5, ue6 } from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="testimonial"
      ref={sectionRef}
      className={`w-full py-20 border-b-[1px] border-b-black ${
        isVisible ? "animate-flip-up animate-duration-[2000ms]" : "opacity-0"
      }`}
    >
      <div className="flex justify-center items-center text-center">
        <Title title="¿QUE DICEN NUESTROS CLIENTES?" des="Nuestros Clientes" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gradient-to-r from-primaryColor to-secundaryColor p-8">
              <img src={ue1} alt="Colegio 1" className="w-full h-auto" />
              <img src={ue2} alt="Colegio 2" className="w-full h-auto" />
              <img src={ue3} alt="Colegio 3" className="w-full h-auto" />
              <img src={ue4} alt="Colegio 4" className="w-full h-auto" />
              <img src={ue5} alt="Colegio 5" className="w-full h-auto" />
              <img src={ue6} alt="Colegio 6" className="w-full h-auto" />
            </div>
          </div>

          {/* ================ Slider Two ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between p-10">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-primaryColor p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={ue1}
                  alt="testimonialTwo"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-lighColor tracking-wide mb-2">
                    Unidad Educativa Técnico Humanístico
                  </p>
                  <h3 className="text-2xl font-bold">
                    U.E. Carlos Palenque Avilés
                  </h3>
                  <p className="text-base tracking-wide text-gray-200">
                    El Alto 1
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-primaryColor rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div className="text-center">
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        U.E. Carlos Palenque Avilés
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Oral - 5 de marzo del 2024
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    La implementación de la Agenda Digital en la U.E. Carlos
                    Palenque Avilés ha sido verdaderamente transformadora.
                    Estudiantes y docentes se han sumergido en un entorno
                    educativo enriquecido por la tecnología, donde el
                    aprendizaje se vuelve más dinámico y accesible.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between p-10">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-primaryColor p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={ue2}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-lightColor tracking-wide mb-2">
                    Unidad Educativa
                  </p>
                  <h3 className="text-2xl font-bold">
                    Luis Ulpiano De La Torre
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Centro de La Paz
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-primaryColor rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div className="text-center">
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Luis Ulpiano De La Torre
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via oral - 20 de abril del 2024
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    La UE Luis Ulpiano De La Torre está liderando el camino
                    hacia la educación del futuro con su innovadora Agenda
                    Digital. ¡Es inspirador ver cómo estamos preparando a
                    nuestra comunidad escolar para los desafíos del siglo XXI!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ue3 */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between p-10">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-primaryColor p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={ue3}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-lightColor tracking-wide mb-2">
                    Unidad Educativa
                  </p>
                  <h3 className="text-2xl font-bold">San Jose II</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Centro de La Paz
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-primaryColor rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div className="text-center">
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Unidad Educativa San Jose II
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via oral - 10 de abril del 2024
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    La UE Luis Ulpiano De La Torre está liderando el camino
                    hacia la educación del futuro con su innovadora Agenda
                    Digital. ¡Es inspirador ver cómo estamos preparando a
                    nuestra comunidad escolar para los desafíos del siglo XXI!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
