import { Heart, Shirt, Sparkles } from "lucide-react";
import CountUp from "../common/CountUp";

function StatCard({ icon: Icon, label, value, note, index }) {
  return (
    <article className="stat-card editorial-stat-card" style={{ "--stat-index": index }}>
      <div className="stat-card-top">
        <span className="stat-card-icon">
          <Icon size={19} strokeWidth={1.6} />
        </span>
        <span className="stat-card-note">{note}</span>
      </div>
      <strong className="stat-card-value">
        <CountUp to={value} />
      </strong>
      <span className="stat-card-label">{label}</span>
    </article>
  );
}

export default function DashboardStats({ items, outfits }) {
  const favoriteCount = items.filter((item) => item.favorite).length;

  return (
    <section className="dashboard-stats editorial-stats" aria-label="Wardrobe summary">
      <StatCard
        icon={Shirt}
        label="Pieces in your wardrobe"
        value={items.length}
        note="YOUR COLLECTION"
        index={0}
      />
      <StatCard
        icon={Sparkles}
        label="Saved outfit combinations"
        value={outfits.length}
        note="YOUR LOOKS"
        index={1}
      />
      <StatCard
        icon={Heart}
        label="Favourite pieces"
        value={favoriteCount}
        note="MOST LOVED"
        index={2}
      />
    </section>
  );
}
