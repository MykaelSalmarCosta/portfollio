const BASE_URL = "https://api.mangadex.org";

export async function getManhwas() {
  try {
    const response = await fetch(
    `${BASE_URL}/manga?limit=20&includes[]=cover_art&contentRating[]=safe&contentRating[]=safe`
  );

  const data = await response.json();

  return data.data.map(item => {
    const id = item.id;
    const attributes = item.attributes;

    const coverRel = item.relationships.find(rel => rel.type === "cover_art");
    
    
    const coverFileName = coverRel?.attributes.fileName;
    const coverUrl = coverFileName
      ? `https://uploads.mangadex.org/covers/${id}/${coverFileName}`
      : null;

    return {
      id,
      title: attributes.title.en || attributes.title["en"] || "Título desconhecido",
      description: attributes.description.en || attributes.description["en"] || "Sem descrição disponível",
      cover: coverUrl,
    };
  });
} catch (error) {
    console.error("Erro ao buscar manhwas:", error);
    return [];
  }
}