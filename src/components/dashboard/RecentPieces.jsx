import { ArrowUpRight, Plus, Shirt } from "lucide-react";
import { Link } from "react-router-dom";
import ClothingCard from "../ClothingCard";

export default function RecentPieces({ items, onDelete, onToggleFavorite, onAddClick }) {
  const recentItems = items.slice(0, 4);

  return (
    <section className="section-block">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE COLLECTION</p>
          <h2>Recently added</h2>
          <p className="section-heading-note">A few pieces from your personal edit.</p>
        </div>
        <Link className="text-link section-heading-action" to="/wardrobe">
          View the wardrobe <ArrowUpRight size={15} />
        </Link>
      </div>

      {recentItems.length > 0 ? (
        <div className="clothing-grid">
          {recentItems.map((item) => (
            <ClothingCard
              key={item.id}
              item={item}
              onDelete={onDelete}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon"><Shirt size={22} /></div>
          <h3>Your wardrobe is a blank canvas.</h3>
          <p>Add your first piece and start building a collection that feels like you.</p>
          <button className="button button-dark" type="button" onClick={onAddClick}>
            <Plus size={16} /> Add your first piece
          </button>
        </div>
      )}
    </section>
  );
}
