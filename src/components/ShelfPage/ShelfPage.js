import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

function ShelfPage() {
  
  const shelf= useSelector(store=>store.shelf)
  
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
        {shelf.map(item=>(
          <li key={item.id}> item={item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShelfPage;
