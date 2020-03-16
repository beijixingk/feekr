import { put } from 'redux-saga/effects'
import * as types from './action-types'

import { get } from 'utils/http'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loadData(action) {
   try {
      const result = yield get({
          url:action.url
          
      })
      yield put({type: types.LOADDATA, data:result}); //????
   } catch (e) {
     
   }
}
export {
    types,
    loadData as action
}