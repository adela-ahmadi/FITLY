import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const heroImage =
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1500&q=90";
const detailImage =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=85";

export default function DashboardHero({ onAddClick }) {
  return (
    <section className="dashboard-hero editorial-cover" aria-labelledby="dashboard-hero-title">
      <div className="editorial-cover-copy">
        <div className="cover-index">
          <span>FITLY / VOL. 01</span>
          <span>THE WARDROBE JOURNAL</span>
        </div>

        <p className="cover-kicker">STYLE, CONSIDERED</p>

        <h1 id="dashboard-hero-title" className="editorial-cover-title">
          <span>Wear what</span>
          <span>you own.</span>
          <em>See it differently.</em>
        </h1>

        <p className="cover-description">
          A thoughtful space for the pieces you love, the looks you create,
          and the style that feels entirely your own.
        </p>

        <div className="cover-actions">
          <Link className="button button-gold" to="/outfit-studio">
            <Sparkles size={16} /> Compose a look
          </Link>
          <button className="dashboard-hero-link" type="button" onClick={onAddClick}>
            Add a piece <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="cover-footnote">
          <span>01</span>
          <i />
          <span>MAKE EVERY PIECE COUNT</span>
        </div>
      </div>

      <div className="editorial-cover-media" aria-hidden="true">
        <div className="cover-photo-main">
          <img src={heroImage} alt="" />
        </div>

        <div className="cover-photo-inset">
          <img src={detailImage} alt="" />
        </div>

        <div className="cover-seal">
          F.
          <small>EST. IN STYLE</small>
        </div>

        <span className="cover-side-index">THE PERSONAL EDIT · 2026</span>
        <span className="cover-photo-caption">A STUDY IN PERSONAL STYLE</span>
      </div>
    </section>
  );
}
