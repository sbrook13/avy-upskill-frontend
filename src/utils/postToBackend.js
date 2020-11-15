export function postToBackend (userInput, url) {
  fetch(url, {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    },
      body: JSON.stringify(userInput)
  })
}

export function deleteFromBackend(url, id){
    return (
      fetch(`${url}${id}/`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
    )
}
