import { Form } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'
import Input from '../components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginProcess } from '../redux/actions/auth'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {

  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()
  const [error, setError] = useState({})
  const router = useRouter()

  const validation = (data) => {
    const newErrors = {}
    if (!data.email || data.email === '') {
      newErrors.email = 'Email must be filled'
    }

    if (!data.password || data.password === '') {
      newErrors.password = 'Password must be filled'
    }
    return newErrors;
  }

  const handleLogin = (event) => {
    event.preventDefault()
    var email = event.target.elements["email"].value;
    var password = event.target.elements["password"].value;
    var data = { email, password }
    var validate = validation(data)

    if (Object.keys(validate).length > 0) {
      setError(validate)
    }
    else {
      dispatch(loginProcess(email, password))
      if (!auth.isError) {
        if (auth.token != null) {
          router.push('/home')
        }
      }
    }
  }
  return (
    <div className='container-fluid login-page'>
      <Form onSubmit={handleLogin}>
        <div className='row'>
          <div className='col-lg-7 bg-color1'>
            <div>
              <div className='text-start px-5 mt-4 desc1'>
                <h1>Zwallet</h1>
              </div>
              <div className='d-flex flex-row justify-content-center'>
                <Image src='/images/phone.png' className='position absolute ' width={442} height={505} alt='phone' />
              </div>
              <div className='desc1'>
                <h3 className='mx-5 '>App that Covering Banking Needs.</h3>
                <div className='d-flex-flex-row align-items-center'>
                  <p className='mx-5 mb-5 mt-4 '>Zwallet is an application that focussing in banking needs for all users
                    in the world. Always updated and always following world trends.
                    5000+ users registered in Zwallet everyday with worldwide
                    users coverage .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=' col mt-5'>
            <div className='py-3'>
              <h3 className='px-5 mt-5 '>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users
              </h3>
            </div>
            <p className='mx-5 mt-4 '>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
            <div className='row'>
              <div className='col-12'>
                <div className='px-5 my-3 w-100 d-inline-block ' >
                  <Input type="text" name="email" className=' w-100 py-2 text-color2 input-underline' placeholder='Enter your e-mail' required />
                </div>
                <span className="underline"></span>
                {error !== null && error.email ? <Form.Control.Feedback type="invalid"></Form.Control.Feedback> : ''}
              </div>
              <div className='col-12'>
                <div className='px-5 my-2 w-100 d-inline-block' >
                  <Input type="password" name="password" className='w-100 py-2 text-color input-underline' placeholder='Enter your password' required />
                </div>
                <span className="underline"></span>
                {error !== null && error.password ? <Form.Control.Feedback type="invalid"></Form.Control.Feedback> : ''}
              </div>
              <div className='col-12 mt-2 px-5 g-0 text-end'>
                <div className='mx-4 my-4'>
                  <Link href='/forgotPassword' >
                    <a className="d-flex justify-content-end text-decoration-none text-color3">
                      Forgot Password?
                    </a>
                  </Link>
                </div>
              </div>
              <div className=' col-12 text-center '>
                <div className='px-5 my-2 w-100 d-inline-block' >
                  <Button type='submit' className='login w-100 mt-3'>Login</Button>
                </div>
              </div>
              <div>
                <div className='mt-4 px-5 text-center '>Don’t have an account? Let’s <Link href="/register" ><a className='text-decoration-none text-color3'> Sign Up</a></Link></div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Login