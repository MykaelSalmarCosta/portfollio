import { useEffect, useState } from "react";
import { getManhwas } from "../api/mangadex";
import ManhwaCard from "../components/ManhwaCard";

export default function Home() {
  const [manhwas, setManhwas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getManhwas(24); // pega 24 títulos
      setManhwas(data);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return <p className="text-white text-center mt-10">Carregando manhwas...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-white text-3xl font-bold mb-6">Catálogo de Manhwas</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {manhwas.map(m => (
          <ManhwaCard key={m.id} title={m.title} cover={m.cover} />
        ))}
      </div>
    </div>
  );
}
