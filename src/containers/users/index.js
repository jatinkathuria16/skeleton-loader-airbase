/* eslint-disable react/prop-types */

// core
import React from 'react';

// custom components
import UserCard from '../../components/userCards';
import UserCardSkeleton from '../../components/skeletonLoader/userCardSkeleton';

export default function Users({ users, hasData }) {
  return (
    <div>
      {hasData
        ? users?.map((user) => <UserCard user={user} key={user?.email} />)
        : [1, 2, 3, 4, 5].map((_i, index) => <UserCardSkeleton key={index} />)}
    </div>
  );
}
