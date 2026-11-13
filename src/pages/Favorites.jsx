import FavoritesOverview from "../components/favorites/FavoritesOverview";
import FavoriteClothingSection from "../components/favorites/FavoriteClothingSection";
import FavoriteOutfitSection from "../components/favorites/FavoriteOutfitSection";
import Reveal from "../components/common/Reveal";

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
      <Reveal>
        <section className="page-intro-row editorial-page-intro">
          <div>
            <p className="eyebrow">THE KEEPSAKES · 04</p>
            <h2 className="page-title">A collection worth keeping.</h2>
            <p className="section-description">
              Keep your most-loved pieces and looks close at hand.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={70}>
        <FavoritesOverview
          clothingCount={favoriteItems.length}
          outfitCount={favoriteOutfits.length}
        />
      </Reveal>

      <Reveal delay={120}>
        <FavoriteClothingSection
          items={favoriteItems}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
        />
      </Reveal>

      <Reveal delay={170}>
        <FavoriteOutfitSection
          outfits={favoriteOutfits}
          onDelete={onDeleteOutfit}
          onToggleFavorite={onToggleOutfitFavorite}
        />
      </Reveal>
    </div>
  );
}
