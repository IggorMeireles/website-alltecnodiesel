import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import SobreNos from './Pages/SobreNos/SobreNos';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre-nos",
    element: <SobreNos />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
