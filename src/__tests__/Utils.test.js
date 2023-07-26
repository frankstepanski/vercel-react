import { parseNowPlaying } from '../utils';

/*
    Jest Testing (TDD)
        - import whichever functions you want to test
        - you can use describe() and it() to group tests together (describe is optional)
        - you can use expect() to test the result of the function   
        - you can use toEqual() to test the result of the function
    
          https://jestjs.io/docs/api
*/

describe('Testing parseNowPlaying', () => {

    // it() is an alias for test() - can be used interchangeably
    it('parseNowPlaying - is function defined?', () => {
        expect(parseNowPlaying).toBeDefined(); 
    });

    // it() is an alias for test() - can be used interchangeably
    it('parseNowPlaying - is function returning a value?', () => {

    const data = {
        results: [
            {
                id: 1,
                title: 'test',
                release_date: 'test',
                vote_average: 1,
                poster_path: 'test'
            }
        ]
    };
    expect(parseNowPlaying(data)).toBeDefined();

  });
});