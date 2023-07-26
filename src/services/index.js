/*

   Create-react-app automatically reads keys that begin with REACT_APP and 
   defines them on process.env. Create-react-app embeds the keys at build time

   Note: Adding your secret key to the .env file doesn't prevent your key from
         being public in production. Environment variables are embedded into the build, 
         meaning anyone can view them by inspecting your app's files. 
         Also, make sure you add your key to the .gitignore file.
         To be secure, should be server-side but for this project, it's fine.

   https://create-react-app.dev/docs/adding-custom-environment-variables/
*/

const API_KEY = process.env.REACT_APP_API_KEY; // from .env file

async function getAllMovies (URL) {

    try {
       const response = await fetch(URL);
       const data = await response.json();
       return data;

    }  catch (error) {
       console.log(error);
    }
}

async function getNowPlaying () {

  try {
     const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
     const data = await response.json();
     return data;

  }  catch (error) {
     console.log(error);
  }
}
 
async function postReview (data) {

    try {
       const response = await fetch(this.url, {
       method: 'POST',
       headers: {
          'Content-Type': 'application/json'
       },
        body: JSON.stringify(data)
      });
      const dataResponse = await response.json();
      return dataResponse;

    } catch (error) {
      console.log(error);
      return null;
    }
}

export { getAllMovies, getNowPlaying, postReview };