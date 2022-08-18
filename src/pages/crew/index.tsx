import { GetStaticProps } from 'next'
import { Page } from '../../components/Page'
import { SliderCrew } from '../../components/SliderCrew'

import api from '.././../libs/axios'

import styles from './styles.module.scss'

interface CrewProps {
  data: {
    name: string
    images: {
      png: string
      webp: string
    }
    role: string
    bio: string
  }[]
}

export default function Crew({ data }: CrewProps) {
  return (
    <Page title="Crew | Space Website" className={styles.page}>
      <>
        <h1 className={styles.title}>
          <span>02</span> Meet your crew
        </h1>

        <SliderCrew data={data} />
      </>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/crew')

  return {
    props: {
      data: response.data,
    },
  }
}
