import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-ae260.firebaseio.com/',
});

export default instance;
