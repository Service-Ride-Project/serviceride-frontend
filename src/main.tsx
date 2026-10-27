import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@/styles/global.css"
import Dashboard from "@/layout/dashboard.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Dashboard/>
  </StrictMode>,
)
