import { Heart, MoreHorizontal, Trash2 } from "lucide-react";

const fallbackImage =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85";

export default function ClothingCard({ item, onDelete, onToggleFavorite }) {
  const image = item.image || fallbackImage;

  const handleImageError = (event) => {
    if (event.currentTarget.dataset.fallbackApplied === "true") {
      event.currentTarget.style.visibility = "hidden";
      return;
    }
    event.currentTarget.dataset.fallbackApplied = "true";
    event.currentTarget.src = fallbackImage;
  };

  return (
    <article className='clothing-card'>
      <div className='clothing-card-media'>
        <img
          className='clothing-card-image'
          src={image}
          alt={item.name}
          loading='lazy'
          onError={handleImageError}
        />
        <span className='clothing-card-category'>{item.category}</span>
        <button
          className={`card-favorite${item.favorite ? " is-active" : ""}`}
          type='button'
          onClick={() => onToggleFavorite?.(item.id)}
          aria-label={
            item.favorite
              ? `Remove ${item.name} from favorites`
              : `Add ${item.name} to favorites`
          }
          aria-pressed={Boolean(item.favorite)}>
          <Heart size={17} fill={item.favorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className='clothing-card-body'>
        <div className='clothing-card-copy'>
          <h3 className='clothing-card-name' title={item.name}>
            {item.name}
          </h3>
          <p className='clothing-card-detail'>
            {item.color || "Color not set"} <span aria-hidden='true'>·</span>{" "}
            {item.season || "All Season"}
          </p>
        </div>
        <div className='clothing-card-actions'>
          <button
            className='card-action'
            type='button'
            onClick={() => onDelete?.(item.id)}
            aria-label={`Delete ${item.name}`}
            title='Delete item'>
            <Trash2 size={15} />
          </button>
          <MoreHorizontal
            size={17}
            className='card-more-icon'
            aria-hidden='true'
          />
        </div>
      </div>
    </article>
  );
}
