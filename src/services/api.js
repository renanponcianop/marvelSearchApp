import axios from 'axios';

export default axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/'
})
