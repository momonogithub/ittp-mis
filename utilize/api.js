import fetch from 'isomorphic-unfetch'

const API_SERVER = 'http://localhost:3000'

const getJSON = url => fetch(url, {
  method: 'GET',
  headers: {
    Accept: 'application/JSON',
    'Content-type': 'application/json',
  },
})
  .then(respone => respone.json())
  .then(json => {
    if(json.error) {
      throw Error(json.error.message)
    }
    return json
  })

export { API_SERVER, getJSON}