import SideBar from '../components/SideBar'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Input'
import Button from '../components/Button'

const transferInput = () => {
  return (
    <>
      <Header />
      <div className='container mt-4 mb-4'>
        <div className='row'>
          <div className='col-3 sideBar bg-color5' key='sideBar'>
            <SideBar />
          </div>
          <div className='col'>
            <div className='container dataTransfer bg-color5'>
              <div className='row'>
                <div className='col-6 text'>Transfer To</div>
              </div>
              <div className='row mt-1 data bg-white align-items-center'>
                <div className='col-lg-1 mb-3 pt-4' key='history'>
                  <Image src='/images/2.png' width={56} height={56} alt='user' />
                </div>
                <div className='col-lg-11'>
                  <div>Samuel Suhi</div>
                  <div>+62 813-8492-9994</div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col-6 text'>Detail</div>
              </div>
              <div className='row mt-2 data bg-white align-items-center'>
                <div className='col-lg py-2'>
                  <div>Amount</div>
                  <div className='text'>Rp{Number('100000').toLocaleString('id-ID')}</div>
                </div>
              </div>
              <div className='row mt-2 data bg-white align-items-center'>
                <div className='col-lg py-2'>
                  <div>Balance Left</div>
                  <div className='text'>Rp{Number('20000').toLocaleString('id-ID')}</div>
                </div>
              </div>
              <div className='row mt-2 data bg-white align-items-center'>
                <div className='col-lg py-2'>
                  <div>Date & Time</div>
                  <div className='text'>May 11, 2020 - 12.20</div>
                </div>
              </div>
              <div className='row mt-2 data bg-white align-items-center'>
                <div className='col-lg py-2'>
                  <div>Note</div>
                  <div className='text'>For buying some socks</div>
                </div>
              </div>
              <div className='row mt-2' >
                <div className='col-12 text-end'>
                  <Button type='text' className='transferInput'>Continue</Button>
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

export default transferInput