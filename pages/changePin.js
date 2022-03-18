import SideBar from '../components/SideBar'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PinInput from '../components/PinInput'
import Button from '../components/Button'

const changePin = () => {
  return (
    <>
      <Header />
      <div className='container mt-4 mb-4'>
        <div className='row'>
          <div className='col-3 sideBar bg-color5' key='sideBar'>
            <SideBar />
          </div>
          <div className='col'>
            <div className='container dataProfile bg-color5'>
              <div className='row'>
                <div className='col-6 mt-2 fw-bold'>Change Pin</div>
              </div>
              <div className='row mt-3 align-items-center'>
                <div className='col-lg'>
                  <div>Enter your current 6 digits Zwallet PIN below to<br /> continue to the next steps.</div>
                </div>
              </div>
              <div className='row mt-5' >
                <div className='col-12 text-center'>
                  <PinInput />
                </div>
              </div>
              <div className='row mt-5' >
                <div className='col-12 text-center'>
                  <Button type='submit' className='change w-50' >Change Password</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default changePin