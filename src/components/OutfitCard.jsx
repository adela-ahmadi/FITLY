import { Heart, Trash2 } from "lucide-react";

const fallbackImage =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85";

export default function OutfitCard({ outfit, onDelete, onToggleFavorite }) {
  const pieces = Array.isArray(outfit.items) ? outfit.items : [];

  return (
    <article className="outfit-card">
      <div className="outfit-card-media">
        {pieces.length > 0 ? (
          <div className={`outfit-card-images count-${Math.min(pieces.length, 4)}`}>
            {pieces.slice(0, 4).map((item) => (
              <img
                key={item.id}
                src={item.image || fallbackImage}
                alt={item.name || item.category || "Outfit piece"}
                loading="lazy"
                onError={(event) => {
                  if (event.currentTarget.dataset.fallbackApplied === "true") {
                    event.currentTarget.style.visibility = "hidden";
                    return;
                  }
                  event.currentTarget.dataset.fallbackApplied = "true";
                  event.currentTarget.src = fallbackImage;
                }}
              />
            ))}
          </div>
        ) : (
          <div className="outfit-card-empty">FITLY LOOK</div>
        )}

        <button
          className={`card-favorite${outfit.favorite ? " is-active" : ""}`}
          type="button"
          onClick={() => onToggleFavorite?.(outfit.id)}
          aria-label={outfit.favorite ? "Remove outfit from favorites" : "Add outfit to favorites"}
          aria-pressed={Boolean(outfit.favorite)}
        >
          <Heart size={17} fill={outfit.favorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="outfit-card-body">
        <div>
          <p className="eyebrow">{outfit.occasion || "PERSONAL LOOK"} · {outfit.season || "ALL SEASON"}</p>
          <h3>{outfit.name || "Untitled look"}</h3>
          <p className="outfit-card-piece-count">{pieces.length} pieces</p>
        </div>
        <button
          className="card-action"
          type="button"
          onClick={() => onDelete?.(outfit.id)}
          aria-label={`Delete ${outfit.name || "outfit"}`}
          title="Delete outfit"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </article>
  );
}
