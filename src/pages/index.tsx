import React from 'react';

import Layout from '../components/Layout';
import PodcastRoll from '../components/PodcastRoll';

const PodcastIndexPage: React.FC = () => {
  return (
    <Layout>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/blog-index.jpg')`
        }}
      >
        <img src={"/img/logo_transparent.png"} alt={"Schalunken logo"} />
      </div>
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
