import SideBar from '../components/SideBar'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Input'
import Button from '../components/Button'
import { BiTrashAlt } from 'react-icons/bi'

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
                <div className='col-6 mt-2 fw-bold'>Manage Phone Number</div>
              </div>
              <div className='row mt-3 align-items-center'>
                <div className='col-lg'>
                  <div>You can only delete the phone number and then <br /> you must add another phone number.</div>
                </div>
              </div>
              <div className='row mt-3 userData bg-white align-items-center'>
                <div className='col-lg-6 py-2'>
                  <div>Primary</div>
                  <div className='text fw-bold'>+62 813 9387 7946</div>
                </div>
                <div className='col-lg-6 text text-end'>
                  <BiTrashAlt />
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