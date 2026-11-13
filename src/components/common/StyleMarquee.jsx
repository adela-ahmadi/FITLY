const words = [
  "DRESS WITH INTENTION",
  "MAKE MORE OF WHAT YOU OWN",
  "FIND YOUR EVERYDAY SIGNATURE",
  "STYLE STARTS IN YOUR WARDROBE",
];

export default function StyleMarquee() {
  return (
    <div className="editorial-marquee" aria-label={words.join(" · ")}>
      <div className="editorial-marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="editorial-marquee-group" key={copy}>
            {words.map((word) => (
              <span className="editorial-marquee-word" key={`${copy}-${word}`}>
                {word}
                <i>✳</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
