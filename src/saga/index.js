import { all } from 'redux-saga/effects';
import {ItemSaga} from './itemSagas'
function* rootSaga() {
    yield all([
        ...ItemSaga
    ]);
}
export default rootSaga;