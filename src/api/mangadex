export async function getManhwas() {
  try {
    const res = await fetch("/api/mangadex");
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error("Erro ao buscar manhwas:", err);
    return [];
  }
}
