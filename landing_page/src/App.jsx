import { useRef, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import BlurredSection from './components/BlurredSection/BlurredSection'

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.45;
    }
  }, []);

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
    </div>
  )
}

export default App 