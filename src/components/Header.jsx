import { useEffect } from "react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Overview", end: true },
  { to: "/wardrobe", label: "Wardrobe" },
  { to: "/outfit-studio", label: "Style studio" },
  { to: "/favorites", label: "Favorites" },
];

export default function Header({ title, subtitle, onMenuClick }) {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const updateScroll = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
        root.style.setProperty(
          "--scroll-progress",
          String(Math.min(1, Math.max(0, progress))),
        );
        root.style.setProperty("--scroll-y", `${window.scrollY}px`);
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      root.style.removeProperty("--scroll-progress");
      root.style.removeProperty("--scroll-y");
    };
  }, []);

  return (
    <>
      <div className="golden-thread" aria-hidden="true">
        <i />
      </div>

      <header className="topbar" id="top">
        <div className="topbar-inner">
          <NavLink className="brand" to="/" aria-label="FITLY home">
            <span className="brand-monogram">F</span>
            <span className="brand-wordmark">
              FITLY<span>.</span>
              <small>THE PERSONAL WARDROBE JOURNAL</small>
            </span>
          </NavLink>

          <nav className="topbar-nav" aria-label="Main navigation">
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `topbar-link${isActive ? " is-active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="topbar-context">
            <span className="topbar-context-label">NOW VIEWING</span>
            <strong>{title}</strong>
            <small>{subtitle}</small>
          </div>

          <button
            className="topbar-menu"
            type="button"
            onClick={onMenuClick}
            aria-label="Open navigation menu"
          >
            <Menu size={21} />
          </button>
        </div>

        <div className="scroll-progress" aria-hidden="true">
          <span />
        </div>
      </header>
    </>
  );
}
