export function isAuth(): Boolean {
  if (localStorage.getItem('jwtToken')) {
    return true
  } else {
    return false
  }
}