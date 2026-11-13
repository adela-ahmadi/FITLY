import FavoritesOverview from "../components/favorites/FavoritesOverview";
import FavoriteClothingSection from "../components/favorites/FavoriteClothingSection";
import FavoriteOutfitSection from "../components/favorites/FavoriteOutfitSection";

export default function Favorites({
  items,
  outfits,
  onDelete,
  onToggleFavorite,
  onDeleteOutfit,
  onToggleOutfitFavorite,
}) {
  const favoriteItems = items.filter((item) => item.favorite);
  const favoriteOutfits = outfits.filter((outfit) => outfit.favorite);

  return (
    <div className="page-stack">
      <section className="page-intro-row">
        <div>
          <p className="eyebrow">THE KEEPSAKES</p>
          <h2 className="page-title">A collection of favourites.</h2>
          <p className="section-description">Keep your most-loved pieces and looks close at hand.</p>
        </div>
      </section>

      <FavoritesOverview clothingCount={favoriteItems.length} outfitCount={favoriteOutfits.length} />

      <FavoriteClothingSection
        items={favoriteItems}
        onDelete={onDelete}
        onToggleFavorite={onToggleFavorite}
      />

      <FavoriteOutfitSection
        outfits={favoriteOutfits}
        onDelete={onDeleteOutfit}
        onToggleFavorite={onToggleOutfitFavorite}
      />
    </div>
  );
}
