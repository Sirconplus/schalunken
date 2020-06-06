import React from 'react';
import { Converter } from 'showdown';
import { PodcastEpisodeTemplate } from '../../templates/podcast-episode';

const converter = new Converter();

const PodcastEpisodePreview: React.FC = ({ entry }: { getIn: (any) => string }) => {
  return (
    <div className="episode-item is-parent column is-12">
      <PodcastEpisodeTemplate
        description={converter.makeHtml(entry.getIn(['data', 'description']))}
        summary={converter.makeHtml(entry.getIn(['data', 'summary']))}
        title={entry.getIn(['data', 'title'])}
        audiofile={entry.getIn(['data', 'audiofile'])}
      />
    </div>
  );
};

export default PodcastEpisodePreview;
