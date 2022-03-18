import SideBar from '../components/SideBar'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BsSearch } from 'react-icons/bs'

const transfer = () => {
  const transfer = [
    { image: '/images/2.png', name: 'Samuel Suhi', number: '+62 813-8492-9994' },
    { image: '/images/1.png', name: 'Christine', number: '+62 812-4343-6731' }
  ]
  return (
    <>
      <Header />
      <div className='container mt-4 mb-4'>
        <div className='row'>
          <div className='col-3 sideBar bg-color5' key='sideBar'>
            <SideBar />
          </div>
          <div className='col'>
            <div className='container history bg-color5'>
              <div className='row'>
                <div className='col-6 mt-4 mb-3'>Search Receiver</div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <div className='d-flex flex-row align-items-center d-inline-block position-relative'>
                    <div className="position-absolute px-2"><BsSearch /></div>
                    <input type="text" className='px-5 py-2 bg-color5 w-100' placeholder='Search receiver here' />
                  </div>
                </div>
              </div>
              {transfer.map(item => {
                return (
                  <>
                    <div className='row mt-2 data bg-white align-items-center'>
                      <div className='col-lg-1 mb-3 pt-4' key='history'>
                        <Image src={item.image} width={56} height={56} alt='user' />
                      </div>
                      <div className='col-lg-11'>
                        <div>{item.name}</div>
                        <div>{item.number}</div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default transfer