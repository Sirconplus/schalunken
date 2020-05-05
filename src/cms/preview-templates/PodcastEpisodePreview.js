import React from 'react';
import PropTypes from 'prop-types';
import { PodcastEpisodeTemplate } from '../../templates/podcast-episode';

const PodcastEpisodePreview = ({ entry, widgetFor }) => {
  return (
    <PodcastEpisodeTemplate
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
      audiofile={entry.getIn(['data', 'audiofile'])}
    />
  );
};

PodcastEpisodePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default PodcastEpisodePreview;
