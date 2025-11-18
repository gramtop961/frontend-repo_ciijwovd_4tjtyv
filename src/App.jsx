import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import SEO from './components/SEO'
import { HomePage, ServicesPage, AboutPage, GalleryPage, ContactPage } from './components/Pages'

function App(){
  return (
    <Layout>
      <SEO/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </Layout>
  )
}

export default App
