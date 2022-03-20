import http from '../../helpers/http'
import qs from 'qs'

export const loginProcess = (email, password) => {
  const data = { 'email': email, 'password': password };
  return {
    type: 'AUTH_LOGIN',
    payload: http().post('/auth/login', qs.stringify(data))
  }
}

export const getDataUsers = (token) => {
  return {
    type: 'GET_USER',
    payload: http(token).get('/users')
  }
}

export const getDataProfile = (token) => {
  return {
    type: 'GET_PROFILE',
    payload: http(token).get('/profile')
  }
}

export const forgotPassword = (email) => {
  const params = new URLSearchParams()
  params.append('email', email)
  return ({
    type: 'AUTH_FORGOT_PASSWORD',
    payload: http().post('auth/forgot-password?callback_url=http://localhost:3000', params)
  })
}

export const createNewPassword = (data) => {
  const params = new URLSearchParams()
  params.append('otp', data.otp)
  params.append('newPassword', data.newPassword)
  params.append('confirmPassword', data.confirmPassword)
  return ({
    type: 'AUTH_NEW_PASSWORD',
    payload: http().post('auth/forgot-password', params)
  })
}