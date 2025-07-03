import React from 'react';
import './BlurredSection.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPython, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiFastapi, SiOpenai, SiVmware } from 'react-icons/si';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const BlurredSection = () => {
  return (
    <div className="blurred-section">
      <section id="proyecto" className="content-block">
        <h2>Acerca del Proyecto</h2>
        <p>
          Este proyecto está orientado al diagnóstico inteligente de infraestructura virtual sobre VMware vSphere mediante el uso de inteligencia artificial generativa de OpenAI, a través de un chat como interfaz de usuario. El propósito es agilizar el análisis de métricas complejas, generar reportes técnicos, recomendaciones contextualizadas a partir de consultas escritas en lenguaje natural, facilitando que el equipo de Cloud pueda tomar decisiones informadas, reducir tiempos de troubleshooting y mejorar la eficiencia operativa de forma proactiva. Este documento contiene el diseño de diagramas UML y su explicación, de manera que se logre comprender el funcionamiento de los distintos componentes de la aplicación para su implementación y mantenimiento.
        </p>
        <ImageCarousel />
      </section>

      <section id="equipo" className="content-block">
        <h2>Equipo</h2>
        <div className="authors-container">
          <div className="author-card">
            <div className="author-photo"></div>
            <h3>Ignacio <br/> Devita</h3>
            <div className="author-socials">
              <a href="https://www.linkedin.com/in/idevita/" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/nyacho04" aria-label="GitHub"><FaGithub /></a>
              <a href="mailto:ignacio.devita.4@gmail.com" aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>
          <div className="author-card">
            <div className="author-photo"></div>
            <h3>Bryan <br/> Alemán</h3>
            <div className="author-socials">
              <a href="https://www.linkedin.com/in/bryanaleman/" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/balemansteve" aria-label="GitHub"><FaGithub /></a>
              <a href="mailto:marcos.pessano1@gmail.com" aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>
          <div className="author-card">
            <div className="author-photo"></div>
            <h3>Marcos <br/> Pessano</h3>
            <div className="author-socials">
              <a href="https://www.linkedin.com/in/marcos-pessano/" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/kimikoultramega" aria-label="GitHub"><FaGithub /></a>
              <a href="mailto:marcos.pessano1@gmail.com" aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </section>
      
      <section id="tecnologias" className="content-block">
        <h2>Tecnologías</h2>
        <div className="tech-icons-container">
            <div className="tech-icon"><FaPython /><p>Python</p></div>
            <div className="tech-icon"><SiFastapi /><p>FastAPI</p></div>
            <div className="tech-icon"><FaReact /><p>React</p></div>
            <div className="tech-icon"><FaHtml5 /><p>HTML5</p></div>
            <div className="tech-icon"><FaCss3Alt /><p>CSS3</p></div>
            <div className="tech-icon"><SiOpenai /><p>OpenAI</p></div>
            <div className="tech-icon"><SiVmware /><p>VMware</p></div>
        </div>
      </section>
    </div>
  );
};

export default BlurredSection; 