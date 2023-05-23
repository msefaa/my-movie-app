import { notFound } from "next/navigation";
import "@/styles/global.css";
import MovieContainer from "@/containers/movie";
import { getSingleMovie } from "@/services/movie";

async function Home({ params, searchParams }) {
  const movieDetails = await getSingleMovie(params.id);
  if (!movieDetails) {
    notFound();
  }

  return <MovieContainer movie={movieDetails} />;
}
export default Home;
