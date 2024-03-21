/* eslint-disable react/prop-types */
import React from 'react'; // , { useEffect, useState }
import HOC from './HOC';

function Users({ data = [], term = '' }) {
  //   const [users, setUsers] = useState([]);
  //   const [term, setTerm] = useState('');

  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/users/')
  //       .then((res) => res.json())
  //       .then((json) => setUsers(json));
  //   }, []);

  return (
    <div>
      {data
        .slice(0, 10)
        .filter((user) => user.name.indexOf(term) >= 0)
        .map(({ name, id }) => (
          <div key={id}>
            <strong>{name}</strong>
          </div>
        ))}
    </div>
  );
}
const SearchUsers = HOC(Users, 'users');
export default SearchUsers;
