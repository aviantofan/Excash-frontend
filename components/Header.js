import { Navbar, Container } from "react-bootstrap";
import Image from 'next/image'
import styles from '../styles/header.module.scss'
import { VscBell } from 'react-icons/vsc'

const Header = () => {
  return (
    <Navbar className={styles.navbarLight} variant="dark">
      <Container>
        <Navbar.Brand className={styles.navbarBrand} href="/home">ZWallet</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Image src='/images/user.png' width={52} height={52} alt='profile' className="rounded-full" />
          <Navbar.Text>
            <div className={styles.textName}>Robert Chandler</div>
            <div className={styles.textPhone}>+62 8139 3877 7946</div>
          </Navbar.Text>
          <div className={styles.icons}>
            <VscBell />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header