import SideBar from '../components/SideBar'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Input'
import Button from '../components/Button'
import { FiLock } from "react-icons/fi";

const changePassword = () => {
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
                <div className='col-6 mt-2 fw-bold'>Change Password</div>
              </div>
              <div className='row mt-3 align-items-center'>
                <div className='col-lg'>
                  <div>You must enter your current password and then<br /> type your new password twice.</div>
                </div>
              </div>
              <div className='row mt-5' >
                <div className='col-12 text-center'>
                  <Input type='password' icon={<FiLock />} className='input-underline text-start bg-color5 text-color4 w-50' placeholder='Current password' />
                </div>
              </div>
              <div className='row mt-5' >
                <div className='col-12 text-center'>
                  <Input type='password' icon={<FiLock />} className='input-underline text-start bg-color5 text-color4 w-50' placeholder='New password' />
                </div>
              </div>
              <div className='row mt-5' >
                <div className='col-12 text-center'>
                  <Input type='password' icon={<FiLock />} className='input-underline text-start bg-color5 text-color4 w-50' placeholder='Repeat new password' />
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

export default changePassword