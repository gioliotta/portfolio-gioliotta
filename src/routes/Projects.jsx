import "../styles/projects.css";
import { AiOutlineArrowUp as ArrowUp } from "react-icons/ai";
import BackArrow from "../components/backArrow/BackArrow";
import Background from "../components/background/Background";
import ArticleProject from "../components/projects/ArticleProject";
import ProjectDescription from "../components/projects/ProjectDescription";
import smartArtGenerator from "../assets/img/smartArtGenerator.png";
import taxiBarber from "../assets/img/taxiBarber.png";
import rickAndMorty from "../assets/img/rick-morty.png";
import passwordGenerator from "../assets/img/password-generator.png";
import portafolio from "../assets/img/portafolio.png";

function Projects() {
  return (
    <>
      <BackArrow />

      <section className="project" id="project">
        <Background />

        {/*<ArticleProject
          projectName="smartArt generator"
          projectImage={smartArtGenerator}
          projectVisit="https://smartart-generator.netlify.app/"
          projectGithub="https://github.com/gioliotta/smartart-generator"
          projectDescription={
            <ProjectDescription
              description="Integré la API de OpenAI, y la utilicé para generar imágenes por medio de un prompt del usuario."
              itemOne="Generar imágenes personalizadas."
              itemTwo="Seleccionar el tamaño de la imagen."
              itemThree="Botón para descargar la imagen generada."
            />
          }
        />*/}

        <ArticleProject
          projectName="taxiBarber"
          projectImage={taxiBarber}
          projectVisit="https://taxi-barber.netlify.app/"
          projectGithub="https://github.com/gioliotta/TaxiBarber"
          projectDescription={
            <ProjectDescription
              description="Implementé la actualización de inputs utilizando estados y guardé la información en  el localStorage."
              itemOne="Gestión el precio de un corte de pelo."
              itemTwo="Panel de configuración para modificar los parámetros."
              itemThree="Opción para cambiar contraseña."
            />
          }
        />

        <ArticleProject
          projectName="rick & morty"
          projectImage={rickAndMorty}
          projectVisit="https://browser-rick-and-morty.netlify.app/"
          projectGithub="https://github.com/gioliotta/browser-rickAndMorty"
          projectDescription={
            <ProjectDescription
              description="Trabajé con una API externa y mejoré mi comprensión de la estructura y el flujo de datos."
              itemOne="Input para filtrar personajes."
              itemTwo="Carta dinámica para cada personaje."
              itemThree="Información sobre episodios, ubicaciones y otros detalles."
            />
          }
        />

        <ArticleProject
          projectName="generador de contraseñas"
          projectImage={passwordGenerator}
          projectVisit="https://passwords-generator-gioliotta.netlify.app/"
          projectGithub="https://github.com/gioliotta/generator-passwords"
          projectDescription={
            <ProjectDescription
              description="Aprendí a manipular y generar cadenas de caracteres de forma aleatoria."
              itemOne="Longitud personalizable."
              itemTwo="Capacidad de agregar caracteres especiales."
              itemThree="Copiar la contraseña generada y usarla en cualquier lugar."
            />
          }
        />

        <ArticleProject
          projectName="portafolio"
          projectImage={portafolio}
          projectVisit="https://portfolio-gioliotta.netlify.app/"
          projectGithub="https://github.com/gioliotta/portfolio-gioliotta"
          projectDescription={
            <ProjectDescription
              description="Incluye información relevante sobre mí, selección de proyectos destacados y datos de contacto."
              itemOne="Realizado en un 80% con CSS."
              itemTwo="Animaciones y efectos atractivos."
              itemThree="Uso de librerías como router-dom, device-detect, react-icons."
            />
          }
        />

        <div className="project__container-arrowup-btn">
          <a href="#project">
            <ArrowUp className="project__arrowup" />
          </a>

          <button className="btn-more-project">
            <a
              href="https://github.com/gioliotta?tab=repositories"
              className="btn-more-project__link"
              target="_blank"
            >
              ¡Más proyectos!
            </a>
          </button>
        </div>
      </section>
    </>
  );
}

export default Projects;
