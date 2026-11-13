import { useState } from "react";
import { Sparkles } from "lucide-react";
import OutfitControls from "../components/outfit-studio/OutfitControls";
import OutfitPreview from "../components/outfit-studio/OutfitPreview";
import SavedLooks from "../components/outfit-studio/SavedLooks";

const requiredCategories = ["Tops", "Bottoms", "Shoes"];
const optionalCategories = ["Outerwear", "Accessories"];

function pickCandidate(candidates, selectedItems) {
  const unused = candidates.filter((item) => !selectedItems.some((selected) => selected.id === item.id));
  const pool = unused.length ? unused : candidates;
  if (!pool.length) return null;
  const favourites = pool.filter((item) => item.favorite);
  const preferredPool = favourites.length && Math.random() > 0.45 ? favourites : pool;
  return preferredPool[Math.floor(Math.random() * preferredPool.length)];
}

function matchesSelection(item, season, occasion) {
  const seasonMatches = item.season === season || item.season === "All Season";
  const occasionMatches = item.occasion === occasion || item.occasion === "Any";
  return seasonMatches && occasionMatches;
}

export default function OutfitStudio({ items, savedOutfits, onSaveOutfit, onDeleteOutfit, onToggleOutfitFavorite }) {
  const [occasion, setOccasion] = useState("Casual");
  const [season, setSeason] = useState("Summer");
  const [selectedItems, setSelectedItems] = useState([]);
  const [outfitName, setOutfitName] = useState("My new look");
  const [notice, setNotice] = useState("");
  const [noticeType, setNoticeType] = useState("success");

  const generateOutfit = () => {
    if (!items.length) {
      setSelectedItems([]);
      setNotice("Your wardrobe is empty. Add a few pieces before creating an outfit.");
      setNoticeType("warning");
      return;
    }

    const eligibleByCategory = (category) =>
      items.filter((item) => item.category === category && matchesSelection(item, season, occasion));

    const missingCategories = requiredCategories.filter((category) => eligibleByCategory(category).length === 0);
    if (missingCategories.length) {
      setSelectedItems([]);
      setNotice(`To create a complete ${occasion.toLowerCase()} look for ${season.toLowerCase()}, add a suitable ${missingCategories.join(", ").toLowerCase()}.`);
      setNoticeType("warning");
      return;
    }

    const generated = [];
    requiredCategories.forEach((category) => {
      const choice = pickCandidate(eligibleByCategory(category), generated);
      if (choice) generated.push(choice);
    });

    optionalCategories.forEach((category) => {
      const candidates = eligibleByCategory(category);
      if (candidates.length && Math.random() > 0.35) {
        const choice = pickCandidate(candidates, generated);
        if (choice) generated.push(choice);
      }
    });

    setSelectedItems(generated);
    setNotice("A complete look, selected from pieces that match your season and occasion.");
    setNoticeType("success");
  };

  const saveOutfit = () => {
    if (!selectedItems.length) {
      setNotice("Create an outfit before saving it.");
      setNoticeType("warning");
      return;
    }

    onSaveOutfit({
      name: outfitName.trim() || `${occasion} look`,
      occasion,
      season,
      items: selectedItems.map((item) => ({ ...item })),
    });
    setNotice("Your outfit has been saved to your collection.");
    setNoticeType("success");
  };

  return (
    <div className="page-stack">
      <section className="studio-intro">
        <div>
          <p className="eyebrow">THE CREATIVE CORNER</p>
          <h2 className="page-title">Your next look starts here.</h2>
          <p className="section-description">Choose the mood. We’ll help you bring the pieces together.</p>
        </div>
        <div className="studio-intro-mark" aria-hidden="true"><Sparkles size={27} strokeWidth={1.5} /></div>
      </section>

      <div className="studio-layout">
        <OutfitControls
          occasion={occasion}
          season={season}
          onOccasionChange={setOccasion}
          onSeasonChange={setSeason}
          onGenerate={generateOutfit}
          wardrobeCount={items.length}
        />
        <OutfitPreview
          selectedItems={selectedItems}
          season={season}
          outfitName={outfitName}
          onNameChange={setOutfitName}
          onSave={saveOutfit}
          onRegenerate={generateOutfit}
          notice={notice}
          noticeType={noticeType}
        />
      </div>

      <SavedLooks
        outfits={savedOutfits}
        onDelete={onDeleteOutfit}
        onToggleFavorite={onToggleOutfitFavorite}
      />
    </div>
  );
}
