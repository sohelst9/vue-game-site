// src/meta.js

export function setDefaultMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  canonical,
}) {
  document.title = title || "Welcome to gaming site";

  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute(
      "content",
      description || "Welcome to gaming site"
    );
  }

  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  if (ogTitleMeta) {
    ogTitleMeta.setAttribute("content", ogTitle || "Welcome to gaming site");
  }

  const ogDescriptionMeta = document.querySelector(
    'meta[property="og:description"]'
  );
  if (ogDescriptionMeta) {
    ogDescriptionMeta.setAttribute(
      "content",
      ogDescription || "Welcome to gaming site"
    );
  }

  const ogImageMeta = document.querySelector('meta[property="og:image"]');
  if (ogImageMeta) {
    const defaultOgImage = '/image/512.webp';
    ogImageMeta.setAttribute(
      "content",
      ogImage || defaultOgImage
    );
  }

  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    const baseUrl = window.location.origin; // Dynamic base URL
    canonicalLink.setAttribute(
      "href",
      canonical || `${baseUrl}/`
    );
  }
}
