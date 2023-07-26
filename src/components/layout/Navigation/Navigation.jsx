import {NavLink} from 'react-router-dom';
import styles from "./Navigation.module.css";

const Navigation = ({...props}) => {

    const links = props.links.map(item => {

        let link = {};

        // note: All links are set to show, so hide either Login or Logout 
        //       based upon presence of token (user logged-in)
        if (item.name === "login" && props.token) {
             link = {...item, hidden: true}
        } else if ((item.name === "logout" || item.name === "dashboard") && !props.token) {
             link = {...item, hidden: true}
        } else {
             link = {...item, hidden: false}
        }
        
        return link;
       
    });

    return (
            <nav className={styles.nav}>
                <ul>
                {
                    links.map((link, index) => {
                        if (!link.hidden) {
                            return (
                                <li 
                                        key={index}>
                                        <NavLink to={link.url}>{link.text}</NavLink>
                                </li>
                            )
                        }
                 })
                }
                </ul>
               
            </nav>
    )
}

export default Navigation;