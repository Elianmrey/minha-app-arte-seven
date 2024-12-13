import { Navigate, redirect } from "react-router-dom";


function HandleVerificationProtected() {
    const userSession = localStorage.getItem('@sessionID')
    if(!userSession) {
        return <Navigate to="/login" />;
    }   
    else {
        return null;
    }    
}

function IsAuthenticated() {
    const userSession = localStorage.getItem('@sessionID')
    if(userSession) {
        throw redirect('/login');
    }
    else {  
        return null;
    }
}

export {
    HandleVerificationProtected,
    IsAuthenticated
}