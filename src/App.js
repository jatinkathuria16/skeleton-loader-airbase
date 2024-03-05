import React from 'react';
import Users from './containers/users';
import Comments from './containers/comments';
// import SkeletonLoader from './skeleton';

function App() {
  return (
    <div className="App">
      <header>
        <h1> Skeleton Loaders</h1>
      </header>
      <div className="content">
        <Comments />
        <Users />
      </div>
    </div>
  );
}

export default App;
