import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-e0b9a.firebaseio.com/',
});

export default instance;