import ClothingCard from "../ClothingCard";

export default function WardrobeGrid({ items, onDelete, onToggleFavorite }) {
  return (
    <div className="clothing-grid">
      {items.map((item) => (
        <ClothingCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
