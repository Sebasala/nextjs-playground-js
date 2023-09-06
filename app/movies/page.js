import Menu from "@/components/stateless/Menu";
import { layouts, movieGenres } from "@/constants";

export default function TmdbPage() {
  const { CENTERED } = layouts;
  return (
    <main>
      <h1>Movies</h1>
      <Menu links={movieGenres} layout={CENTERED} />
    </main>
  );
}
