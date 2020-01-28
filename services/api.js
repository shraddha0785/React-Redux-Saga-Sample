// services/api.js
import axios from 'axios'
export function fetchUser(userId) {
    // `axios` function returns promise, you can use any ajax lib, which can
    // return promise, or wrap in promise ajax call
    return axios.get('/api/user/' + userId);
  };