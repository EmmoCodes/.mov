export const getAllMovies = (apiKey, setState, key) => {
  return fetch(apiKey)
    .then(response => {
      if (!response.ok) {
        throw new Error('something went wrong with fetch')
      }
      return response.json()
    })
    .then(response => (key ? setState(response[key].filter(movie => !movie.adult)) : setState(response)))

    .catch(error => console.log(error.message))
}
