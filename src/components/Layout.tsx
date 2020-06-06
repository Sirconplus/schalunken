import React from 'react';
import { withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Navbar from './Navbar';
import './all.sass';
import useSiteMetadata from './SiteMetadata';

const TemplateWrapper: React.FC = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-64x64.png`} sizes="64x64" />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-128x128.png`} sizes="128x128" />

        <link rel="mask-icon" href={`${withPrefix('/')}img/logo.svg`} color="#ff4400" />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />

        <script src="https://kit.fontawesome.com/e197a4ad0d.js" crossOrigin="anonymous" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
