import { useEffect, useState } from "react";
import MangaCard from "../components/MangaCard";

export default function Home() {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/mangadex/popular")
      .then((res) => res.json())
      .then((data) => setMangas(data.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {mangas.map((manga) => (
        <MangaCard key={manga.id} manga={manga} />
      ))}
    </div>
  );
}
