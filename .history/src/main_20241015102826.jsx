import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import Details from './pages/Details/Details.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import 'Main'

const routes = createBrowserRouter([
  { element: <Home />, path: '/' },
  { element: <Details cardType='movies' />, path: '/movies/details/:id' },
  { element: <Details cardType='tvShows' />, path: '/tv/details/:id' },
  {element:<NotFound/>,path:'/*'}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={routes} />

  </StrictMode>,
)
