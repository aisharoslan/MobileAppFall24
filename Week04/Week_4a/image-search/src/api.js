// use axios here (for http requests) - better than fetch
// file with no react - just a helper function to use in react
// to hit the api

import axios from 'axios' // axios itself uses term to search images
const apiKey = process.env.REACT_APP_API_KEY;

// flag function as async when using await - esp when using api
const searchImages = async (term) => {
    // get, post, put etc - then pass in api/url and an options object/parameters like headers (where u pass in secret stuff)
    // need the await keyword to wait for response before moving on then return it - do not execute any more code until response is resolved - then keep going - flag the function as async or any functions using this function as async
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: apiKey // access key
        },
        params: {
            query: term
        },
    })
    return response.data.results
}

export default searchImages