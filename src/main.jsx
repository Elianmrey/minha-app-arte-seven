import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import Details from './pages/Details/Details.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import FavList from './pages/FavavoriteList/FavoriteList.jsx';
import './MainLayout.css'

const routes = createBrowserRouter([
  { element: <Home />, path: '/' },
  { element: <Details cardType='movies' whereToGo='/'/>, path: '/movies/details/:id' },
  { element: <Details cardType='tvShows' whereToGo='/' />, path: '/tv/details/:id' },
  { element: <FavList />, path: '/favlist' },
  { element: <NotFound />, path: '/*' }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={routes} />

  </StrictMode>,
)
