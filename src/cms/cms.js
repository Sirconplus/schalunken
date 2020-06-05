import CMS from 'netlify-cms-app';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import PodcastEpisodePreview from './preview-templates/PodcastEpisodePreview';
import React from 'react';
import UuidWidget from './customWidgets/uuid/Controll';
import UuidPreview from './customWidgets/uuid/Preview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('podcast', PodcastEpisodePreview);

CMS.registerWidget('id', UuidWidget, UuidPreview);
CMS.init();
