import Image from 'next/image'
import Button from '../components/Button'
import Input from '../components/Input'


const forgotpassword = () => {
  return (
    <div className='container-fluid forgotPassword-page'>
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
          <p className='mx-5 mt-4 '>Now you can create a new password for your Zwallet<br /> account. Type your password twice so we can confirm your<br /> new passsword.</p>
          <div className='row'>
            <div className='col-12'>
              <div className='px-5 my-3 w-100 d-inline-block ' >
                <Input type="password" className=' w-100 py-2 text-color2 input-underline' placeholder='Create new password' />
              </div>
            </div>
            <div className='col-12'>
              <div className='px-5 my-3 w-100 d-inline-block ' >
                <Input type="password" className=' w-100 py-2 text-color2 input-underline' placeholder='Re-type your new password' />
              </div>
            </div>
            <div className=' col-12 mt-3 text-center '>
              <div className='px-5 my-2 w-100 d-inline-block' >
                <Button className='confirm w-100 mt-3'>Reset Password</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default forgotpassword