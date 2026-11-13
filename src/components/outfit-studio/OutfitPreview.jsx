import { Check, RefreshCw, WandSparkles } from "lucide-react";

export default function OutfitPreview({ selectedItems, season, outfitName, onNameChange, onSave, onRegenerate, notice, noticeType }) {
  return (
    <section className="outfit-preview-panel">
      <div className="preview-topline">
        <span className="eyebrow">YOUR OUTFIT PREVIEW</span>
        <span className="preview-season">{season.toUpperCase()} EDIT</span>
      </div>

      {selectedItems.length > 0 ? (
        <>
          <div className="generated-outfit-grid">
            {selectedItems.map((item) => (
              <div className="generated-piece" key={item.id}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <span>{item.category}</span>
                <strong title={item.name}>{item.name}</strong>
              </div>
            ))}
          </div>
          <div className="save-outfit-row">
            <input
              value={outfitName}
              onChange={(event) => onNameChange(event.target.value)}
              aria-label="Name this outfit"
              maxLength={45}
              placeholder="Give this look a name"
            />
            <button className="button button-dark" type="button" onClick={onSave}>
              <Check size={16} /> Save look
            </button>
          </div>
        </>
      ) : (
        <div className="preview-empty">
          <div className="preview-empty-icon"><WandSparkles size={25} /></div>
          <h3>A blank canvas.</h3>
          <p>Your outfit will appear here. Choose an occasion and season, then let Fitly bring your pieces together.</p>
          <span>YOUR WARDROBE · YOUR STYLE</span>
        </div>
      )}

      {notice && <p className={`studio-notice ${noticeType === "warning" ? "is-warning" : ""}`} role="status">{notice}</p>}
      {selectedItems.length > 0 && (
        <button className="text-link regenerate-link" type="button" onClick={onRegenerate}>
          <RefreshCw size={14} /> Try another combination
        </button>
      )}
    </section>
  );
}
