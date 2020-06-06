import React from 'react';

import Layout from '../layout/default';
import PodcastRoll from '../components/PodcastRoll';
import { StyledImageContainer } from './index.styles';

const PodcastIndexPage: React.FC = () => {
  return (
    <Layout>
      <StyledImageContainer>
        <img src="/img/logo_transparent.png" alt="Schalunken logo" />
      </StyledImageContainer>
      <section className="section">
        <div className="container">
          <div className="content">
            <PodcastRoll />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PodcastIndexPage;
