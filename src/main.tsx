import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Jokenpo from './Jokenpo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Jokenpo />
  </StrictMode>
)
