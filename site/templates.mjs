import { company, navigation } from "./config.mjs";

function getDepth(outputPath) {
  const segments = outputPath.split("/").slice(0, -1).filter(Boolean);
  return segments.length === 0 ? "" : "../".repeat(segments.length);
}

function renderNav(activeKey, depth) {
  return navigation
    .map(
      (item) => {
        const normalizedHref = `${depth}${item.href.replace(/^\//, "")}`;

        return `
        <a class="nav-link${item.key === activeKey ? " is-active" : ""}" href="${normalizedHref}">${item.label}</a>
      `;
      }
    )
    .join("");
}

export function renderPage(page) {
  const depth = getDepth(page.outputPath);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${depth}styles/styles.css">
</head>
<body>
  <div class="site-bg"></div>
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="${depth}index.html">
        <img src="${depth}images/lucky21labs.svg" alt="Lucky21Labs logo" class="brand-mark">
        <div class="brand-copy">
          <span class="brand-name">Lucky21 Labs</span>
          <span class="brand-tag">Product studio</span>
        </div>
      </a>
      <nav class="site-nav" aria-label="Primary">
        ${renderNav(page.navKey, depth)}
      </nav>
    </header>

    <main class="main-content ${page.heroClass}">
      ${page.content}
    </main>

    <footer class="site-footer">
      <div>
        <span class="footer-title">Lucky21 Labs</span>
        <p>Focused software for web, mobile, and AI.</p>
      </div>
      <div>
        <span class="footer-title">Products</span>
        <a href="${depth}togu/index.html">togu suite overview</a>
        <a href="${depth}togu/image-resizer/index.html">togu | Image Resizer</a>
        <a href="${depth}companion/index.html">AI companion coming soon</a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a href="${depth}legal/privacy/index.html">Privacy Policy</a>
        <a href="${depth}legal/terms/index.html">Terms &amp; Conditions</a>
      </div>
      <div>
        <span class="footer-title">Support</span>
        <a href="mailto:${company.supportEmail}">${company.supportEmail}</a>
        <p>${company.location}</p>
      </div>
    </footer>

    <div class="site-legal">
      <span>&copy; ${company.year} ${company.name}</span>
    </div>
  </div>
</body>
</html>`;
}
