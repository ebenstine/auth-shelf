import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import ShelfForm from '../ShelfForm/ShelfForm';
import {useEffect} from 'react';

function ShelfPage() {
  const dispatch =useDispatch();
  const shelf = useSelector(store=>store.shelf)
  
  
  useEffect(()=> {
  dispatch({
    type: 'FETCH_SHELF'
});
}, []);

  
  return (
    <div className="container">
      
      <p>All of the available items can be seen here.</p>
      <ShelfForm/>
      <ul>
        {shelf.map(item=>(
          <li key={item.id}> {item.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShelfPage;
