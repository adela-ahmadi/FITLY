import { ArrowUpRight, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <NavLink className="footer-brand" to="/" aria-label="FITLY home">
            <span className="footer-brand-mark">F</span>
            <span className="footer-brand-name">FITLY<span>.</span></span>
          </NavLink>
          <p className="footer-tagline">
            A little more intention.<br />
            A lot more you.
          </p>
          <span className="footer-caption">THE PERSONAL WARDROBE JOURNAL</span>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <nav className="footer-links" aria-label="Footer navigation">
            <NavLink to="/">Overview</NavLink>
            <NavLink to="/wardrobe">My wardrobe</NavLink>
            <NavLink to="/outfit-studio">Style studio</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </nav>
        </div>

        <div className="footer-column">
          <h3>The FITLY idea</h3>
          <div className="footer-links">
            <a href="#top">Wear what you own</a>
            <a href="#top">Style with intention</a>
            <a href="#top">Make every piece count</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} FITLY. THE PERSONAL EDIT.</span>
        <span className="footer-made">Made for the love of getting dressed <Heart size={13} /></span>
        <a className="footer-back-top" href="#top">
          BACK TO TOP <ArrowUpRight size={13} />
        </a>
      </div>
    </footer>
  );
}
