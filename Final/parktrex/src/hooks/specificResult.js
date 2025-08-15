import { useState } from 'react'
import { REACT_APP_API_KEY } from '@env'
import axios from 'axios'

export default () => {
  const [result, setResult] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (parkCode) => {
    try {
      const response = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&limit=1&api_key=${REACT_APP_API_KEY}`)

      if (response && response.data && response.data.data && response.data.data.length > 0) {
        setResult(response.data.data[0])
        setErrorMessage('')
      } else {
        setErrorMessage('No park found with that code.')
        setResult([])
      }
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong. Check your data connection.')
      setResult([])
    }
  };

  return [searchApi, result, errorMessage]
}
