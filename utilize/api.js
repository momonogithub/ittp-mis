import fetch from 'isomorphic-unfetch'

export const API_SERVER = 'http://localhost:3000'

export const getJSON = url => fetch(url, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
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