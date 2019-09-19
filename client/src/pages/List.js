import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function List() {

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('/api/getList')
    .then(res => setList(res.data));

  }, [])

  return (
    <div className="App">
    <h1>List of Items</h1>
    {/* Check to see if any items are found*/}
    {list.length ? (
      <div>
        {/* Render the list of items */}
        {list.map((item) => {
          return(
            <div key={item}>
              {item}
            </div>
          );
        })}
      </div>
    ) : (
      <div>
        <h2>No List Items Found</h2>
      </div>
    )
  }
  </div>
  )
}
