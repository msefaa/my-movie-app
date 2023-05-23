const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${process.env.API_KEY}`,
  },
};
const API_URL = "https://api.themoviedb.org/3";
const fetchMovieApi = async (pathname, query = "") => {
  try {
    const res = await fetch(
      `${API_URL}${pathname}?language=en-US&${query}&page=1`,
      options
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};
const getSingleCategory = async (genreId) => {
  return await fetchMovieApi("/discover/movie", `with_genres=${genreId}`);
};
const getPopularMovies = async () => {
  return await fetchMovieApi("/movie/popular", `page=1`);
};
const getRatedMovies = async () => {
  return await fetchMovieApi("/movie/top_rated", `page=1`);
};
const getCategoryList = async () => {
  return await fetchMovieApi("/genre/movie/list", `page=1`);
};
const getSingleMovie = async (movieId) => {
  return await fetchMovieApi(`/movie/${movieId}`);
};

export {
  getCategoryList,
  getRatedMovies,
  getPopularMovies,
  getSingleMovie,
  getSingleCategory,
};
