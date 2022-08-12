import { GetServerSideProps } from 'next'
import { Tab } from '@headlessui/react'
import api from '../../libs/axios'

import { Page } from '../../components/Page'

import styles from './styles.module.scss'

type Destination = {
  name: string
  image: {
    png: string
    webp: string
  }
}

interface DestinationProps {
  data: string
}

export default function Destination({ data }: DestinationProps) {
  const destinations = JSON.parse(data) as Destination[]

  if (!destinations) return null

  return (
    <Page title="Destination - Space website" className={styles.page}>
      <>
        <h1 className={styles.title}>
          <span>01</span> Pick your destination
        </h1>

        <div className={styles.destination}>
          <Tab.Group>
            <Tab.List></Tab.List>
          </Tab.Group>
        </div>
      </>
    </Page>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/destinations')

  const { data } = response

  return {
    props: {
      data: JSON.stringify(data),
    },
  }
}
