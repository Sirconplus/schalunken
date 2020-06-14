import React from 'react';

import Layout from '../layout/default';
import PodcastRoll from '../components/PodcastRoll';
import { StyledImageContainer } from '../styles/index.styles';

const PodcastIndexPage: React.FC = () => {
  return (
    <Layout>
      <StyledImageContainer>
        <img src="/img/Schalunkenbanner.png" alt="Schalunken banner" />
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
