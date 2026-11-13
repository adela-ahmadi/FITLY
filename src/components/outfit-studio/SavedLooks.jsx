import { ArrowRight, Heart } from "lucide-react";
import OutfitCard from "../OutfitCard";

export default function SavedLooks({ outfits, onDelete, onToggleFavorite }) {
  return (
    <section className="section-block">
      <div className="section-heading">
        <div>
          <p className="eyebrow">KEPT CLOSE</p>
          <h2>Your saved looks</h2>
        </div>
        <span className="favorite-count">{outfits.length} SAVED</span>
      </div>

      {outfits.length > 0 ? (
        <div className="saved-outfits-grid">
          {outfits.map((outfit) => (
            <OutfitCard
              key={outfit.id}
              outfit={outfit}
              onDelete={onDelete}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-inline">
          <Heart size={18} />
          <span>Your saved looks will live here.</span>
          <ArrowRight size={15} />
        </div>
      )}
    </section>
  );
}
