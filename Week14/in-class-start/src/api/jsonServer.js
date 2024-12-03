import axios from 'axios'

export default axios.create({
    // this base URL will change each time you run "npm run tunnel", be sure to update this here!
    baseURL: 'https://de1ac38cbffa.ngrok.app/',
    
})

