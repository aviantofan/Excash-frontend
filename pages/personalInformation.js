import SideBar from '../components/SideBar'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Input'
import Button from '../components/Button'

const personalInformation = () => {
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
                <div className='col-6 mt-2 fw-bold'>Personal Information</div>
              </div>
              <div className='row mt-3 align-items-center'>
                <div className='col-lg'>
                  <div>We got your personal information from the sign <br /> up proccess. If you want to make changes on <br /> your information, contact our support.</div>
                </div>
              </div>
              <div className='row mt-3 userData bg-white align-items-center'>
                <div className='col-lg py-2'>
                  <div>First Name</div>
                  <div className='text fw-bold'>Robert</div>
                </div>
              </div>
              <div className='row mt-2 userData bg-white align-items-center'>
                <div className='col-lg py-2'>
                  <div>Last Name</div>
                  <div className='text fw-bold'>Chandler</div>
                </div>
              </div>
              <div className='row mt-2 userData bg-white align-items-center'>
                <div className='col-lg py-2'>
                  <div>Verified Email</div>
                  <div className='text fw-bold'>pewdiepie1@mail.com</div>
                </div>
              </div>
              <div className='row mt-2 userData bg-white align-items-center'>
                <div className='col-lg py-2'>
                  <div className='row align-items-center'>
                    <div className='col-6'>
                      <div>Phone Number</div>
                      <div className='text fw-bold'>+62 813-9387-7946</div>
                    </div>
                    <div className='col text-end '>
                      Manage
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

export default personalInformation