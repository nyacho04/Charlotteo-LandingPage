import React from 'react';
import './BlurredSection.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPython, FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';
import { SiFastapi, SiOpenai, SiVmware } from 'react-icons/si';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const authors = [
  {
    name: 'Ignacio Devita',
    img: `${import.meta.env.BASE_URL}ignacio_devita.jpg`,
    linkedin: 'https://www.linkedin.com/in/idevita/',
    github: 'https://github.com/nyacho04',
    email: 'ignacio.devita.4@gmail.com',
    role: 'Frontend Developer',
  },
  {
    name: 'Bryan Alemán',
    img: `${import.meta.env.BASE_URL}bryan_aleman.jpg`,
    linkedin: 'https://www.linkedin.com/in/bryanaleman/',
    github: 'https://github.com/balemansteve',
    email: 'bryan.aleman@gmail.com',
    role: 'Backend Developer',
  },
  {
    name: 'Marcos Pessano',
    img: `${import.meta.env.BASE_URL}marcos_pessano.jpg`,
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
          Este proyecto está orientado al diagnóstico inteligente de infraestructura virtual sobre VMware vSphere mediante el uso de inteligencia artificial generativa de OpenAI, a través de un chat como interfaz de usuario. El propósito es agilizar el análisis de métricas complejas, generar reportes técnicos, recomendaciones contextualizadas a partir de consultas escritas en lenguaje natural, facilitando que el equipo de Cloud pueda tomar decisiones informadas, reducir tiempos de troubleshooting y mejorar la eficiencia operativa de forma proactiva.
        </p>
        <ImageCarousel />
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
            <div className="tech-icon"><FaPython /><p>Python</p></div>
            <div className="tech-icon"><SiFastapi /><p>FastAPI</p></div>
            <div className="tech-icon"><FaReact /><p>React</p></div>
            <div className="tech-icon"><FaHtml5 /><p>HTML</p></div>
            <div className="tech-icon"><FaCss3Alt /><p>CSS</p></div>
            <div className="tech-icon"><FaJsSquare /><p>JavaScript</p></div>
            <div className="tech-icon"><SiOpenai /><p>OpenAI</p></div>
            <div className="tech-icon"><SiVmware /><p>Aria Operations</p></div>
        </div>
      </section>
    </div>
  );
};

export default BlurredSection;