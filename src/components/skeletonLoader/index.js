// core
import React from 'react';

// styles
import './skeleton.css';

// eslint-disable-next-line react/prop-types
function SkeletonLoader({ type }) {
  const skeletonClasses = `skeleton ${type}`;

  return <div className={skeletonClasses} />;
}

export default SkeletonLoader;
