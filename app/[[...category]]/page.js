import "@/styles/global.css";
import HomeContainer from "@/containers/home";
import {
  getCategoryList,
  getRatedMovies,
  getPopularMovies,
  getSingleCategory,
} from "@/services/movie";
async function Home({ params }) {
  let selectedCategory;

  const [
    { results: populerMovies },
    { results: topRatedMovies },
    { genres: categoriesList },
  ] = await Promise.all([
    getPopularMovies(),
    getRatedMovies(),
    getCategoryList(),
  ]);
  console.log(getPopularMovies);
  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }
  return (
    <HomeContainer
      populerMovies={populerMovies}
      topRatedMovies={topRatedMovies}
      categoriesList={categoriesList}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 6) : [],
      }}
    />
  );
}
export default Home;
