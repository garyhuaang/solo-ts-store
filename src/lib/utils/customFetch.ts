import axios from 'axios'

const baseURL = 'https://strapi-store-server.onrender.com/api'

const customFetch = axios.create({
  baseURL: baseURL,
})

export default customFetch
