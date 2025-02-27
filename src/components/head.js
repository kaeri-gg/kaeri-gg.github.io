import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
          }
        }
      }
    `,
  );

  const { defaultTitle, defaultDescription, siteUrl, defaultImage } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="google-site-verification" content="fXnCu2ds7rsAnsI4doUbWe_GjUFvhEpao24X23UsnIY" />

      <link rel="icon" type="image/png" href="../images/favicons/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="../images/favicons/favicon.svg" />
      <link rel="shortcut icon" href="../images/favicons/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="../images/favicons/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="Kaeri_gg" />
      <link rel="manifest" href="../images/favicons/site.webmanifest" />
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
