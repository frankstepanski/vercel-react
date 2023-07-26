import { useNavigate } from "react-router-dom";

// https://www.robinwieruch.de/react-router-private-routes/

const ProtectedRoute = ({ token, children }) => {

    let navigate = useNavigate();

    if (!token) {
       return navigate("/");
    }
  
    return children;
};

export default ProtectedRoute;