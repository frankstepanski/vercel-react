import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./Logout.module.css";

const Logout = ({username, setToken}) => {
    
    let navigate = useNavigate();   

    useEffect(() => {
        if (username){
            setToken(false);
            const timer = setTimeout(() => {
               return navigate("/");
            }, 2000);
            return () => clearTimeout(timer);
        } else {
            return navigate("/");
        }
     },[]);

    return (
        <div className={styles.logout}>
           <h2>{username} is now logged out</h2>
        </div>
    );
}

export default Logout;