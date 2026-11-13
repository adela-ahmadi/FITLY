import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardHero from "../components/dashboard/DashboardHero";
import DashboardStats from "../components/dashboard/DashboardStats";
import RecentPieces from "../components/dashboard/RecentPieces";

export default function Dashboard({ items, outfits, onAddClick, onDelete, onToggleFavorite }) {
  return (
    <div className="page-stack">
      <DashboardHero onAddClick={onAddClick} />
      <DashboardStats items={items} outfits={outfits} />
      <RecentPieces
        items={items}
        onDelete={onDelete}
        onToggleFavorite={onToggleFavorite}
        onAddClick={onAddClick}
      />
      <section className="bottom-note">
        <span className="bottom-note-icon"><Sparkles size={19} /></span>
        <div>
          <h3>Make something new out of what you own.</h3>
          <p>Start with a piece you love. Let the rest of the look follow.</p>
        </div>
        <Link className="text-link" to="/outfit-studio">
          Open outfit studio <ArrowUpRight size={15} />
        </Link>
      </section>
    </div>
  );
}
