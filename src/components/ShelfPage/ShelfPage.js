import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import ShelfForm from '../ShelfForm/ShelfForm';
import {useEffect} from 'react';
import axios from 'axios';

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
          <li key={item.id}> {item.description} <img src={item.image_url}></img> <button onClick={
            ()=> {
              axios.delete(`/api/shelf/${item.id}`)
              dispatch({
                type: 'FETCH_SHELF'
              })
            }
          }
          
          >DELETE</button></li>
        ))}
      </ul>
    </div>
  );
}

export default ShelfPage;
