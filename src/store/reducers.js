import { combineReducers } from 'redux'
import { reducers as list } from 'pages/main/'

export default combineReducers({
    main:list
})