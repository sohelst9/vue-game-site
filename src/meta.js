// src/meta.js

export function setDefaultMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  canonical,
}) {
  document.title = title || "Default Title";

  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute(
      "content",
      description || "Default description for all pages."
    );
  }

  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  if (ogTitleMeta) {
    ogTitleMeta.setAttribute("content", ogTitle || "Default OG Title");
  }

  const ogDescriptionMeta = document.querySelector(
    'meta[property="og:description"]'
  );
  if (ogDescriptionMeta) {
    ogDescriptionMeta.setAttribute(
      "content",
      ogDescription || "Default OG description."
    );
  }

  const ogImageMeta = document.querySelector('meta[property="og:image"]');
  if (ogImageMeta) {
    ogImageMeta.setAttribute(
      "content",
      ogImage || "https://yourwebsite.com/path-to-image/default-og-image.webp"
    );
  }

  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute(
      "href",
      canonical || "https://naptechgames.com/"
    );
  }
}
