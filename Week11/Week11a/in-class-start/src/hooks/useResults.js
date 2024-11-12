import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
        const response = await yelp.get('/search', {
            params: {   
            limit: 50,
            term: searchTerm,
            location: 'NYC',
            },
        })
        setResults(response.data.businesses)
        setErrorMessage('') // must clear out error msg
        } catch(err) {
            console.log(err)
        setErrorMessage('Something went wrong. Check your internet connection.')
        } 
    }

    // NO NO NO NEVER DO THIS, BAD!!
    // searchApi('sushi) - DON'T WANNA DO THIS - component renders - sets 2 piece of state, everything re-renders - keeps calling searchApi('sushi') - API shut down - pinged 1000x
    // once when component is mounted
    // commented out to avoid API limit
    // useEffect(() => {
    //     // do stuff
    //     searchApi('sushi')
    // }, []) 
    // if leave blank for 2nd param, everytime re-render it's called
    // if empty array for 2nd param, run once when component first mounts
    // could pass values from state that changes over time, watch smth that changes, each look at searchApi everytime error, everytime term changes etc - an array of things u wanna watch for

    return [searchApi, results, errorMessage]
}