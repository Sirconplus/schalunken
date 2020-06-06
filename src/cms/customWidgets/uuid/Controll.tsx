import React from 'react';
import crypto from 'crypto';

interface UuidWidgetProps {
  onChange: () => void;
  forID: string;
  value?: string;
  classNameWrapper: string;
}

export default class UuidWidget extends React.PureComponent<UuidWidgetProps> {
  render(): JSX.Element {
    const { value } = this.props;
    const id = value === undefined || value === '' ? crypto.randomBytes(16).toString('hex') : value;
    const { forID, classNameWrapper } = this.props;
    return <input id={forID} className={classNameWrapper} type="text" value={id} disabled />;
  }
}
