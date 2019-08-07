const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
  return fetch('https://swapi.co/api/people')
  .then(response => response.json())
  .then(data => {
    console.log('data: ', data)
    return {
      count: data.count,
      results: data.results
    }
  })
}

const getPeopleAsync = async (fetch) => {
  const getRequest = await fetch('https://swapi.co/api/people');
  const data = await getRequest.json();

  console.log('data: ', data)
  return {
    count: data.count,
    results: data.results
  }
}

// console.log(getPeopleAsync(fetch))

module.exports = {
  getPeopleAsync,
  getPeoplePromise
}
