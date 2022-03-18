import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/login.scss'
import '../styles/register.scss'
import '../styles/createPin.scss'
import '../styles/forgotPassword.scss'
import '../styles/home.scss'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  })
  return <Component {...pageProps} />
}

export default MyApp