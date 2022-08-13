import { GetServerSideProps } from 'next'
import { Tab } from '@headlessui/react'
import api from '../../libs/axios'

import { Page } from '../../components/Page'

import styles from './styles.module.scss'
import classNames from 'classnames'

type Destination = {
  name: string
  images: {
    png: string
    webp: string
  }
  description: string
  distance: string
  travel: string
}

interface DestinationProps {
  data: string
}

export default function Destination({ data }: DestinationProps) {
  const destinations = JSON.parse(data) as Destination[]

  if (!destinations) return null

  console.log(destinations)

  return (
    <Page title="Destination - Space website" className={styles.page}>
      <>
        <h1 className={styles.title}>
          <span>01</span> Pick your destination
        </h1>

        <div className={styles.destination}>
          <Tab.Group>
            <Tab.List className={styles.tabs}>
              {destinations.map(destination => (
                <Tab
                  key={destination.name}
                  className={({ selected }) =>
                    `${styles.tab} ${selected && styles.active}`
                  }
                >
                  {destination.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {destinations.map(destination => (
                <Tab.Panel key={destination.name}>
                  <div className={styles.tabContent}>
                    <img
                      src={destination.images.png}
                      alt={`figura da ${destination.name}`}
                    />
                    <div>
                      <strong>{destination.name}</strong>
                      <p>{destination.description}</p>

                      <div className={styles.distance}>
                        <div>
                          <strong>AVG. DISTANCE</strong>
                          <span>{destination.distance}</span>
                        </div>
                        <div>
                          <strong>EST. TRAVEL TIME</strong>
                          <span>{destination.travel}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
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
