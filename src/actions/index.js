export const FETCH_POST = 'fetch_post';
import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const KEY = '?key=random123';

export function fetchPosts(){
  let request = axios.get(`${ROOT_URL}`);
  return{
    type: FETCH_POST,
    payload: request
  };
}
