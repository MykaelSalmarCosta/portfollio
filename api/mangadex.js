export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.mangadex.org/manga?limit=20&includes[]=cover_art&contentRating[]=safe"
    );

    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar MangaDex" });
  }
}
