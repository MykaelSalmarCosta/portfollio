import { Link } from "react-router-dom";

export default function MangaCard({ manga }) {
  return (
    <Link to={`/manga/${manga.id}`}>
      <div className="bg-zinc-900 hover:bg-zinc-800 transition p-3 rounded-xl shadow cursor-pointer">
        <p className="text-white text-sm font-medium line-clamp-2">
          {manga.attributes?.title?.en ||
            manga.attributes?.title?.pt ||
            "Sem título"}
        </p>
      </div>
    </Link>
  );
}
