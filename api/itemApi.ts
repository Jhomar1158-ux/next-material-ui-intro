import axios from 'axios';

const itemApi = axios.create({
    baseURL: 'https://fakestoreapi.com/products'
})

export default itemApi;