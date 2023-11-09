import { Navigate } from "react-router-dom";

function ProtectedRouteAdmin({currentUser,children}){
    if(currentUser != "admin"){
        return <Navigate to = "/" replace/>
    
    }
    return children
    
}
export default ProtectedRouteAdmin;