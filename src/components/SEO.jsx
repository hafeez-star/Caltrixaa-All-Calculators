import { useEffect } from "react";

const SITE_URL = "https://caltrixaa.vercel.app";

function SEO({
  title,
  description,
  keywords = "",
  type = "website",
  schema = null,
}) {
  useEffect(() => {
    // Page title
    document.title = title;

    // Helper function
    function setMeta(name, content) {
      if (!content) return;

      let element = document.querySelector(`meta[name="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    }

    function setProperty(property, content) {
      if (!content) return;

      let element = document.querySelector(
        `meta[property="${property}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    }

    // Description
    setMeta("description", description);

    // Keywords
    setMeta("keywords", keywords);

    // Robots
    setMeta(
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    // Author
    setMeta("author", "Caltrixaa");

    // Open Graph
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:type", type);
    setProperty("og:url", window.location.href);
    setProperty("og:site_name", "Caltrixaa");

    // Twitter
    setMeta("twitter:card", "summary");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    // Canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      SITE_URL + window.location.pathname
    );

    // Structured data
    const oldSchema = document.getElementById("caltrixaa-schema");

    if (oldSchema) {
      oldSchema.remove();
    }

    if (schema) {
      const script = document.createElement("script");

      script.id = "caltrixaa-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);

      document.head.appendChild(script);
    }
  }, [title, description, keywords, type, schema]);

  return null;
}

export default SEO;