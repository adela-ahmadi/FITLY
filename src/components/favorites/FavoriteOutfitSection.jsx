import { Sparkles } from "lucide-react";
import OutfitCard from "../OutfitCard";

export default function FavoriteOutfitSection({ outfits, onDelete, onToggleFavorite }) {
  return (
    <section className="favorites-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">LOOKS WORTH REPEATING</p>
          <h2>Favourite outfits</h2>
        </div>
        <span className="favorite-count">{outfits.length} LOOKS</span>
      </div>

      {outfits.length > 0 ? (
        <div className="saved-outfits-grid">
          {outfits.map((outfit) => (
            <OutfitCard key={outfit.id} outfit={outfit} onDelete={onDelete} onToggleFavorite={onToggleFavorite} />
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <Sparkles size={20} />
          <h3>Your favourite looks, all together.</h3>
          <p>Save an outfit in Outfit Studio, then tap its heart to add it here.</p>
        </div>
      )}
    </section>
  );
}
