import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Woodbeam';
const SITE_URL = 'https://woodbeamindia.com'; // Adjust to the user's actual domain

interface PageMetaProps {
  title: string;
  description?: string;
  image?: string;
  canonical?: string;
  keywords?: string;
}

const PageMeta: React.FC<PageMetaProps> = ({ title, description, image, canonical, keywords }) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta property="og:title" content={fullTitle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      
      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}
      
      {canonical && (
        <link rel="canonical" href={`${SITE_URL}${canonical}`} />
      )}
      
      {keywords && (
        <meta name="keywords" content={keywords} />
      )}
    </Helmet>
  );
};

export default PageMeta;
export { SITE_NAME, SITE_URL };
