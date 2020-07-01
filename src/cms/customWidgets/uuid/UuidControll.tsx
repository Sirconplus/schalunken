import React from 'react';
import crypto from 'crypto';

interface UuidWidgetProps {
  onChange: (value: string) => void;
  forID: string;
  value?: string;
  classNameWrapper: string;
}

export default class UuidControl extends React.PureComponent<UuidWidgetProps> {
  render(): JSX.Element {
    const { value, onChange } = this.props;
    if (value === undefined || value === '') {
      onChange(crypto.randomBytes(16).toString('hex'));
    }
    const { forID, classNameWrapper } = this.props;
    return (
      <input
        id={forID}
        className={classNameWrapper}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled
      />
    );
  }
}
