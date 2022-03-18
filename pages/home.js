import Chart from '../components/Chart'
import SideBar from '../components/SideBar'
import Button from '../components/Button'

const home = () => {
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
            <div className='col-7'>
              <Chart data={[10, 50, 20, 0, 10, 40, 100]} labels={['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri']} income={100000} expense={10000} />
            </div>
            <div className='col-5'>
              x
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home