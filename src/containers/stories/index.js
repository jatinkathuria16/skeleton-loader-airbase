/* eslint-disable react/prop-types */
// core
import React from 'react';

// custom components
import UserStories from '../../components/userStories';
import UserStorySkeleton from '../../components/skeletonLoader/userStoriesSkeleton';

export default function Stories({ stories, hasData }) {
  return (
    <div className="container">
      {hasData
        ? stories?.map((story) => (
            <UserStories story={story} key={story?.title} />
          ))
        : [1, 2, 3, 4, 5].map((_i, index) => <UserStorySkeleton key={index} />)}
    </div>
  );
}
