import { getMovieByPath } from "@/utils/movieClient";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") as string;

  const searchResults = await getMovieByPath("/search/movie", [
    {
      key: "query",
      value: query,
    },
  ]);

  return new Response(JSON.stringify(searchResults), { status: 200 });
}
