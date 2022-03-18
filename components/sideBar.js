import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IoGridOutline } from 'react-icons/io5'
import { VscArrowUp } from 'react-icons/vsc'
import { HiPlus } from 'react-icons/hi'
import { RiUser3Line } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'

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
            color:white;
            border-color: white;
          }
          .logout{
            color:white;
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
              <Link href="/" >
                <a className=" d-flex flex-row mt-5 text-decoration-none logout">
                  <div className="px-3" ><FiLogOut /></div>
                  <div>Logout</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar