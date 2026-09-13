import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import Jokenpo from './Jokenpo.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <Theme appearance="dark" grayColor="slate" >
      <Jokenpo />
    </Theme>
  </StrictMode>
  
)
