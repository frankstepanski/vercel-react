import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import ProtectedRoute from './components/container/ProtectedRoute/ProtectedRoute';
import Home from './components/views/Home/Home';
import Movies from './components/views/Movies/Movies';
import NowPlaying from './components/views/NowPlaying/NowPlaying';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Logout from './components/views/Logout/Logout';
import NotFound from './components/views/NotFound/NotFound';
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import {navLinks} from "./assets/data/navLinks.js";
import {getAllMovies} from "./services/";

import './assets/styles/reset.css';
import './assets/styles/global.css';

const URL = "https://626adc4f6a86cd64adb45a12.mockapi.io/movies"

function App() {
  const [color, setColor] = useState("#FFF");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(false);
  const [movies, setMovies] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 5;
  const indexOfLastRecord = currentPage * moviesPerPage;
  const indexOfFirstRecord = indexOfLastRecord - moviesPerPage;
 
  const currentMovies = visibleMovies.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {

    setIsLoading(true);
    
    getAllMovies(URL)
        .then((data) => {
            setMovies(data);
            setFeaturedMovies([...data].filter(movie => movie.featured === true));
            setVisibleMovies([...data].filter(movie => movie.hidden === false));
            setIsLoading(false);
        }).catch(err => {
          console.log(err);
        })
  }, []);

  const loginUser = (username, password) => {
    setUsername(username);
    setPassword(password);
    setToken(true);
  }

  const addReview = (id, rating, comment) => {
   
    const _movies = [...movies];
    const index = _movies.findIndex(movie => movie.id === id);  
    _movies[index].reviews.push({
        user: `user${Math.floor(Math.random() * 99) + 1}`,
        stars: parseInt(rating),
        comment: comment,
        date: new Date().toISOString(),
    });
   setMovies(_movies);
  }

  const handleFilters = (categories) => {

    // reset movies to show all (hidden: false)
    const _movies = [...movies].map(movie => { movie.hidden = false; return movie; });
    const _categories = [];

    // reset current page to 1 (pagination)
    setCurrentPage(1);

    // convert categories to an array
    Object.entries(categories).forEach(([key, value]) => {

        if (value) {
            _categories.push(key);
        }
    });

    // If no filtered categories, send back all "reset" movies with no changes
    if (!_categories.length) { 
      setMovies(_movies); 
      setVisibleMovies(_movies.filter(movie => movie.hidden === false));
      return;
    }

    // hide movies that don't match the any of the selected categories (hidden = true); 
    _movies.forEach((movie) => {

      if (!movie.categories.some(category => _categories.includes(category))) {
          movie.hidden = true;
      } 
    });

    // send back the filtered movies (i.e. movies that match at least one of the selected categories)
    setMovies(_movies);
    setVisibleMovies(_movies.filter(movie => movie.hidden === false));
  }

   return (
    <div className="container">
      <Header links = {navLinks} token = {token} />
      <main style={{ backgroundColor: color }}>
        <Routes>
            <Route index element={<Home movies={featuredMovies} isLoading={isLoading} />} />
            <Route 
                  path='movies' 
                  element={
                             <Movies 
                                     movies={currentMovies}
                                     handleFilters = {handleFilters}
                                     addReview={addReview}
                                     isLoading={isLoading}
                                     moviesPerPage={moviesPerPage}
                                     currentPage={currentPage}
                                     paginate={paginate}
                                     totalMovies={visibleMovies.length}
                             />            
                           }
            />
            <Route path='now-playing' element={<NowPlaying />} />   
            <Route path='login' element={<Login loginUser = {loginUser} />} />
            <Route path='logout' element={<Logout username = {username} setToken = {setToken} />} />
            <Route 
                  path='dashboard' 
                  element={
                     <ProtectedRoute token={token}>
                       <Dashboard username = {username} />
                     </ProtectedRoute>
                  }
            />
            <Route path='*' element={<NotFound setColor={setColor} />} />
        </Routes>
       </main>                   
      <Footer />
    </div>        
  );
}

export default App;