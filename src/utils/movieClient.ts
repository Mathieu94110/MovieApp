import "server-only";

type getMovieByPathParams = { key: string, value: string }[]

export const getMovieByPath = (path: string, params: getMovieByPathParams = [], language = "fr") => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);
  url.searchParams.append("api_key", process.env.TMDB_API_KEY as string);
  url.searchParams.append("language", language);
  params
    .filter((param) => param.value)
    .forEach((param) => {
      url.searchParams.append(param.key, param.value);
    });

  return fetch(url).then((res) => res.json());
};

export const getHydratedMovies = async (movieIds: string[], language = "fr") => {
  const moviePromises = movieIds.map((movieId) =>
    getMovieByPath(`/movie/${movieId}`, [], language)
  );

  const movies = await Promise.all(moviePromises);

  return movies;
};