import Chart from '../components/Chart'
import SideBar from '../components/SideBar'
import Button from '../components/Button'
import Image from 'next/image'

const home = () => {
  const history = [
    { image: '/images/2.png', name: 'Samuel Suhi', status: 'Accept', value: '50000' },
    { image: '/images/1.png', name: 'Christine', status: 'Pending', value: '150000' }
  ]
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <SideBar />
        </div>
        <div className='col'>
          <div className='row'>
            <div className='col-12'>
              <div className='banner bg-color1'>
                <div className='section'>
                  <div>Balance</div>
                  <h2>Rp 120.000</h2>
                  <div>+62 813-9387-7757</div>
                </div>
                <div className='section text-end'>
                  <div className='mb-2'>
                    <Button className='transfer'>Transfer</Button>
                  </div>
                  <div>
                    <Button className='topup'>Topup</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-7 mt-2'>
              <Chart data={[10, 50, 20, 0, 10, 40, 100]} labels={['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri']} income={100000} expense={10000} />
            </div>
            <div className='col-5 mt-2'>
              <div className='row'>
                <div className='col-6'>Transaction History</div>
                <div className='col text-end'>See all</div>
              </div>
              <div className='row mt-2'>
                {history.map(item => {
                  return (
                    <>
                      <div className='col-3 mb-2' key='history'>
                        <Image src={item.image} width={56} height={56} alt='user' />
                      </div>
                      <div className='col-5'>
                        <div>{item.name}</div>
                        <div>{item.status}</div>
                      </div>
                      <div className='col text-end'>
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
    </div>
  )
}

export default home