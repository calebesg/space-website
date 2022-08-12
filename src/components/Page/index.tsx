import Head from 'next/head'
import { ReactElement } from 'react'
import { Header } from '../Header'

import styles from './styles.module.scss'

interface PageProps {
  title: string
  children: ReactElement
  className: string
}

export function Page({ title, children, className }: PageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div
        className={className}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Header />

        <main className={styles.container}>
          <div className={styles.content}>{children}</div>
        </main>
      </div>
    </>
  )
}
