type StructuredDataOptions = {
  path: string;           // "/masters"
  name: string;           // "Tổ sư | Patriarchal Zen"
  description: string;    // "Tổ sư"
  lang?: string;          // "vi"
};

export function generateStructuredData({
                                         path,
                                         name,
                                         description,
                                         lang = "vi",
                                       }: StructuredDataOptions) {
  const baseUrl = "https://patriarchalzen.quest";

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}${path}`,
    "url": `${baseUrl}${path}`,
    "name": name,
    "description": description,
    "isPartOf": {
      "@type": "WebSite",
      "url": baseUrl,
      "name": "Patriarchal Zen",
      "description": "Tổ sư",
    },
    "inLanguage": lang,
  };
}

export const structuredDataMasters = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://patriarchalzen.quest/masters",
  "url": "https://patriarchalzen.quest/masters",
  "name": "Tổ sư | Patriarchal Zen",
  "description": "Tổ sư",
  "isPartOf": {
    "@type": "WebSite",
    "url": "https://patriarchalzen.quest",
    "name": "Patriarchal Zen",
    "description": "Tổ sư"
  },
  "inLanguage": "vi"
};
