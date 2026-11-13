import { Search, SlidersHorizontal } from "lucide-react";

const categories = ["All pieces", "Tops", "Bottoms", "Shoes", "Outerwear", "Accessories"];

export default function WardrobeFilters({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
}) {
  return (
    <section className="wardrobe-toolbar" aria-label="Wardrobe filters">
      <div className="category-tabs" role="group" aria-label="Filter clothing by category">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? "category-tab-active" : ""}`}
            type="button"
            onClick={() => onCategoryChange(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="wardrobe-tools">
        <label className="search-field">
          <Search size={16} strokeWidth={1.8} />
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search your pieces..."
            aria-label="Search your wardrobe"
          />
        </label>
        <label className="sort-control" aria-label="Sort wardrobe">
          <SlidersHorizontal size={15} />
          <select className="sort-select" value={sortBy} onChange={(event) => onSortChange(event.target.value)}>
            <option value="recent">Recently added</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </label>
      </div>
    </section>
  );
}
