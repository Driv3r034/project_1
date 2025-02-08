import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { FirstPage } from './pages/first-page/first-page.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/first" element={<FirstPage />} />
      </Routes>
    </Router>
)
