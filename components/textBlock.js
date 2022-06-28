// import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';
import serializers from './serializers';

export default function TextBlock({ content } = {}) {
  return (
    <BlockContent
      blocks={content}
      serializers={serializers}
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
      // className={markdownStyles.markdown}
    />
  );
}
