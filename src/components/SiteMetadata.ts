import { graphql, useStaticQuery } from 'gatsby';

export interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
}

const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
