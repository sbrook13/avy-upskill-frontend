const localURL = 'http://localhost:8000';
const herokuURL = 'https://avyupskill.herokuapp.com'
const baseURL = `${herokuURL}`;
export const loginURL = `${baseURL}/login`;
export const signupURL = `${baseURL}/signup`;
export const profileURL = `${baseURL}/profile`;
export const coursesURL = `${baseURL}/courses`;
export const parksURL = `${baseURL}/beacon_parks`;
export const areasURL = `${baseURL}/areas`;


export const authHeaders = { 
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.token}`
}