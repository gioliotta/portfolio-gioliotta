import "../styles/projects.css";
import { motion } from "framer-motion";
import BackArrow from "../components/backArrow/BackArrow";
import Background from "../components/background/Background";
import ArticleProject from "../components/projects/ArticleProject";
import ProjectDescription from "../components/projects/ProjectDescription";
// import smartArtGenerator from "../assets/img/smartArtGenerator.png";
import taxiBarber from "../assets/img/taxiBarber.png";
import rickAndMorty from "../assets/img/rick-morty.png";
import passwordGenerator from "../assets/img/password-generator.png";
import portafolio from "../assets/img/portafolio.png";
import MoreProjects from "../components/projects/MoreProjects";

function Projects() {
  const DATA_PROJECTS = {
    projectOne: {
      id: 1,
      name: "taxiBarber",
      image: taxiBarber,
      visitPage: "https://taxi-barber.netlify.app/",
      visitGitHub: "https://github.com/gioliotta/TaxiBarber",
      description: {
        description:
          "Implementé la actualización de inputs utilizando estados y guardé la información en  el localStorage.",
        itemOne: "Gestión el precio de un corte de pelo.",
        itemTwo: "Panel de configuración para modificar los parámetros.",
        itemThree: "Opción para cambiar contraseña.",
      },
    },

    projectTwo: {
      id: 2,
      name: "rick & morty",
      image: rickAndMorty,
      visitPage: "https://browser-rick-and-morty.netlify.app/",
      visitGitHub: "https://github.com/gioliotta/browser-rickAndMorty",
      description: {
        description:
          "Trabajé con una API externa y mejoré mi comprensión de la estructura y el flujo de datos.",
        itemOne: "Input para filtrar personajes.",
        itemTwo: "Carta dinámica para cada personaje.",
        itemThree: "Información sobre episodios, ubicaciones y otros detalles.",
      },
    },

    projectThree: {
      id: 3,
      name: "generador de contraseñas",
      image: passwordGenerator,
      visitPage: "https://passwords-generator-gioliotta.netlify.app/",
      visitGitHub: "https://github.com/gioliotta/generator-passwords",
      description: {
        description:
          "Aprendí a manipular y generar cadenas de caracteres de forma aleatoria.",
        itemOne: "Longitud personalizable.",
        itemTwo: "Capacidad de agregar caracteres especiales.",
        itemThree: "Copiar la contraseña generada y usarla en cualquier lugar.",
      },
    },

    projectFour: {
      id: 4,
      name: "portafolio",
      image: portafolio,
      visitPage: "https://portfolio-gioliotta.netlify.app/",
      visitGitHub: "https://github.com/gioliotta/portfolio-gioliotta",
      description: {
        description:
          "Incluye información relevante sobre mí, selección de proyectos destacados y datos de contacto.",
        itemOne: "Realizado en un 80% con CSS.",
        itemTwo: "Uso de Framer Motion para animaciones atractivas.",
        itemThree:
          "Uso de librerías como router-dom, device-detect, react-icons.",
      },
    },
  };

  const { projectOne, projectTwo, projectThree, projectFour } = DATA_PROJECTS;

  const MOTION_STYLES = {
    divStyles: {
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "center",
      aligItems: "center",
    },

    divOne: {
      initial: {
        x: "-600px",
        opacity: 0,
      },
      transition: {
        delay: 0,
        duration: 2,
      },
      animate: {
        opacity: 1,
        x: "0px",
      },
    },

    divTwo: {
      initial: {
        x: "600px",
        opacity: 0,
      },
      transition: {
        delay: 0.5,
        duration: 2,
      },
      animate: {
        opacity: 1,
        x: "0px",
      },
    },

    divThree: {
      initial: {
        x: "-600px",
        opacity: 0,
      },
      transition: {
        delay: 1,
        duration: 2,
      },
      animate: {
        opacity: 1,
        x: "0px",
      },
    },

    divFour: {
      initial: {
        x: "600px",
        opacity: 0,
      },
      transition: {
        delay: 1.5,
        duration: 2,
      },
      animate: {
        opacity: 1,
        x: "0px",
      },
    },
  };

  const { divStyles, divOne, divTwo, divThree, divFour } = MOTION_STYLES;

  const PROJECTS = [
    <motion.div
      key={projectOne.id}
      initial={divOne.initial}
      transition={divOne.transition}
      animate={divOne.animate}
      style={divStyles}
    >
      <ArticleProject
        name={projectOne.name}
        image={projectOne.image}
        visitPage={projectOne.visitPage}
        visitGitHub={projectOne.visitGitHub}
        description={
          <ProjectDescription
            description={projectOne.description.description}
            itemOne={projectOne.description.itemOne}
            itemTwo={projectOne.description.itemTwo}
            itemThree={projectOne.description.itemThree}
          />
        }
      />
    </motion.div>,

    <motion.div
      key={projectTwo.id}
      initial={divTwo.initial}
      transition={divTwo.transition}
      animate={divTwo.animate}
      style={divStyles}
    >
      <ArticleProject
        name={projectTwo.name}
        image={projectTwo.image}
        visitPage={projectTwo.visitPage}
        visitGitHub={projectTwo.visitGitHub}
        description={
          <ProjectDescription
            description={projectTwo.description.description}
            itemOne={projectTwo.description.itemOne}
            itemTwo={projectTwo.description.itemTwo}
            itemThree={projectTwo.description.itemThree}
          />
        }
      />
    </motion.div>,

    <motion.div
      key={projectThree.id}
      initial={divThree.initial}
      transition={divThree.transition}
      animate={divThree.animate}
      style={divStyles}
    >
      <ArticleProject
        name={projectThree.name}
        image={projectThree.image}
        visitPage={projectThree.visitPage}
        visitGitHub={projectThree.visitGitHub}
        description={
          <ProjectDescription
            description={projectThree.description.description}
            itemOne={projectThree.description.itemOne}
            itemTwo={projectThree.description.itemTwo}
            itemThree={projectThree.description.itemThree}
          />
        }
      />
    </motion.div>,

    <motion.div
      key={projectFour.id}
      initial={divFour.initial}
      transition={divFour.transition}
      animate={divFour.animate}
      style={divStyles}
    >
      <ArticleProject
        name={projectFour.name}
        image={projectFour.image}
        visitPage={projectFour.visitPage}
        visitGitHub={projectFour.visitGitHub}
        description={
          <ProjectDescription
            description={projectFour.description.description}
            itemOne={projectFour.description.itemOne}
            itemTwo={projectFour.description.itemTwo}
            itemThree={projectFour.description.itemThree}
          />
        }
      />
    </motion.div>,
  ];

  return (
    <>
      <BackArrow />

      <section className="project" id="project">
        <Background />

        {PROJECTS}

        <MoreProjects />
      </section>
    </>
  );
}

export default Projects;
