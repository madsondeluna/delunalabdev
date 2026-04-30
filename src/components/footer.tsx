export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "3rem 2.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8125rem",
            color: "var(--text)",
            marginBottom: "0.25rem",
          }}
        >
          developed by gromads
        </p>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            color: "var(--muted)",
          }}
        >
          &copy; {year} gromads/madsondeluna - all rights reserved
        </p>
      </div>

      <div className="footer-links" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <a
          href="mailto:madsondeluna@gmail.com"
          className="link-muted"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
          }}
        >
          madsondeluna@gmail.com
        </a>
        <span
          className="footer-separator"
          style={{
            width: "1px",
            height: "12px",
            background: "var(--border)",
          }}
        />
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "github", url: "#" },
            { label: "youtube", url: "#" },
            { label: "linkedin", url: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="link-muted"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6875rem",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
