import { Navigate } from "react-router-dom";

function ProtectedRoute({isLoggedIn,children}){
    if(!isLoggedIn || isLoggedIn === "false"){
        return <Navigate to = "/" replace/>
    
    }
    return children
    
}
export default ProtectedRoute;