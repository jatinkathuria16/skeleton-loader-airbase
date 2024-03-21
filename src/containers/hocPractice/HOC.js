import React, { useEffect, useState } from 'react';

export default function withHOC(WrappedComponent, entity) {
  function WithHOC() {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState('');

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${entity}/`)
        .then((res) => res.json())
        .then((json) => setData(json));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
      <div>
        <h3>{entity}</h3>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <WrappedComponent data={data} term={term} />
      </div>
    );
  }
  return WithHOC;
}
