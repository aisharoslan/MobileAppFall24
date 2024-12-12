import {useState} from 'react'
import {REACT_APP_API_KEY} from '@env'
import axios from 'axios'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (stateCode) => {
    try {
      const response = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=${stateCode}&limit=15&api_key=${REACT_APP_API_KEY}`)
      setResults(response.data.data)
      setErrorMessage('')
    } catch (err) {
      console.log(err)
      setErrorMessage('Something went wrong. Check your data connection.')
    }
  }

  return [searchApi, results, errorMessage]
}
