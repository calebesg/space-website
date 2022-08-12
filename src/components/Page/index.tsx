import Head from 'next/head'
import { ReactElement } from 'react'
import { Header } from '../Header'

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

        <main style={{ flex: '1', display: 'flex', padding: '0 2rem' }}>
          {children}
        </main>
      </div>
    </>
  )
}
