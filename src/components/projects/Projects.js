import React, { useEffect, useRef, useState } from "react";
import Title from "../layouts/Title";
import { logoAgenda, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
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
      id="projects"
      ref={sectionRef}
      className={`w-full py-20 border-b-[1px] border-b-black ${
        isVisible ? "animate-flip-up animate-duration-[2000ms]" : "opacity-0"
      }`}
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISITA NUESTROS PRODUCTOS" des="Nuestros productos" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="AGENDA DIGITAL EN LA UNIDAD EDUCATIVA 'CANADÁ'"
          des="
          La Agenda Digital en la Unidad Educativa 'Canadá' impulsa la integración de tecnología en el aula, fomentando la innovación y el aprendizaje digital entre los estudiantes."
          src={logoAgenda}
        />
        <ProjectsCard
          title="AGENDA DIGITAL EN LA UNIDAD EDUCATIVA 'GUALBERTO VILLARRUEL'"
          des="La Agenda Digital en la Unidad Educativa 'Gualberto Villarruel' promueve el uso estratégico de herramientas tecnológicas para enriquecer la experiencia educativa."
          src={projectTwo}
        />
        <ProjectsCard
          title="AGENDA DIGITAL EN LA UNIDAD EDUCATIVA 'U.E. SANTO TOMAS'"
          des="La Agenda Digital en la Unidad Educativa 'U.E. Santo Tomás' impulsa la integración de tecnología en el currículo escolar,."
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
