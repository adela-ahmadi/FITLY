import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import WardrobeFilters from "../components/wardrobe/WardrobeFilters";
import WardrobeGrid from "../components/wardrobe/WardrobeGrid";
import WardrobeEmptyState from "../components/wardrobe/WardrobeEmptyState";
import Reveal from "../components/common/Reveal";

export default function Wardrobe({ items, onAddClick, onDelete, onToggleFavorite }) {
  const [activeCategory, setActiveCategory] = useState("All pieces");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  const filteredItems = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const result = items.filter((item) => {
      const matchesCategory =
        activeCategory === "All pieces" || item.category === activeCategory;
      const searchableText = [
        item.name,
        item.color,
        item.category,
        item.season,
        item.occasion,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        (!normalizedSearch || searchableText.includes(normalizedSearch))
      );
    });

    if (sortBy === "name-asc") result.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "name-desc") result.sort((a, b) => b.name.localeCompare(a.name));
    if (sortBy === "recent") {
      result.sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0),
      );
    }
    return result;
  }, [items, activeCategory, searchTerm, sortBy]);

  const hasFilters =
    activeCategory !== "All pieces" || Boolean(searchTerm.trim());

  return (
    <div className="page-stack">
      <Reveal>
        <section className="page-intro-row editorial-page-intro">
          <div>
            <p className="eyebrow">YOUR PERSONAL COLLECTION · 02</p>
            <h2 className="page-title">A wardrobe with a point of view.</h2>
            <p className="section-description">
              {items.length} {items.length === 1 ? "piece" : "pieces"} in your
              wardrobe. Make each one count.
            </p>
          </div>
          <button
            className="button button-dark page-intro-action"
            type="button"
            onClick={onAddClick}
          >
            <Plus size={16} /> Add a piece
          </button>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <WardrobeFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </Reveal>

      <Reveal delay={130}>
        <div className="results-line editorial-results-line">
          <span>
            <strong>{filteredItems.length}</strong>{" "}
            {filteredItems.length === 1 ? "piece" : "pieces"} found
          </span>
          <span className="results-note">CURATED BY YOU</span>
        </div>

        {filteredItems.length > 0 ? (
          <WardrobeGrid
            items={filteredItems}
            onDelete={onDelete}
            onToggleFavorite={onToggleFavorite}
          />
        ) : (
          <WardrobeEmptyState onAddClick={onAddClick} hasFilters={hasFilters} />
        )}
      </Reveal>
    </div>
  );
}
