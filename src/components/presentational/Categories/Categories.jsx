

const Categories = ({categories}) => {
   
    return (
        <div className="movie-genre">
            <ul>
                {
                    categories.map((category, index) => {
                        return <li key={index}>{category}</li>
                    })
                }
            </ul>
    </div>
    );
}

export default Categories;