import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound =() => {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div className={styles.bgImage}>
            <div className={styles.notFound}>
                <h1>Lost your way?</h1>
                <h3>Sorry, we can't find that page. You'll find loads to explore on the home page.</h3>
                <button onClick={handleClick}>Home</button>
            </div>
        </div>
    );
}

export default NotFound;