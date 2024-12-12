import {useState} from 'react'
import {REACT_APP_API_KEY} from '@env'
import axios from 'axios'

export default () => {
  const [result, setResult] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (parkCode) => {
    try {
      const response = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&limit=1&api_key=${REACT_APP_API_KEY}`)
      setResult(response.data.data[0])   
      setErrorMessage('')
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong. Check your data connection.')
    }
  };

  return [searchApi, result, errorMessage]
}
