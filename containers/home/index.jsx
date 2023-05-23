import FeaturedMovie from "@/components/featured-movie";
import React from "react";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movie-section";

function HomeContainer({
  populerMovies = [],
  topRatedMovies = [],
  categoriesList = [],
  selectedCategory,
}) {
  return (
    <>
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <Categories categories={categoriesList.slice(0, 6)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categoriesList.find(
              (genre) => `${genre.id}` === selectedCategory.id
            ).name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="Populer Films" movies={populerMovies.slice(1, 7)} />
      <MoviesSection title="Top Rated" movies={topRatedMovies.slice(7, 13)} />
    </>
  );
}

export default HomeContainer;
