import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Administrador from './pages/Admin';
import Register from './pages/Register';
import Foros from './pages/Foros';
import NuevoForo from './pages/NuevoForo'; // Asegúrate de que la ruta sea correcta

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/foro",
    element: <Foros />,
  },
  {
    path: "/foro/nuevo",
    element: <NuevoForo />, 
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Administrador />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='dark text-foreground bg-black'>
    <RouterProvider router={router} />
    </main>
  </React.StrictMode>,
)
