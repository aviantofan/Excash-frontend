import { Form } from 'react-bootstrap'
import Image from 'next/image'
import Button from '../components/Button'
import Input from '../components/Input'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../redux/actions/auth';
import { AiOutlineMail } from 'react-icons/ai'

const ForgotPassword = () => {

  const [error, setError] = useState({})

  const validation = (data) => {
    const newErrors = {}
    if (!data.email || data.email === '') {
      newErrors.email = 'Email must be filled'
    }
    return newErrors;
  }

  const dispatch = useDispatch()

  const handleForgotPassword = (event) => {
    event.preventDefault()
    const email = event.target.elements['email'].value
    var data = { email }
    var validate = validation(data)

    if (Object.keys(validate).length > 0) {
      setError(validate)
    } else {
      dispatch(forgotPassword(email))
      alert('Please check your email. We have sent a link')
    }
  }
  return (
    <div className='container-fluid forgotPassword-page'>
      <Form onSubmit={handleForgotPassword}>
        <div className='row'>
          <div className='col-lg-7 bg-color1'>
            <div>
              <div className='text-start px-5 mt-4 desc1'>
                <h1>Zwallet</h1>
              </div>
              <div className='d-flex flex-row justify-content-center mb-5 mt-3'>
                <Image src='/images/phone.png' className='position absolute ' width={442} height={505} alt='phone' />
              </div>
              <div className='desc1'>
                <h3 className='mx-5 '>App that Covering Banking Needs.</h3>
                <div className='d-flex-flex-row align-items-center'>
                  <p className='mx-5 mb-5 mt-4 '>Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=' col mt-3'>
            <div className='py-3'>
              <h3 className='px-5 mt-5'>Did You Forgot Your Password?
                Don`t Worry, You Can Reset Your
                Password In a Minutes.</h3>
            </div>
            <p className='mx-5 mt-4 '>To reset your password, you must type your e-mail and we will send a code to your email and you will be directed to the reset password screens.</p>
            <div className='row'>
              <div className='col-12'>
                <div className='px-5 my-3 w-100 d-inline-block ' >
                  <Input type="email" name='email' icon={<AiOutlineMail />} className=' w-100 py-2 text-color2 input-underline' placeholder='Enter your email' required />
                </div>
                {error !== null && error.email ? <Form.Control.Feedback type="invalid"></Form.Control.Feedback> : ''}
              </div>
              <div className=' col-12 mt-3 text-center '>
                <div className='px-5 my-2 w-100 d-inline-block' >
                  <Button className='confirm w-100 mt-3'>Confirm</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default ForgotPassword