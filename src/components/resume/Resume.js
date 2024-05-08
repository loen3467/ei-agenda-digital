import React, { useEffect, useRef, useState } from "react";
import Title from "../layouts/Title";
import { projectOne } from "../../assets/index";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

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
      id="resume"
      ref={sectionRef}
      className={`w-full py-20 border-b-[1px] border-b-black ${
        isVisible ? "animate-flip-up animate-duration-[2000ms]" : "opacity-0"
      }`}
    >
      <div className="flex justify-center items-center text-center">
        <Title title="SOMOS UNA EMPRESA JOVEN" des="Nosotros" />
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between space-y-6 md:space-y-0">
          <div className="md:mr-6">
            <img
              src={projectOne}
              alt="Imagen de la empresa"
              className="w-full md:w-auto"
            />
          </div>
          <div className="max-w-lg">
            <p className="text-xl text-gray-700 font-medium ">
              La empresa Engineers Innovation se fundó en el año 2024, se
              especializa en el desarrollo de sistemas y proyectos de software
              en la ciudad de La Paz. Se centra en crear soluciones innovadoras
              que automatizan y optimizan procesos en diversas áreas,
              proporcionando así un valor agregado significativo a sus clientes.
              Su principal objetivo es aprovechar la tecnología para mejorar la
              eficiencia y la productividad en diferentes sectores mediante el
              uso de herramientas y nuevas tecnologías de desarrollo de
              software.
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Educa
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />} */}
    </section>
  );
};

export default Resume;
