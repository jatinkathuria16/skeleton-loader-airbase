/* eslint-disable react/prop-types */

// core
import React from 'react';

// custom components
import SkeletonLoader from './index';
import Animation from './skeletonAnimation';

// styles
import './skeleton.css';

const UserCardSkeleton = ({ theme }) => {
  const themeClass = theme || 'light';
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-profile">
        <div>
          <SkeletonLoader type="avatar" />
        </div>
        <div>
          <SkeletonLoader type="title" />
          <SkeletonLoader type="text" />
          <SkeletonLoader type="longText" />
          <SkeletonLoader type="text" />
        </div>
      </div>
      <Animation />
    </div>
  );
};

export default UserCardSkeleton;
