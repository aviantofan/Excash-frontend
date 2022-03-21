import SideBar from '../components/SideBar'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Input'
import Button from '../components/Button'
import Link from 'next/link'

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
                <div className='col-6 mb-3 text'>Transfer Money</div>
              </div>
              <div className='row mt-2 data bg-white align-items-center'>
                <div className='col-lg-1 mb-3 pt-4' key='history'>
                  <Image src='/images/2.png' width={56} height={56} alt='user' />
                </div>
                <div className='col-lg-11'>
                  <div>Samuel Suhi</div>
                  <div>+62 813-8492-9994</div>
                </div>
              </div>
              <div className='row mt-4'>
                <div>Type the amount you want to transfer and then <br />
                  press continue to the next steps.</div>
              </div>
              <div className='row mt-4'>
                <div className='col-12'>
                  <Input type='text' className='input-amount text-center text-color4 w-100' placeholder='0.00' />
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col-12 text-center'>
                  <div>Rp{Number('120000').toLocaleString('id-ID')} Available</div>
                </div>
              </div>
              <div className='row mt-3' >
                <div className='col-12 text-center'>
                  <Input type='text' className='input-underline text-start bg-color5 text-color4 w-50' placeholder='Add some notes' />
                </div>
              </div>
              <div className='row mt-3' >
                <div className='col-12 text-end'>
                  <Link href='/confirmation'>
                    <a>
                      <Button type='text' className='transferInput'>Continue</Button>
                    </a>
                  </Link>
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