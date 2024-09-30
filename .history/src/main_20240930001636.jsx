import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const routes = createBrowserRouter([
  { element: <Home />, path: '/' },
  { element: <Home />, path: '/' },
  { element: <Home />, path: '/' },
  { element: <Home />, path: '/' },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={routes} />

  </StrictMode>,
)
