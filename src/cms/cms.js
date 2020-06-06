import NetlifyCmsApp from 'netlify-cms-app';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import PodcastEpisodePreview from './preview-templates/PodcastEpisodePreview';
import UuidWidget from './customWidgets/uuid/Controll';
import UuidPreview from './customWidgets/uuid/Preview';

NetlifyCmsApp.registerPreviewTemplate('about', AboutPagePreview);
NetlifyCmsApp.registerPreviewTemplate('podcast', PodcastEpisodePreview);

NetlifyCmsApp.registerWidget('id', UuidWidget, UuidPreview);
NetlifyCmsApp.init();
