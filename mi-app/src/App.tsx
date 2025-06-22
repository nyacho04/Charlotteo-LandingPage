import { useRef, useEffect } from 'react'
import './App.css'

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25;
    }
  }, []);

  return (
    <div className="App">
      <header className="parallax-section">
        <video ref={videoRef} autoPlay loop muted className="parallax-video">
          <source src="/parallax-video5.mp4.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <div className="title-container">
          <h1>VMware Assistance</h1>
          <p>Diagnóstico inteligente de infraestructura virtual</p>
        </div>
      </header>

      <main className="content-section">
        <section id="about" className="about-section">
          <h2>Acerca del Proyecto</h2>
          <div className="about-content">
            <p>
              VMware Assistance es un chatbot inteligente diseñado para ayudar a los administradores de sistemas y profesionales de TI a diagnosticar y resolver problemas en su infraestructura de virtualización VMware. Utilizando procesamiento de lenguaje natural y una base de conocimientos especializada, nuestro asistente ofrece respuestas rápidas y precisas a una amplia gama of de consultas, desde la configuración y gestión de máquinas virtuales hasta la solución de errores complejos de red y almacenamiento. Nuestro objetivo es simplificar la administración de VMware, reducir el tiempo de inactividad y optimizar el rendimiento de su entorno virtual.
            </p>
          </div>
        </section>

        <section id="authors" className="authors-section">
          <h2>Autores</h2>
          <div className="authors-container">
            <div className="author-card">
              <h3>Ignacio Devita</h3>
            </div>
            <div className="author-card">
              <h3>Bryan Aleman</h3>
            </div>
            <div className="author-card">
              <h3>Marcos Pessano</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
