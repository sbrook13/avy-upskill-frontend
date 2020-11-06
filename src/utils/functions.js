export function handleChange(event, setValue){
  setValue(event.target.value)
}

export function handleError(error){
  console.log(error.message)
}

export function setToken(token){
  localStorage.setItem('token', token)
}

export function parseJSON(response){
  return response.json()
}