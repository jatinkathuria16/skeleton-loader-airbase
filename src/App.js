// core
import React from 'react';

// custom components
// import Users from './containers/users';
// import Stories from './containers/stories';
import Companies from './containers/companies';

function App() {
  // const [stories, setStories] = useState(null);
  // const [users, setUsers] = useState(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch('https://dummyjson.com/posts?limit=5&skip=2')
  //       .then((res) => res.json())
  //       .then((json) => setStories(json?.posts));
  //   }, 5000);
  //   setTimeout(() => {
  //     fetch('https://dummyjson.com/users?limit=5')
  //       .then((res) => res.json())
  //       .then((json) => setUsers(json.users));
  //   }, 5000);
  // }, []);

  return (
    <div className="App">
      {/* <header>
        <h1> Skeleton Loaders</h1>
      </header>
      <div className="content">
        <Stories stories={stories} hasData={!!stories && !!users} />
        <Users users={users} hasData={!!stories && !!users} />
      </div> */}
      <Companies />
    </div>
  );
}

export default App;
