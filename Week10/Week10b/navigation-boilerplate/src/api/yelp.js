import axios from 'axios'
import { REACT_APP_API_KEY } from '@env'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses', // no slash at the end
    headers: {
        // where we do auth
        Authorization: `Bearer ${REACT_APP_API_KEY}`
    }
})