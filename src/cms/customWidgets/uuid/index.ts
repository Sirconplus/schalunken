import { CmsWidgetParam } from 'netlify-cms-core';
import controlComponent from './UuidControll';
import previewComponent from './UuidPreview';

const Widget = (opts = {}): CmsWidgetParam =>
  ({
    name: 'uuid',
    controlComponent,
    previewComponent,
    ...opts
  } as CmsWidgetParam);

export const NetlifyCmsWidgetUuid = { Widget, controlComponent, previewComponent };
export default NetlifyCmsWidgetUuid;
