import { Heart } from "lucide-react";
import ClothingCard from "../ClothingCard";

export default function FavoriteClothingSection({ items, onDelete, onToggleFavorite }) {
  return (
    <section className="favorites-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE PIECES YOU REACH FOR</p>
          <h2>Favourite clothing</h2>
        </div>
        <span className="favorite-count">{items.length} PIECES</span>
      </div>

      {items.length > 0 ? (
        <div className="clothing-grid">
          {items.map((item) => (
            <ClothingCard key={item.id} item={item} onDelete={onDelete} onToggleFavorite={onToggleFavorite} />
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <Heart size={20} />
          <h3>A place for the pieces you love.</h3>
          <p>Tap the heart on any wardrobe piece to keep it close at hand.</p>
        </div>
      )}
    </section>
  );
}
