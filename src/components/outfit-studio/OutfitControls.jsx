import { Sparkles } from "lucide-react";

const occasions = ["Casual", "Formal", "Work", "Sport"];
const seasons = ["Spring", "Summer", "Autumn", "Winter"];

export default function OutfitControls({ occasion, season, onOccasionChange, onSeasonChange, onGenerate, wardrobeCount }) {
  return (
    <section className="studio-controls">
      <div className="studio-panel-heading">
        <span className="step-number">01</span>
        <div>
          <p className="eyebrow">SET THE DIRECTION</p>
          <h3>What are you dressing for?</h3>
        </div>
      </div>

      <label className="form-field">
        <span>Occasion</span>
        <select value={occasion} onChange={(event) => onOccasionChange(event.target.value)}>
          {occasions.map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
      </label>

      <label className="form-field">
        <span>Season</span>
        <select value={season} onChange={(event) => onSeasonChange(event.target.value)}>
          {seasons.map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
      </label>

      <div className="studio-divider" />

      <div className="studio-panel-heading">
        <span className="step-number">02</span>
        <div>
          <p className="eyebrow">MAKE IT YOURS</p>
          <h3>Build a considered look.</h3>
        </div>
      </div>

      <button className="button button-dark button-full" type="button" onClick={onGenerate} disabled={wardrobeCount === 0}>
        <Sparkles size={16} /> Find my outfit
      </button>
      <p className="studio-helper">
        Fitly looks for a top, bottom and shoes that suit your selected season and occasion. Outerwear and accessories are added when available.
      </p>
    </section>
  );
}
