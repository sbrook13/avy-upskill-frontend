export function handleChange(event, setValue){
  setValue(event.target.value)
}

export function handleError(error){
  const errorMessage = document.querySelector('.login-error')
  errorMessage.innerHTML = error
}

export function setToken(token){
  localStorage.setItem('token', token)
}

export function parseJSON(response){
  return response.json()
}

export const handleSetStateOnClick = (event, state, choice) => {
  state(choice)
}

export const setMarkersFromBackend = (allPoints, setFunction) => {
  let cumulativeArray =[]
  allPoints.map(point => {
    let marker = {
      markerOffset: -30,
      name: `${point.name}`,
      coordinates: [parseFloat(point.lon), parseFloat(point.lat)]
    }
    cumulativeArray = [...cumulativeArray, marker]
  })
  setFunction(cumulativeArray)
}