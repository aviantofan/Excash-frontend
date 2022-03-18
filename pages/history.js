import SideBar from '../components/SideBar'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

const history = () => {
  const history = [
    { image: '/images/2.png', name: 'Samuel Suhi', status: 'Accept', value: '50000' },
    { image: '/images/1.png', name: 'Christine', status: 'Pending', value: '150000' }
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
                <div className='col-6 mt-4 mb-3'>Transaction History</div>
                <div className='col text-end mt-4 option'>
                  <select name='filter' className="form-option">
                    <option value="" style={{ display: 'none' }}>--Select Filter--</option>
                    <option value="1">Accept</option>
                    <option value="2">Topup</option>
                    <option value="3">Transfer</option>
                  </select>
                </div>
              </div>
              <div className='row mt-2'>
                {history.map(item => {
                  return (
                    <>
                      <div className='col-lg-1 mb-3' key='history'>
                        <Image src={item.image} width={56} height={56} alt='user' />
                      </div>
                      <div className='col-lg-3'>
                        <div>{item.name}</div>
                        <div>{item.status}</div>
                      </div>
                      <div className='col-lg-8 text-end'>
                        <div>{item.value}</div>
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

export default history