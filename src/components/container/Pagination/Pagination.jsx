import styles from "./Pagination.module.css";
import {NavLink} from 'react-router-dom';

const Pagination = (
    {   
        moviesPerPage,
        totalMovies,
        paginate
     }
 ) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
        <>
            <div className={styles.pagination}>
                <h4 className={styles.pageNumber}>Pages:</h4>
                <ul className="page_numbers">
                    {
                        pageNumbers.map((number) => (
                            <li key={number} className="page_item">
                                <NavLink 
                                          to='/movies'
                                          onClick={() => paginate(number)}
                                          >
                                          {number}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Pagination;