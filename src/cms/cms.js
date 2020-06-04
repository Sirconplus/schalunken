import CMS from 'netlify-cms-app';
import { v4 as uuidv4 } from 'uuid';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import PodcastEpisodePreview from './preview-templates/PodcastEpisodePreview';
import React from 'react';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('podcast', PodcastEpisodePreview);

const UuidWidget = (props) => {
  if (props.value === undefined || props.value === '') {
    props.value = uuidv4();
  }
  return (
    <input
      id={props.forID}
      className={props.classNameWrapper}
      type={'text'}
      value={props.value}
      onChange={() => {}}
      disabled
    />
  );
};

CMS.registerWidget('id', UuidWidget);
CMS.init();
