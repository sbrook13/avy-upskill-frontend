export function handleChange(event, setValue){
  setValue(event.target.value)
}

export function setToken(token){
  localStorage.setItem('token', token)
}

export function parseJSON(response){
  return response.json()
}

export const captureInput = (event, setFunction) => {
  const input = event.target.value
  setFunction(input)
}

export const handleSetStateOnClick = (event, state, choice) => {
  state(choice)
}

export function setMarkerFormat(allPoints, setFunction) {
  let cumulativeArray =[]
  allPoints.map(point => {
    let marker = {
      markerOffset: -30,
      name: `${point.name}`,
      coordinates: [parseFloat(point.lon), parseFloat(point.lat)],
      fullInfo: point
    }
    cumulativeArray = [...cumulativeArray, marker]
  })
  setFunction(cumulativeArray)
}

export const reformatDate = (dateToReformat) => {
  let date = new Date(dateToReformat)
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return `${month}/${day}/${year}`
}