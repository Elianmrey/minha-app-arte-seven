import { Navigate, Outlet, useLocation } from 'react-router-dom';




export default function Protected() {
     
    const location = useLocation();
    
  const userSession = localStorage.getItem('@sessionID')
    
        
    if (location.pathname === '/login') {
        return <Outlet />;
    }
    return userSession ? <Outlet /> : <Navigate to='/login' />;

}

