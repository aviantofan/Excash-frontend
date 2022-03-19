import http from '../../helpers/http'

export const login = (email, password) => {
  const param = new URLSearchParams()
  param.append('email', email)
  param.append('password', password)
  return {
    type: 'AUTH_LOGIN',
    payload: http().post('/auth/login', param)
  }
}

export const getDataUsers = (token) => {
  return {
    type: 'GET_USER',
    payload: http(token).get('/users')
  }
}