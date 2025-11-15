import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Manga() {
  const { id } = useParams();
  const [manga, setManga] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/mangadex/manga/${id}`)
      .then((res) => res.json())
      .then((data) => setManga(data.data))
      .catch(console.error);
  }, [id]);

  if (!manga)
    return <p className="text-white p-4 text-lg">Carregando detalhes...</p>;

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-4">
        {manga.attributes?.title?.en ||
          manga.attributes?.title?.pt ||
          "Sem título"}
      </h1>

      <p className="text-gray-300 leading-relaxed">
        {manga.attributes?.description?.en ||
          manga.attributes?.description?.pt ||
          "Sem descrição disponível."}
      </p>
    </div>
  );
}

