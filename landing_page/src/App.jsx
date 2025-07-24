import { useRef, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import BlurredSection from './components/BlurredSection/BlurredSection'

function App() {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (videoRef.current && !isMobile) {
      videoRef.current.playbackRate = 0.45;
    }
  }, [isMobile]);

  return (
    <div className="App">
      <Header />
      <header className="parallax-section">
        <video ref={videoRef} autoPlay loop muted className="parallax-video">
          <source src={`${import.meta.env.BASE_URL}parallax-video5.mp4.mp4`} type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <div className="title-container">
          <img src={import.meta.env.BASE_URL + "charlotte%20icono%20blanco.png"} alt="Charlotte Icono Blanco" style={{ width: '170px', marginBottom: '0.2rem' }} className="icono-animado" />
          <h1>Charlotteo</h1>
          <p>Diagnóstico inteligente de infraestructura VMware</p>
        </div>
      </header>

      <main className="content-section">
        <BlurredSection />
      </main>
      <footer style={{
        width: '100%',
        textAlign: 'center',
        color: 'rgba(170,170,170,0.55)',
        fontSize: '1.1rem',
        marginTop: '2.5rem',
        marginBottom: '0.7rem',
        letterSpacing: '1px',
        fontFamily: 'Montserrat, sans-serif'
      }}>
        Charlotteo - 2025
      </footer>
    </div>
  )
}

export default App 