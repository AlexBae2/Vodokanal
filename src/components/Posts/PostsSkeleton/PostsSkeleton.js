import React from 'react';
import Skeleton from './Skeleton/Skeleton.js';

const PostsSkeleton = ({ isLoading }) => {
  return (
    <>
      {isLoading &&
        [...Array(4).keys()].map((u) => (
          <div key={u.id} style={{ overflow: 'hidden' }}>
            <Skeleton />
          </div>
        ))}
    </>
  );
};

export default PostsSkeleton;
