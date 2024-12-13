import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from '../pages/Home/Home.jsx';
import Details from '../pages/Details/Details.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';
import FavList from '../pages/FavavoriteList/FavoriteList.jsx';
import AuthenticationScreen from '../pages/Authentication/Authentication.jsx';
import Protected from '../Security/Protected.jsx';
import {HandleVerificationProtected, IsAuthenticated} from '../Security/VerificationProtect.jsx';


const routes = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Protected />}>
      <Route>
    <Route  path="/" element={<Home />}  loader={() => HandleVerificationProtected()}/>,
    <Route  path="/movies/details/:id" element={<Details cardType='movies' whereToGo='/'/>} loader={() => HandleVerificationProtected()} />,
    <Route  path="/tvshows/details/:id" element={<Details cardType='tvShows' whereToGo='/'/>} loader={() => HandleVerificationProtected()} />,
    <Route  path="/favlist" element={<FavList />}  loader={() => HandleVerificationProtected()}/>,
    <Route  path="/*" element={<NotFound />}  loader={() => HandleVerificationProtected()}/>,
    </Route>


    <Route  path="/login" element={<AuthenticationScreen />}  loader={() =>IsAuthenticated()}/>
  
  </Route>
    )
  );

  export default routes;