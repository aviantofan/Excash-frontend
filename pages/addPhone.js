import SideBar from '../components/SideBar'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Input'
import Button from '../components/Button'

const addPhone = () => {
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
                <div className='col-6 mt-2 fw-bold'>Add Phone Number</div>
              </div>
              <div className='row mt-3 align-items-center'>
                <div className='col-lg'>
                  <div>Add at least one phone number for the transfer<br /> ID so you can start transfering your money to<br /> another user.</div>
                </div>
              </div>
              <div className='row mt-5' >
                <div className='col-12 text-center'>
                  <Input type='password' className='input-underline text-start bg-color5 text-color4 w-50' placeholder='Enter your phone number' />
                </div>
              </div>
              <div className='row mt-5' >
                <div className='col-12 text-center'>
                  <Button type='submit' className='change w-50' >Add Phone Number</Button>
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

export default addPhone