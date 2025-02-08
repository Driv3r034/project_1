import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { Header } from './components/sections/header/header.tsx'
import { FirstPage } from './pages/first-page/first-page.tsx'
import './index.css'


createRoot(document.getElementById('root')!).render(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/first" element={<FirstPage />} />
      </Routes>
    </Router>
)
