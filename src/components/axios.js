import axios from 'axios'

const instance = axios.create({
    // the api cloud url
    baseURL:'http://localhost:5001/work-f881d/us-central1/listen' 
})

export default instance