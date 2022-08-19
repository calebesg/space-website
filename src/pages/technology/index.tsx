import { GetStaticProps } from 'next'
import { useLayoutEffect, useState } from 'react'

import api from '../../libs/axios'
import { Page } from '../../components/Page'

import styles from './styles.module.scss'
import { Tab } from '@headlessui/react'

type Technology = {
  name: string
  description: string
  images: {
    landscape: string
    portrait: string
  }
}

interface TechnologyProps {
  data: Technology[]
}

export default function Technology({ data }: TechnologyProps) {
  const [mode, setMode] = useState<'portrait' | 'landscape'>('portrait')

  useLayoutEffect(() => {
    const onResize = () => {
      const { width } = window.screen

      if (width <= 1000) setMode('landscape')
      else setMode('portrait')
    }

    onResize()

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <Page title="Technology | Space Website" className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span>03</span> Space Launch 101
        </h1>

        <div className={styles.content}>
          <Tab.Group>
            <div className={styles.tabContainer}>
              <Tab.List className={styles.tabButtons}>
                <Tab
                  className={({ selected }) =>
                    `${styles.tabButton} ${selected ? styles.active : ''}`
                  }
                >
                  1
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `${styles.tabButton} ${selected ? styles.active : ''}`
                  }
                >
                  2
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `${styles.tabButton} ${selected ? styles.active : ''}`
                  }
                >
                  3
                </Tab>
              </Tab.List>

              <Tab.Panels>
                {data.map(technology => (
                  <Tab.Panel key={technology.name} className={styles.tabPanel}>
                    <div>
                      <span>The technology...</span>
                      <h2>{technology.name}</h2>
                      <p>{technology.description}</p>
                    </div>

                    {mode === 'portrait' ? (
                      <img
                        src={technology.images.portrait}
                        alt={technology.name}
                      />
                    ) : (
                      <img
                        src={technology.images.landscape}
                        alt={technology.name}
                      />
                    )}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/technology')

  return {
    props: {
      data: response.data,
    },
    revalidate: 60 * 60,
  }
}
