export async function getManhwas() {
  const res = await fetch("/api/mangadex");
  const data = await res.json();
  return data.data;
}
