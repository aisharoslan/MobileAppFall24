import { Routes, Route} from 'react-router-dom'

import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import ModalPage from './pages/ModalPage'
import ToastPage from './pages/ToastPage'
import NavBar from './components/NavBar'

// IMPORTANT: path here does not take a / BEFORE the route name unless home page
export default function App() {
  return (
    // also works to go back
    // could hv header footer too that never change
    // css grid
    // 6 equal-sized columns with a gap of 4 and margin top of 4
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      {/* NavBar x change - always lives there */}
      <NavBar />
      {/* span 5 out of the 6 columns */}
      <div className="col-span-5 relative">
        {/* // a list of routes, and what to render when we hit different routes
        // home page is a slash - element is what u wanna render when u hit the route */}
        <Routes>
          <Route path="/" element={<ButtonPage />} />
          <Route path="accordion" element={<AccordionPage />} />
          <Route path="modal" element={<ModalPage />} />
          <Route path="toast" element={<ToastPage />} />
        </Routes>
      </div>
    </div>
  )
}
