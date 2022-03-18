import SideBar from '../components/SideBar'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BsSearch } from 'react-icons/bs'

const home = () => {
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
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1"><BsSearch /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search receiver here" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                </div>
              </div>
              <div className='row mt-2'>
                {transfer.map(item => {
                  return (
                    <>
                      <div className='col-lg-1 mb-3' key='history'>
                        <Image src={item.image} width={56} height={56} alt='user' />
                      </div>
                      <div className='col-lg-11'>
                        <div>{item.name}</div>
                        <div>{item.number}</div>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default home