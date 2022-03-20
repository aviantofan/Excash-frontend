import Button from "../components/Button"
import Input from "../components/Input"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { BsCheckCircle } from 'react-icons/bs'

const Topup = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-12 col-md-3 sideBar bg-color5' key='sideBar'>
            <SideBar />
          </div>
          <div className='col-6 topup bg-color5'>
            <div className="row">
              <div className="col-12">
                <h1 className='fs-5 mt-3'>Top Up</h1>
                <p>Enter the amount of money, and click submit</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <Input type="text" name="amount" className=' w-100 py-2 text-center text-color2 input-border fs-1' required />
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-end">
                <Button type='submit' className='login w-25 mt-3 mb-3'>Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {errTopup && <div className='bg-secondary bg-opacity-10 position-absolute top-0 d-flex justify-content-center align-items-center vh-100 vw-100' onClick={closeErr}>
        <div className='bg-white p-3' style={{ borderRadius: '10px' }}>
          <h1 className='border border-4 border-color5 text-danger rounded-pill text-center mx-auto' style={{ width: '60px', height: '60px', lineHeight: '50px' }}>X</h1>
          <h1 className='fs-4 text-danger text-center'>FAILED</h1>
          <p>Minimum top up amount is Rp. 10.000</p>
        </div>
      </div>}
      {successTopup && <div className='bg-secondary bg-opacity-10 position-absolute top-0 d-flex justify-content-center align-items-center vh-100 vw-100' onClick={closeSuccess}>
        <div className='bg-white p-3 text-center' style={{ borderRadius: '10px', width: '250px' }}>
          <h1 className='text-color3 rounded-pill mx-auto' style={{ width: '60px', height: '60px', lineHeight: '50px' }}><BsCheckCircle /></h1>
          <h1 className='fs-4 text-color3'>SUCCESS</h1>
          <p>Top up success</p>
        </div>
      </div>} */}
      <Footer />
    </>
  )
}

export default Topup