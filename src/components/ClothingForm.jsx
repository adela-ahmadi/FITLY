import { useState } from "react";
import { ImagePlus, X } from "lucide-react";

const categories = ["Tops", "Bottoms", "Shoes", "Outerwear", "Accessories"];
const seasons = ["Spring", "Summer", "Autumn", "Winter", "All Season"];
const occasions = ["Casual", "Formal", "Work", "Sport", "Any"];
const fallbackImage = "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85";

const initialForm = {
  name: "",
  category: "Tops",
  color: "",
  season: "All Season",
  occasion: "Casual",
  image: "",
};

export default function ClothingForm({ onAdd, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = form.name.trim();
    const color = form.color.trim();

    if (!name || !color) {
      setError("Please enter both an item name and its colour.");
      return;
    }

    const image = form.image.trim();
    if (image) {
      try {
        const parsedUrl = new URL(image);
        if (!["https:", "http:"].includes(parsedUrl.protocol)) throw new Error("Invalid protocol");
      } catch {
        setError("Please enter a valid image URL, or leave the field empty.");
        return;
      }
    }

    onAdd({ ...form, name, color, image: image || fallbackImage });
  };

  const previewImage = form.image.trim() || fallbackImage;

  return (
    <section className="clothing-form modal-card" aria-labelledby="form-title" role="dialog" aria-modal="true">
      <div className="modal-heading">
        <div>
          <p className="eyebrow">A NEW PIECE FOR YOUR COLLECTION</p>
          <h2 id="form-title">Add to wardrobe</h2>
          <p className="muted-copy">Give every piece a place in your personal edit.</p>
        </div>
        <button className="icon-button" type="button" onClick={onClose} aria-label="Close form">
          <X size={19} />
        </button>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <label className="form-field">
          <span>Item name <small>Required</small></span>
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            placeholder="e.g. Linen white shirt"
            maxLength={60}
            required
          />
        </label>

        <div className="form-grid">
          <label className="form-field">
            <span>Category</span>
            <select name="category" value={form.category} onChange={updateField}>
              {categories.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
          </label>
          <label className="form-field">
            <span>Colour <small>Required</small></span>
            <input
              name="color"
              value={form.color}
              onChange={updateField}
              placeholder="e.g. Warm beige"
              maxLength={30}
              required
            />
          </label>
          <label className="form-field">
            <span>Season</span>
            <select name="season" value={form.season} onChange={updateField}>
              {seasons.map((season) => <option key={season} value={season}>{season}</option>)}
            </select>
          </label>
          <label className="form-field">
            <span>Occasion</span>
            <select name="occasion" value={form.occasion} onChange={updateField}>
              {occasions.map((occasion) => <option key={occasion} value={occasion}>{occasion}</option>)}
            </select>
          </label>
        </div>

        <label className="form-field">
          <span>Image URL <small>Optional</small></span>
          <div className="input-with-icon">
            <ImagePlus size={16} />
            <input
              name="image"
              type="url"
              value={form.image}
              onChange={updateField}
              placeholder="https://..."
            />
          </div>
        </label>

        <div className="image-preview">
          <img src={previewImage} alt="Clothing preview" onError={(event) => { if (event.currentTarget.dataset.fallbackApplied === "true") { event.currentTarget.style.visibility = "hidden"; return; } event.currentTarget.dataset.fallbackApplied = "true"; event.currentTarget.src = fallbackImage; }} />
          <span>{form.image.trim() ? "Preview of your selected image" : "A sample image will be used if you do not add a URL."}</span>
        </div>

        {error && <p className="form-error" role="alert">{error}</p>}

        <div className="form-actions">
          <button className="button button-quiet" type="button" onClick={onClose}>Cancel</button>
          <button className="button button-dark" type="submit">Add to my wardrobe</button>
        </div>
      </form>
    </section>
  );
}
