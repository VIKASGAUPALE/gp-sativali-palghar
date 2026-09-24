import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Sarpanch from './pages/Sarpanch'
import Upsarpanch from './pages/Upsarpanch'
import GramsevakPage from './pages/GramsevakPage'
import GPTeam from './pages/GPTeam'
import SabhechiMahiti from './pages/SabhechiMahiti'
import JanmDakhala from './pages/JanmDakhala'
import MrutDakhala from './pages/MrutDakhala'
import VivahDakhala from './pages/VivahDakhala'
import VikasKame from './pages/VikasKame'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/sarpanch" element={<Sarpanch />} />
          <Route path="/upsarpanch" element={<Upsarpanch />} />
          <Route path="/sachiv" element={<GramsevakPage />} />
          <Route path="/team" element={<GPTeam />} />
          <Route path="/meeting" element={<SabhechiMahiti />} />
          <Route path="/janm-dakhala" element={<JanmDakhala />} />
          <Route path="/mrut-dakhala" element={<MrutDakhala />} />
          <Route path="/vivah-dakhala" element={<VivahDakhala />} />
          <Route path="/devlopment" element={<VikasKame />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
