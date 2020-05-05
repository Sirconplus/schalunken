import CMS from 'netlify-cms-app';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import PodcastEpisodePreview from './preview-templates/PodcastEpisodePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('podcast', PodcastEpisodePreview);
