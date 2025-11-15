export default async function handler(req, res) {
  const response = await fetch("https://api.mangadex.org/manga?limit=20&includes[]=cover_art");
  const data = await response.json();
  res.status(200).json(data);
}
