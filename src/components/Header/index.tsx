import Link from 'next/link'
import Image from 'next/image'

import logo from '../../../public/images/logo.svg'
import styles from './styles.module.scss'

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
          <Link href="/" passHref>
            <a>
              <span>00</span> Home
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <span>01</span> Destination
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <span>02</span> Crew
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <span>03</span> Technology
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
