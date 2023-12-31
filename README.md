This is a [Next.js app](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# NextJs/Typescript Movie application

NextJs application using [TMDB API](https://www.themoviedb.org/)

This project was bootstrapped with [Create Next App](https://nextjs.org/docs/pages/api-reference/create-next-app) with typescript and eslint template.

## Features

- Get popular movies.
- Get movies by theme.
- Get movies details.
- Get similar movies.
- Search movies.
- Translation in English or French.

## Try it out

Coming soon!

**Warning:** Tmdb api requires an user api key in order to be authorized to make requests

## How to Run locally

```bash
$git clone https://github.com/Mathieu94110/MovieApp.git
$cd movie-app
$npm install or yarn install
```

To start you have to create an .env file on the application root directory

inside you have to fill these informations

```bash
TMDB_API_KEY=<YOUR_TMDB_API_KEY>
TMDB_API_URL="https://api.themoviedb.org/3"
NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH="https://image.tmdb.org/t/p"
NEXTAUTH_SECRET=<put the result on the terminal of openssl rand -base64 32>
NEXTAUTH_URL=http://localhost:3000
```

If you already have an account you can login on this url https://www.themoviedb.org/login and put the TMDB_API_KEY on .env file with you api key.
Else go here https://www.themoviedb.org/signup , complete the form after that you will be able to get your api key and fill TMDB_API_KEY value on .env file.

After that, save local changes on your editor.

Now run:

```bash
$ npm run dev
```

and visit http://localhost:3000.

## Screenshots

## Desktop

![home](public/movie-app-home-desktop.png?raw=true "Home")

![movie details](public/movie-app-details-desktop.png?raw=true "MovieDetails")

![search by genre](public/movie-app-genres-desktop.png?raw=true "Genres")

![search movie](public/movie-app-search-desktop.png?raw=true "SearchMovies")

![translator](public/movie-app-translated-genres-desktop.png?raw=true "SearchMovies")

## Mobile

![home](public/movie-app-home-mobile.png?raw=true "Home")

![movie details](public/movie-app-details-mobile.png?raw=true "MovieDetails")

![search by genre](public/movie-app-genres-mobile.png?raw=true "Genres")

![search movie](public/movie-app-search-mobile.png?raw=true "SearchMovies")

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
