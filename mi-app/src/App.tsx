import { useRef, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import BlurredSection from './components/BlurredSection/BlurredSection'

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
          <source src="/parallax-video5.mp4.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <div className="title-container">
          <h1>VMware Assistance</h1>
          <p>Diagnóstico inteligente de infraestructura virtual</p>
        </div>
      </header>

      <main className="content-section">
        <BlurredSection />
      </main>
    </div>
  )
}

export default App
