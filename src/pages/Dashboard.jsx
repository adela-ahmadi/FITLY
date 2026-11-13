import { ArrowUpRight, Compass, Layers3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardHero from "../components/dashboard/DashboardHero";
import DashboardStats from "../components/dashboard/DashboardStats";
import RecentPieces from "../components/dashboard/RecentPieces";
import Reveal from "../components/common/Reveal";
import StyleMarquee from "../components/common/StyleMarquee";

const palette = [
  { name: "NAVY", color: "#0D1B2A" },
  { name: "OCEAN", color: "#1B365D" },
  { name: "GOLD", color: "#C99A47" },
  { name: "CHAMPAGNE", color: "#E6C17A" },
  { name: "IVORY", color: "#F5EBDD" },
];

const principles = [
  {
    number: "01",
    title: "Begin with a favourite",
    copy: "Choose one piece you already love. Let it set the direction for everything else.",
  },
  {
    number: "02",
    title: "Find the balance",
    copy: "Play with proportion, colour and layers. A little contrast makes a look feel considered.",
  },
  {
    number: "03",
    title: "Make it yours",
    copy: "Finish with the detail that feels like you. Personal style is never one-size-fits-all.",
  },
];

export default function Dashboard({
  items,
  outfits,
  onAddClick,
  onDelete,
  onToggleFavorite,
}) {
  return (
    <div className="page-stack dashboard-page">
      <Reveal>
        <DashboardHero onAddClick={onAddClick} />
      </Reveal>

      <div className="dashboard-folio">
        <span>THE DAILY EDIT</span>
        <strong>A wardrobe is a collection of possibilities.</strong>
        <span>ISSUE Nº 001</span>
      </div>

      <Reveal delay={60}>
        <DashboardStats items={items} outfits={outfits} />
      </Reveal>

      <Reveal delay={100}>
        <section className="dashboard-discovery-grid" aria-label="Discover FITLY">
          <article className="dashboard-colour-study">
            <div className="study-heading">
              <div>
                <p className="eyebrow">THE FITLY COLOUR STUDY</p>
                <h2>Our signature palette.</h2>
                <p className="study-description">
                  A considered mix of deep tones, warm light and a little golden detail.
                </p>
              </div>
              <span className="study-index">01</span>
            </div>

            <div className="palette-strip">
              {palette.map((swatch) => (
                <div className="palette-swatch" key={swatch.name}>
                  <span
                    className="palette-swatch-chip"
                    style={{ "--swatch": swatch.color }}
                    title={`${swatch.name} ${swatch.color}`}
                  />
                  <small>{swatch.name}</small>
                </div>
              ))}
            </div>
          </article>

          <article className="dashboard-atelier-card">
            <span className="atelier-icon"><Layers3 size={20} /></span>
            <div>
              <p className="eyebrow">THE OUTFIT ATELIER</p>
              <h2>Your next combination is waiting.</h2>
              <p>
                Start with a piece from your wardrobe and build a look around it.
              </p>
            </div>
            <Link className="text-link" to="/outfit-studio">
              Enter the style studio <ArrowUpRight size={15} />
            </Link>
          </article>
        </section>
      </Reveal>

      <StyleMarquee />

      <Reveal delay={80}>
        <RecentPieces
          items={items}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
          onAddClick={onAddClick}
        />
      </Reveal>

      <Reveal delay={120}>
        <section className="dashboard-style-notes">
          <div className="style-notes-heading">
            <div>
              <p className="eyebrow">A FEW THOUGHTS ON PERSONAL STYLE</p>
              <h2>Good style is in the details.</h2>
            </div>
            <Link className="text-link" to="/outfit-studio">
              Put an idea together <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="style-notes-grid">
            {principles.map((principle) => (
              <article className="style-note-card" key={principle.number}>
                <span className="style-note-number">{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={150}>
        <section className="dashboard-closing-banner">
          <div className="dashboard-closing-copy">
            <p className="eyebrow">YOUR WARDROBE, YOUR POINT OF VIEW</p>
            <h2>Ready to see familiar pieces in a new way?</h2>
            <p>
              {items.length > 0
                ? `You have ${items.length} ${items.length === 1 ? "piece" : "pieces"} to work with. Your next favourite look could already be here.`
                : "Add your first pieces and start creating looks that feel like you."}
            </p>
          </div>
          <Link className="button button-gold" to={items.length > 0 ? "/outfit-studio" : "/wardrobe"}>
            <Compass size={16} />
            {items.length > 0 ? "Create a new look" : "Build your wardrobe"}
          </Link>
        </section>
      </Reveal>
    </div>
  );
}
