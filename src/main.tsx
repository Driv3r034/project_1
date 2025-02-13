import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { Header } from './components/sections/header/header.tsx'
import { Footer } from './components/sections/footer/footer.tsx'
import { FirstPage } from './pages/first-page/first-page.tsx'
import { Player } from './pages/player/player.tsx'
import { ContactsPage } from './pages/contacts/contacts.tsx'
import { GlobalStyle } from '../public/styled-global.ts';
import * as Styled from './App.styles';
import './index.css'


createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <Styled.WrapperApp>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/first" element={<FirstPage />} />
          <Route path="/player" element={<Player />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <Footer />
      </Router>
    </Styled.WrapperApp>
  </>
)
