import axios from 'axios'

const instance = axios.create({
  baseURL:
    process.env.env === 'development'
      ? 'http://localhost:5000'
      : process.env.REACT_APP_API_URL,
})

export default instance
