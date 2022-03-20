import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/login.scss'
import '../styles/register.scss'
import '../styles/createPin.scss'
import '../styles/forgotPassword.scss'
import '../styles/home.scss'
import '../styles/history.scss'
import '../styles/transfer.scss'
import '../styles/profile.scss'
import '../styles/topup.scss'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  })
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp