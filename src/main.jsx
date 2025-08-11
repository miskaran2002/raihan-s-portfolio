import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {RouterProvider} from "react-router";
import { router } from './router/router';
import ParticlesComponent from './component/ParticlesComponent';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParticlesComponent />
    <RouterProvider router={router} />
  </StrictMode>,
)
