import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper'

import api from '.././../libs/axios'
import { Page } from '../../components/Page'

import styles from './styles.module.scss'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

import { SlideIndicator } from '../../components/SlideIndicator'

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
  const [activeIndex, setActiveIndex] = useState(0)

  function renderIndicators() {
    return (
      <div className={styles.indicators}>
        {data.map((_, index) => (
          <SlideIndicator key={index} index={index} activeIndex={activeIndex} />
        ))}
      </div>
    )
  }

  return (
    <Page title="Crew | Space Website" className={styles.page}>
      <>
        <h1 className={styles.title}>
          <span>02</span> Meet your crew
        </h1>

        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          className={styles.container}
          modules={[EffectCoverflow]}
          effect="coverflow"
          onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
        >
          {renderIndicators()}

          {data.map(slide => (
            <SwiperSlide key={slide.name} className={styles.slideItem}>
              <div className={styles.slideContent}>
                <span>{slide.role}</span>
                <h2>{slide.name}</h2>
                <p>{slide.bio}</p>
              </div>

              <img src={slide.images.png} alt={slide.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </Page>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/crew')

  return {
    props: {
      data: response.data,
    },
  }
}
