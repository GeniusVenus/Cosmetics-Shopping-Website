import { useState, useEffect } from 'react';

export default function Test1() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      const response = await fetch('https://api.publicapis.org/entries');
      const data = await response.json();
      setList(data.entries);
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };

  return (
    <div>
      <ul>
        <div>Hello</div>
        {list && list.map((api, index) => (
          <li key={index}>{api.API}</li>
        ))}
      </ul>
    </div>
  );
}
