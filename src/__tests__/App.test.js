import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'; /* add jest-dom's custom assertions */
import {MemoryRouter} from 'react-router-dom'
import App from '../App';
import Home from '../components/views/Home/Home';

    test('<App/> is defined', () => {
        // Since <App /> is using React Router, we need to wrap it in a MemoryRouter
        render(<App />, {wrapper: MemoryRouter})
        expect(App).toBeDefined();
    });

    test('Home route is initially rendered', () => {

        const featuredMovies = [
            {
                id: 1,
                title: 'test',
                release_date: 'test',
                vote_average: 1,
                poster_path: 'test'
            }
        ];

        const isLoading = false;

        render(<Home movies={featuredMovies} isLoading={isLoading} />)
        const elemText = screen.getByText(/Welcome to the Movie Reviewer Database$/i); 
        expect(elemText).toBeInTheDocument();
    });
    



