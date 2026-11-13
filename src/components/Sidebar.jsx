import { ArrowUpRight, Heart, LayoutDashboard, Shirt, Sparkles, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/wardrobe", label: "My wardrobe", icon: Shirt },
  { to: "/outfit-studio", label: "Style studio", icon: Sparkles },
  { to: "/favorites", label: "Favorites", icon: Heart },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <button
        className={`drawer-overlay${isOpen ? " is-visible" : ""}`}
        type="button"
        onClick={onClose}
        aria-label="Close navigation"
        tabIndex={isOpen ? 0 : -1}
      />

      <aside
        className={`mobile-drawer${isOpen ? " is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="drawer-heading">
          <span className="drawer-brand">FITLY<span>.</span></span>
          <button
            className="drawer-close"
            type="button"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={19} />
          </button>
        </div>

        <p className="drawer-kicker">YOUR PERSONAL STYLE SPACE</p>
        <nav className="drawer-nav" aria-label="Mobile navigation">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `drawer-link${isActive ? " is-active" : ""}`
              }
            >
              <Icon size={18} strokeWidth={1.8} />
              <span>{label}</span>
              <ArrowUpRight size={15} className="drawer-link-arrow" />
            </NavLink>
          ))}
        </nav>

        <div className="drawer-footer">
          <span className="drawer-footer-mark">F</span>
          <p>Wear what you own.<br />Love how you style it.</p>
          <small>THE ART OF GETTING DRESSED</small>
        </div>
      </aside>
    </>
  );
}
