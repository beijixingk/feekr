import { takeEvery } from 'redux-saga/effects'
import { sagas as main } from 'pages/main/' //?

let { GETLIST } = main.types //?

function* sagas() {
  yield takeEvery(GETLIST, main.action);
}


export default sagas;