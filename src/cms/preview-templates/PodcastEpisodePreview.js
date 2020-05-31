import React from 'react';
import { PodcastEpisodeTemplate } from '../../templates/podcast-episode';
import showdown from 'showdown'

const converter = new showdown.Converter();

const PodcastEpisodePreview = ({ entry }) => {
  return (
    <PodcastEpisodeTemplate
      description={converter.makeHtml(entry.getIn(['data', 'description']))}
      title={entry.getIn(['data', 'title'])}
      audiofile={entry.getIn(['data', 'audiofile']).replace('/podcast/', '')}
    />
  );
};

export default PodcastEpisodePreview;
