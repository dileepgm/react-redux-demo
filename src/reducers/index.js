import { combineReducers } from 'redux';
import PostReducer from './reducer_fetchposts';

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;
