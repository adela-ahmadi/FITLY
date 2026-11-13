import { Heart, Shirt, Sparkles } from "lucide-react";

function StatCard({ icon: Icon, label, value, note }) {
  return (
    <article className="stat-card">
      <div className="stat-card-top">
        <span className="stat-card-icon"><Icon size={17} strokeWidth={1.7} /></span>
        <span className="stat-card-note">{note}</span>
      </div>
      <strong className="stat-card-value">{value}</strong>
      <span className="stat-card-label">{label}</span>
    </article>
  );
}

export default function DashboardStats({ items, outfits }) {
  const favoriteCount = items.filter((item) => item.favorite).length;

  return (
    <section className="dashboard-stats" aria-label="Wardrobe summary">
      <StatCard icon={Shirt} label="Pieces in your wardrobe" value={items.length} note="YOUR COLLECTION" />
      <StatCard icon={Sparkles} label="Saved outfit combinations" value={outfits.length} note="YOUR LOOKS" />
      <StatCard icon={Heart} label="Favourite pieces" value={favoriteCount} note="MOST LOVED" />
    </section>
  );
}
