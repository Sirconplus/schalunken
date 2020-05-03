import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import PodcastEpisodePreview from './preview-templates/PodcastEpisodePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('podcast', PodcastEpisodePreview)
