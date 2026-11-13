import { Plus, Search, Shirt } from "lucide-react";

export default function WardrobeEmptyState({ onAddClick, hasFilters }) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        {hasFilters ? <Search size={21} /> : <Shirt size={22} />}
      </div>
      <h3>{hasFilters ? "No pieces match that search." : "Your wardrobe is waiting."}</h3>
      <p>
        {hasFilters
          ? "Try another keyword or category to find what you are looking for."
          : "Add your first piece and start building a wardrobe that works for you."}
      </p>
      {!hasFilters && (
        <button className="button button-dark" type="button" onClick={onAddClick}>
          <Plus size={16} /> Add a piece
        </button>
      )}
    </div>
  );
}
