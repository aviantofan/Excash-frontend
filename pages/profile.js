import SideBar from '../components/SideBar'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { BsPencil } from 'react-icons/Bs'
import { FaArrowRight } from 'react-icons/Fa'

const profile = () => {
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
              <div className='row text-center pt-4'>
                <div className='col-12'>
                  <div>
                    <Image src='/images/user.png' width={80} height={80} alt='user' />
                  </div>
                  <div>
                    <p><BsPencil />Edit</p>
                  </div>
                </div>
              </div>
              <div className='row mt-1 text-center'>
                <div className='col'>
                  <div className='fw-bold text'>Robert Chandler</div>
                  <div>+62 813-9387-7946</div>
                </div>
              </div>
              <div className='row mt-3 align-items-center justify-content-center'>
                <div className='col-lg-12 py-3 user bg-white'>
                  <div className='row'>
                    <div className='col-6'>
                      <div>Personal Information</div>
                    </div>
                    <div className='col-6 text-end'>
                      <div><FaArrowRight /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-3 align-items-center justify-content-center'>
                <div className='col-lg-12 py-3 user bg-white'>
                  <div className='row'>
                    <div className='col-6'>
                      <div>Change Password</div>
                    </div>
                    <div className='col-6 text-end'>
                      <div><FaArrowRight /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-3 align-items-center justify-content-center'>
                <div className='col-lg-12 py-3 user bg-white'>
                  <div className='row'>
                    <div className='col-6'>
                      <div>Change PIN</div>
                    </div>
                    <div className='col-6 text-end'>
                      <div><FaArrowRight /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-3 align-items-center justify-content-center'>
                <div className='col-lg-12 py-3 user bg-white'>
                  <div className='row'>
                    <div className='col-6'>
                      <div>Logout</div>
                    </div>
                  </div>
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

export default profile