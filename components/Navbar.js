import { Navbar, Container } from "react-bootstrap";
import Image from 'next/image'
import styles from '../styles/navbar.module.scss'

const Nav = () => {
  return (
    <Navbar className={styles.navbarLight} variant="dark">
      <Container>
        <Navbar.Brand className={styles.navbarBrand} href="/">Wallet-me</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Image src='/images/profil.png' width={70} height={50} alt='profile' className="me-3 rounded-full" />
          <Navbar.Text>
            <div className={styles.textName}>Robert Chandler</div>
            <div className={styles.textPhone}>+62 8139 3877 7946</div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav