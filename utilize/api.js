import fetch from 'isomorphic-unfetch'
import Cookies from 'universal-cookie'

const getAccessToken = () => {
  const cookies = new Cookies()
  const token = cookies.get('accessToken')
  return token
}

export const API_SERVER = 'http://localhost:3000'

export const getJSON = url => fetch(url, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: getAccessToken(),
  },
})
  .then(response => response.json())
  .then((json) => {
    if (json.error) {
      throw Error(json.error.message)
    }
    return json
  })

export const postJSON = (url, jsonBody) => fetch(url, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: getAccessToken(),
  },
  body: JSON.stringify(jsonBody),
})
  .then(response => response.json())
  .then((json) => {
    if (json.error) {
      throw Error(json.error.message)
    }
    return json
  })

export const patchJSON = (url, jsonBody) => fetch(url, {
  method: 'PATCH',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: getAccessToken(),
  },
  body: JSON.stringify(jsonBody),
})
  .then(response => response.json())
  .then((json) => {
    if (json.error) {
      throw Error(json.error.message)
    }
    return json
  })