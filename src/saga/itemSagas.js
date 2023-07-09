import { put, takeEvery } from 'redux-saga/effects';
import callAPI from '../fecthapi/getitem'
import * as types from '../constant'
import * as actions from '../action/Leftaction'
function* getListItem() {
    try {
        const res = yield callAPI()
        yield put (actions.getListItemSuccess(res))
    } catch (error) {
        yield put ({
            type: types.GET_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getListItem)
]

