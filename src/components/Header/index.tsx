import Link from 'next/link'
import Image from 'next/image'

import logo from '../../../public/images/logo.svg'
import menuIcon from '../../../public/images/icon-hamburger.svg'
import styles from './styles.module.scss'
import { NavLink } from '../NavLink'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href="/" passHref>
          <a className={styles.logo}>
            <Image src={logo} alt="Logo" />
          </a>
        </Link>

        <hr />

        <nav>
          <NavLink href="/" passHref>
            <a>
              <span>00</span> Home
            </a>
          </NavLink>

          <NavLink href="/destination" passHref>
            <a>
              <span>01</span> Destination
            </a>
          </NavLink>

          <NavLink href="/crew" passHref>
            <a>
              <span>02</span> Crew
            </a>
          </NavLink>

          <NavLink href="/technology" passHref>
            <a>
              <span>03</span> Technology
            </a>
          </NavLink>
        </nav>

        <button type="button" className={styles.btnMenu}>
          <Image src={menuIcon} alt="menu" />
        </button>
      </div>
    </header>
  )
}
