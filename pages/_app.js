import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/login.scss'
import '../styles/register.scss'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  })
  return <Component {...pageProps} />
}

export default MyApp