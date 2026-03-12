import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import SobreNos from './Pages/SobreNos/SobreNos';
import Localizacao from './Pages/Localizacao/Localizacao';
import Contato from './Pages/EntreEmContato/Contato';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre-nos",
    element: <SobreNos />,
  },
  {
    path: "/localizacao",
    element: <Localizacao />,
  },
  {
    path: "/entre-em-contato",
    element: <Contato />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
