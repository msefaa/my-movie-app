import React from "react";
import CategoriesLoading from "../../components/categories/loading";
import FeaturesLoading from "@/components/featured-movie/loading";
import MovieSectionLoading from "@/components/movie-section/loading";

function Loading() {
  return (
    <div>
      <FeaturesLoading />
      <CategoriesLoading />
      <MovieSectionLoading />
      <MovieSectionLoading />
      <MovieSectionLoading />
    </div>
  );
}

export default Loading;
