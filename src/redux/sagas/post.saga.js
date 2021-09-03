import axios from "axios"
import {takeLatest, put} from 'redux-saga/effects'

function* postShelf() {
    try{
        const res = yield axios.post('/api/shelf', action.payload);
        console.log(action.payload);
        yield put ({
            type:'SET_SHELF',
            payload: res.data
        });
    }catch (err) {
        console.log( 'Post shelf', err);
    }
}

function* postShelfSaga(){
    yield takeLatest('POST_SHELF', postShelf)
}

export default postShelfSaga;