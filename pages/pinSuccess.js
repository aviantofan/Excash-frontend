import Image from 'next/image'
import Button from '../components/Button'
import { FaCheckCircle } from 'react-icons/fa'
import { useRouter } from "next/router";

const PinSuccess = () => {

  const router = useRouter()
  const onLogin = () => {
    router.push('/login')
  }

  return (
    <div className='container-fluid createPin-page'>
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
          <div className='mx-5 fs-1 text-success'>
            <FaCheckCircle />
          </div>
          <h4 className="mx-5 text-color3 fw-bold mt-5">Your PIN Was Successfully Created</h4>
          <p className='mx-5 mt-5 '>Your PIN was successfully created and you can now access<br /> all the features in Zwallet. Login to your new account and<br /> start exploring!</p>
          <div className='row'>
            <div className=' col-12 mt-3 text-center '>
              <div className='px-5 my-2 w-100 d-inline-block' >
                <Button className='confirm w-100 mt-3' onClick={onLogin}>Login Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PinSuccess