/* eslint-disable react/prop-types */

// core
import React from 'react';

// custom components
import SkeletonAnimation from './skeletonAnimation';
import SkeletonElement from './index';

// styles
import './skeleton.css';

const UserStorySkeleton = ({ theme }) => {
  const themeClass = theme || 'light';

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <div className="collection">
          <SkeletonElement type="tag" />
          <SkeletonElement type="tag" />
          <SkeletonElement type="tag" />
        </div>
      </div>
      <SkeletonAnimation />
    </div>
  );
};

export default UserStorySkeleton;
