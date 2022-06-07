require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

// GET /videogames
const getAllFromAPI = async () => {
  let response;
  let videogamesFromAPI = [];

  for (let i = 2; i <= 6; i++) {
    response = (await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)).data
    videogamesFromAPI.push(response.results.map((ele) => ({
      id: ele.id,
      background_image: ele.background_image,
      name: ele.name,
      genres: ele.genres?.map((g) => g.name),
      rating: ele.rating,
      platforms: ele.platforms?.map(p => p.platform.name)
      }))
    );
    videogamesFromAPI = videogamesFromAPI.flat();
  }
  return videogamesFromAPI;
};



//get videogames
//   const getAllFromAPI = () => {
//     let videogamesFromAPI = [];

//     for (let i = 2; i <= 6; i++) {
//         axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
//           .then(response => {
//             videogamesFromAPI.push(response.data.map(ele => ({
//               id: ele.id,
//               background_image: ele.background_image,
//               name: ele.name,
//               genres: ele.genres?.map((g) => g.name),
//               rating: ele.rating,
//               platforms: ele.platforms?.map(p => p.platform.name)
//             }))
//           )
//         videogamesFromAPI = videogamesFromAPI.flat()
//       })
//       return videogamesFromAPI;
//   }
// }

// get videogames
  // const getAllFromAPI = () => {
  //   let videogamesFromAPI = [];
  //   for (let i = 2; i <= 6; i++) {
  //     axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
  //       .then(response => (
  //         videogamesFromAPI.push(response.data.results.map(vg => ({
  //           id: vg.id,
  //           background_image: vg.background_image,
  //           name: vg.name,
  //           genres: vg.genres?.map(g => g.name),
  //           rating: vg.rating,
  //           platforms: vg.platforms?.map(p => p.platform.name)
  //       })))))
  //   } 
  //   return videogamesFromAPI;
  // }



// GET /videogames?name=...
const getVideogameByNameFromAPI = async (name) => {
  const response = (await axios(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}&page_size=15`)).data.results;

  const videogames = response.map(e => ({
    id: e.id,
    background_image: e.background_image,
    name: e.name,
    genres: e.genres?.map(g => g.name),
    released: e.released,
    rating: e.rating,
    platforms: e.platforms?.map(p => p.platform.name),
  }));
  return videogames; 
};


  // const getVideogameByNameFromAPI = (name) => {
  //   axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}&page_size=15`).data.results
  //     .then(response => {
  //       response.map(e => ({
  //         id: e.id,
  //         background_image: e.background_image,
  //         name: e.name,
  //         genres: e.genres?.map(g => g.name),
  //         released: e.released,
  //         rating: e.rating,
  //         platforms: e.platforms?.map(p => p.platform.name),
  //       }));
  //     })
  //     .catch(error => console.error(error))
  // }



// GET /videogames/:id
const getVideogameById = async (id) => {
  const response = (await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data;
  const {
    background_image,
    name,
    genres,
    description,
    released,
    rating,
    parent_platforms,
  } = response;

  const videogame = {
    background_image,
    name,
    description,
    released,
    rating,
    genres: genres?.map((g) => g.name),
    platforms: parent_platforms?.map((p) => p.platform.name),
  };

  return videogame;
};



module.exports = {
  getAllFromAPI,
  getVideogameById,
  getVideogameByNameFromAPI,
};
