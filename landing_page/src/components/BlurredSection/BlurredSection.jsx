import React from 'react';
import './BlurredSection.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPython, FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';
import { SiFastapi, SiOpenai, SiVmware } from 'react-icons/si';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const authors = [
  {
    name: 'Bryan Alemán',
    img: `${import.meta.env.BASE_URL}bryan_aleman.webp`,
    linkedin: 'https://www.linkedin.com/in/bryanaleman/',
    github: 'https://github.com/balemansteve',
    email: 'bryan.aleman@gmail.com',
    role: 'Backend Developer',
  },
  {
    name: 'Ignacio Devita',
    img: `${import.meta.env.BASE_URL}ignacio_devita.webp`,
    linkedin: 'https://www.linkedin.com/in/idevita/',
    github: 'https://github.com/nyacho04',
    email: 'ignacio.devita.4@gmail.com',
    role: 'Frontend Developer',
  },
  {
    name: 'Marcos Pessano',
    img: `${import.meta.env.BASE_URL}marcos_pessano.webp`,
    linkedin: 'https://www.linkedin.com/in/marcos-pessano/',
    github: 'https://github.com/kimikoultramega',
    email: 'marcos.pessano1@gmail.com',
    role: 'Project Manager',
  },
];

const BlurredSection = () => {

  return (
    <div className="blurred-section">
      <section id="proyecto" className="content-block">
        <h2>Acerca del Proyecto</h2>
        <p>
          Charlotteo es un proyecto orientado al diagnóstico inteligente de infraestructura virtual sobre VMware mediante el uso de inteligencia artificial generativa de OpenAI, a través de un chat como interfaz de usuario. El propósito es agilizar el análisis de métricas complejas, generar reportes técnicos, recomendaciones contextualizadas a partir de consultas escritas en lenguaje natural, facilitando que el equipo de Cloud pueda tomar decisiones informadas, reducir tiempos de troubleshooting y mejorar la eficiencia operativa de forma proactiva.
        </p>
        <ImageCarousel />
      </section>

      <section id="presentacion-vivo" className="content-block">
        <h2>Presentación en vivo en Zonamerica</h2>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
          <iframe
            width="900"
            height="506"
            src="https://www.youtube.com/embed/T2FuLQc5r_o?start=1335"
            title="Presentación en vivo en Zonamerica"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{borderRadius: '12px', maxWidth: '100%'}}
          ></iframe>
        </div>
      </section>

      <section id="equipo" className="content-block">
        <h2>Equipo</h2>
        <div className="authors-container">
          {authors.map((author, idx) => (
            <div className="author-card" key={author.name}>
              <div className="author-photo">
                <img src={author.img} alt={author.name} style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
              </div>
              <h3>{author.name.split(' ')[0]} <br/> {author.name.split(' ')[1]}</h3>
              <div className="author-socials">
                <a href={author.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href={author.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href={`mailto:${author.email}`} aria-label="Enviar Email"><FaEnvelope /></a>
              </div>
              <div className="author-role">{author.role}</div>
            </div>
          ))}
        </div>
      </section>
      
      <section id="tecnologias" className="content-block">
        <h2>Tecnologías</h2>
        <div className="tech-icons-container">
            <div className="tech-icon" data-tooltip="Python"><FaPython /></div>
            <div className="tech-icon" data-tooltip="FastAPI"><SiFastapi /></div>
            <div className="tech-icon" data-tooltip="React"><FaReact /></div>
            <div className="tech-icon" data-tooltip="HTML"><FaHtml5 /></div>
            <div className="tech-icon" data-tooltip="CSS"><FaCss3Alt /></div>
            <div className="tech-icon" data-tooltip="JavaScript"><FaJsSquare /></div>
            <div className="tech-icon" data-tooltip="OpenAI"><SiOpenai /></div>
            <div className="tech-icon" data-tooltip="VMware"><SiVmware /></div>
        </div>
      </section>
    </div>
  );
};

export default BlurredSection;