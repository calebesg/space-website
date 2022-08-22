import Link from 'next/link'
import { Page } from '../components/Page'

import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <Page title="Space Website" className={styles.page}>
      <div className={styles.container}>
        <div>
          <span>So, you want to Travel to</span>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link href="/destination" passHref>
          <a>Explore</a>
        </Link>
      </div>
    </Page>
  )
}
