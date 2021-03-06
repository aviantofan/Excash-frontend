import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IoGridOutline } from 'react-icons/io5'
import { VscArrowUp } from 'react-icons/vsc'
import { HiPlus } from 'react-icons/hi'
import { RiUser3Line } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'

const SideBar = () => {
  const route = useRouter()
  const [active, setActive] = useState('/')
  useEffect(() => {
    setActive(route.pathname)
  }, [route.pathname])
  const menu = [
    { link: '/home', name: 'Dashboard', icon: IoGridOutline },
    { link: '/transfer', name: 'Transfer', icon: VscArrowUp },
    { link: '/topup', name: 'Topup', icon: HiPlus },
    { link: '/profile', name: 'Profile', icon: RiUser3Line },
  ]

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const router = useRouter()

  const onLogout = (e) => {
    e.preventDefault()
    dispatch({ type: 'AUTH_LOGOUT' })
    router.push('/login')
  }
  return (
    <>
      <style jsx>
        {`
          .menu {
              list-style-type: none;
          }
          .menu li {
              margin: 10px 0;
          }
          .menu li a{
            color: #4C0027;
            padding-left: 10px;
            text-decoration: none;
            border-left: 3px solid transparent;
          }
          .menu li a.active{
            color:#980F5A;
            border-color: #980F5A;
          }
          .logout{
            color:#4C0027;
          }
      `}
      </style>
      <ul className='menu' key='menu'>
        {menu.map(item => {
          const Icon = item.icon
          return (
            <li key={item.name}>
              <Link href={item.link}>
                <a className={`d-flex flex-row align-items-center mt-4 ${active === item.link ? 'active' : ''}`}>
                  <Icon className='me-3' />
                  {item.name}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className='mt-5'>
        <div className="px-4  mt-5">
          <div className="px-4 py-5 mt-5">
            <div className="mt-5 py-3">
              <a className=" d-flex flex-row mt-5 text-decoration-none logout">
                <div className="px-3" ><FiLogOut /></div>
                <div onClick={onLogout}>Logout</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar