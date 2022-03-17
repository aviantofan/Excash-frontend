import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IoGridOutline } from 'react-icons/io5'
import { VscArrowUp } from 'react-icons/vsc'
import { HiPlus } from 'react-icons/hi'
import { RiUser3Line } from 'react-icons/ri'
import styles from '../styles/sideBar.module.css'

const SideBar = () => {
  const route = useRouter()
  const [active, setActive] = useState('/')
  useEffect(() => {
    setActive(route.pathname)
  }, [route.pathname])
  const menu = [
    { link: '/', name: 'Dashboard', icon: IoGridOutline },
    { link: '/transfer', name: 'Transfer', icon: VscArrowUp },
    { link: '/topup', name: 'Topup', icon: HiPlus },
    { link: '/profile', name: 'Profile', icon: RiUser3Line },
  ]
  return (
    <>
      <ul className={styles.menu}>
        {menu.map(item => {
          const Icon = item.icon
          return (
            <li key={item.name}>
              <Link href={item.link}>
                <a className={active === item.link ? 'active' : ''}>
                  <Icon className='me-3' />
                  {item.name}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default SideBar