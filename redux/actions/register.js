import http from '../../helpers/http'

export const registerProcess = (data, pin) => {
  param.append('pin', data.pin)
  return {
    type: 'REGISTER',
    payload: http().post('/auth/register', param)
  }
}

export const getDataRegister = (dataRegister) => {
  console.log(dataRegister)
  const fullName = `${dataRegister.firstname} ${dataRegister.lastname}`
  const data = { 'fullName': fullName, 'email': dataRegister.email, 'password': dataRegister.password };
  return {
    type: 'DATA_REGISTER',
    payload: data
  }
}