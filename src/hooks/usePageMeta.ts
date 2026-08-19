import { useEffect } from 'react';

const SITE_NAME = 'Crown Commercial Furniture';
const SITE_URL = 'https://crowncommercialfurniture.com';

interface PageMeta {
  title: string;
  description?: string;
  image?: string;
  canonical?: string;
  keywords?: string;
}

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const usePageMeta = ({ title, description, image, canonical, keywords }: PageMeta) => {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }
    setMeta('property', 'og:title', fullTitle);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:type', 'product');
    if (image) {
      setMeta('property', 'og:image', image);
      setMeta('name', 'twitter:image', image);
    }
    if (canonical) {
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', `${SITE_URL}${canonical}`);
    }
    if (keywords) setMeta('name', 'keywords', keywords);

    return () => {
      document.title = `${SITE_NAME} | Premium Commercial Furniture`;
    };
  }, [title, description, image, canonical, keywords]);
};

export default usePageMeta;
export { SITE_NAME, SITE_URL };