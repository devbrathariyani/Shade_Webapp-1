import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import InfoPage from './pages/InfoPage'
import MapPage from './pages/MapPage'
import NotFound from './pages/NotFound'
import { MapProvider } from './context/MapContext'
import AboutPage from './pages/AboutPage'

export function App() {
  
  return (
    <Routes>
      <Route path="/" element={<MapPage />} />
      <Route path="/Map" element={<MapPage />} />
      <Route path="/Info" element={<InfoPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <MapProvider>
        <Header />
        <App />
      </MapProvider>
    </BrowserRouter>
  )
}
