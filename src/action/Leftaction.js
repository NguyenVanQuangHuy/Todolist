import * as types from '../constant'
function getListItemRequest() {
    return (
        {
            type: types.GET_ITEM_REQUEST,   
            
        }
    )
}
function getListItemSuccess(payload) {
    return (
        {   
            type: types.GET_ITEM_SUCCESS,
            payload
        }
    )
}

function getListItemFailure(payload) {
    return (
        {
            type: types.GET_ITEM_FAILURE,   
            payload
        }
    )
}

export {getListItemFailure, getListItemRequest, getListItemSuccess}