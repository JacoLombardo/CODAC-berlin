import * as React from 'react';
import Link from 'next/link'

const AnchorTag = ({ children: link, ...props }) => {

  if (link) {
    return (
      <Link href={props.href} target="_blank" rel="noopener noreferrer">
        {link}
      </Link>
    );
  } else {
    return null;
  }
};

export default AnchorTag;
