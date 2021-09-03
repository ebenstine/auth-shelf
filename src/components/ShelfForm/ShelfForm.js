import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
function ShelfForm() {
    
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    
    let [description, setDescription] = useState('')
    let [url, setUrl] = useState('')
    
 
    
    
    const handleSubmit = (event) => {
        console.log('ButtonClicked');
        event.preventDefault();
    
	console.log('DISPATCH LOG',description, url, user.id);
        dispatch({ 
            
		type: 'POST_SHELF', // Need to determine Saga and need to post to DB
        payload: {
            description: description,
            image_url: url,
            user_id: user.id
            }
        })
    
         setDescription('');
         setUrl('');
    }

    return (
        <>
        <h2>Add you item</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Description" value={description} 
            onChange={(evt) => setDescription(evt.target.value) } />
            <input type="text"placeholder="Link to Image URl "value={url} 
            onChange={(evt) => setUrl(evt.target.value)} />
            <button type="submit">Add</button>
        </form>
        </>
    )
}
    
   
   
  

export default ShelfForm
