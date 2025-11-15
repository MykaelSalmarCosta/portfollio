export default function ManhwaCard({ title, cover}) {
  return (
    <div className="manhwa-card">
      <img 
      src={cover} 
      alt={title} 
      className="manhwa-cover" />
      <h2 className="manhwa-title">{title}</h2>
    </div>
  );
}