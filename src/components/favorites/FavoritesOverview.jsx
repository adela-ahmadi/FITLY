export default function FavoritesOverview({ clothingCount, outfitCount }) {
  return (
    <section className="favorites-overview" aria-label="Favorites summary">
      <div className="favorites-overview-intro">
        <p className="eyebrow">YOUR PERSONAL EDIT</p>
        <h2>Worth keeping close.</h2>
      </div>
      <div className="favorites-stat">
        <strong>{clothingCount}</strong>
        <span>FAVOURITE PIECES</span>
      </div>
      <div className="favorites-stat">
        <strong>{outfitCount}</strong>
        <span>SAVED LOOKS</span>
      </div>
    </section>
  );
}
