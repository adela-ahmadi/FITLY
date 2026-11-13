import { ArrowUpRight, WandSparkles } from "lucide-react";
import { WandSparkles } from "lucide-react";
import { Link } from "react-router-dom";

const heroImage =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=90";

export default function DashboardHero({ onAddClick }) {
  return (
    <section className="dashboard-hero" aria-labelledby="dashboard-hero-title">
      <div className="dashboard-hero-copy">
        <p className="dashboard-hero-kicker">A BETTER WAY TO GET DRESSED</p>
        <h2 id="dashboard-hero-title">Less guessing.<br />More <em>great outfits.</em></h2>
        <p>
          Your wardrobe, thoughtfully organized. Discover fresh ways to wear
          the pieces you already love.
        </p>
        <div className="dashboard-hero-actions">
          <Link className="button button-light" to="/outfit-studio">
            <WandSparkles size={16} /> Create an outfit
          </Link>
          <button className="dashboard-hero-link" type="button" onClick={onAddClick}>
            Add a new piece <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
      <div className="dashboard-hero-media" aria-hidden="true">
        <img className="dashboard-hero-image" src={heroImage} alt="" />
        <span className="dashboard-hero-stamp">wear<br />well</span>
      </div>
    </section>
  );
}
