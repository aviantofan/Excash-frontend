import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'
import Input from '../components/Input'

const login = () => {
  return (
    <div className='container-fluid login-page'>
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
                <Input type="text" className=' w-100 py-2 text-color2 input-underline' placeholder='Enter your e-mail' />
              </div>
              <span className="underline"></span>
            </div>
            <div className='col-12'>
              <div className='px-5 my-2 w-100 d-inline-block' >
                <Input type="password" className='w-100 py-2 text-color input-underline' placeholder='Enter your password' />
              </div>
              <span className="underline"></span>
            </div>
            <div className='col-12 mt-2 px-5 g-0 text-end'>
              <div className='mx-4 my-4'>
                <Link href='/forgotpassword' >
                  <a className="d-flex justify-content-end text-decoration-none text-color3">
                    Forgot Password?
                  </a>
                </Link>
              </div>
            </div>
            <div className=' col-12 text-center '>
              <div className='px-5 my-2 w-100 d-inline-block' >
                <Button className='login w-100 mt-3'>Login</Button>
              </div>
            </div>
            <div>
              <div className='mt-4 px-5 text-center '>Don’t have an account? Let’s <Link href="/register" ><a className='text-decoration-none text-color3'> Sign Up</a></Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login