import React from 'react';

export const HTMLContent: React.FC<ContentProps> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content: React.FC<ContentProps> = ({ content, className }) => <div className={className}>{content}</div>;

interface ContentProps {
  content: string;
  className?: string;
}

export default Content;
