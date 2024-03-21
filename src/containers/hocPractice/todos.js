/* eslint-disable react/prop-types */
import React from 'react'; // { useEffect, useState }
import HOC from './HOC';

function Todos({ data = [], term = '' }) {
  //   const [todos, setTodos] = useState([]);
  //   const [term, setTerm] = useState('');

  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/todos/')
  //       .then((res) => res.json())
  //       .then((json) => setTodos(json));
  //   }, []);

  return (
    <div>
      {/* <h3>Todos</h3>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      /> */}
      {data
        .slice(0, 10)
        .filter((todo) => todo.title.indexOf(term) >= 0)
        .map(({ title, id }) => (
          <div key={id}>
            <strong>{title}</strong>
          </div>
        ))}
    </div>
  );
}
const SearchTodos = HOC(Todos, 'todos');
export default SearchTodos;
