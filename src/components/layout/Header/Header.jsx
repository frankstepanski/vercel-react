import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation.jsx";

const Header = ({...props}) =>{
    
    return (
        <header className={styles.header}>
            <Navigation {...props} />
        </header>
    );
}

export default Header;