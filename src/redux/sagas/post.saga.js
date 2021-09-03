import axios from "axios"
import {takeLatest, put} from 'redux-saga/effects'



function* postShelf() {
  
    try{
        const res = yield axios.post('/api/shelf', action.payload);
        
        yield put ({
            type:'FETCH_SHELF',
            
        });
    }catch (err) {
        console.log( 'Post shelf', err);
    }
}

function* postShelfSaga(){
    yield takeLatest('POST_SHELF', postShelf)
}

export default postShelfSaga;