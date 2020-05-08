import React from 'react';

import Layout from '../components/Layout';
import PodcastRoll from '../components/PodcastRoll';

export default class PodcastIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`
          }}
        >

            <img src={'/img/logo_transparent.png'}/>
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
  }
}
