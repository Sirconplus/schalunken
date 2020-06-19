import NetlifyCmsApp from 'netlify-cms-app';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import PodcastEpisodePreview from './preview-templates/PodcastEpisodePreview';
import UuidControl from './customWidgets/uuid/UuidControll';
import UuidPreview from './customWidgets/uuid/UuidPreview';

NetlifyCmsApp.registerPreviewTemplate('about', AboutPagePreview);
NetlifyCmsApp.registerPreviewTemplate('podcast', PodcastEpisodePreview);

NetlifyCmsApp.registerWidget('uuid', UuidControl, UuidPreview);
NetlifyCmsApp.init();
