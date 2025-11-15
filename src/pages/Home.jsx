import { useEffect, useState } from "react";
import { getManhwas } from "../../api/mangadex";
import ManhwaCard from "../components/ManhwaCard";

export default function Home() {
  const [manhwas, setManhwas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getManhwas(24);
      setManhwas(data);
      setLoading(false);
    } 
    load();
  }, []);

  if (loading) {
    return <p>Carregando manhwas...</p>;
  }

  return (
    <div className="home-page">
      <h1 className="Title"> Catálago de Manhwa</h1>

      <div className="manhwa-list">
        {manhwas.map((m) => (
          <ManhwaCard key={m.title} title={m.title} cover={m.cover} />
        ))}
      </div>
    </div>
  );
}
    
