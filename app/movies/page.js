import { endpoints } from "@/constants";
import fetchApi from "@/utils/fetchApi";

export default async function TmdbPage() {
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
  };
  const data = await fetchApi(endpoints.tmdb, headers);
  const movies = data.results;

  return (
    <main>
      <h1>TMDB</h1>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <h2>{title}</h2>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
